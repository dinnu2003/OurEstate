import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import bcrypt from 'bcrypt';
import prisma from '../PrismaCl/prisma.js';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Multer memory storage
const storage = multer.memoryStorage();


export const updateUser = async (req, res) => {
    const userId = req.userId;
    const { username, email, password, avatar } = req.body;

    try {
        console.log("🔹 Update request received for:", userId);

        // 1️⃣ Fetch user
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }

        // 2️⃣ Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password!" });
        }

        // 3️⃣ Build dynamic update object
        const updateData = {};

        // Update username if provided and different
        if (username && username !== user.username) {
            updateData.username = username;
        }

        // Update email if provided and different
        if (email && email !== user.email) {
            const existingUser = await prisma.user.findUnique({ where: { email } });
            if (existingUser) {
                return res.status(409).json({ message: "Email already exists!" });
            }
            updateData.email = email;
        }

        // 4️⃣ Handle avatar only if provided and changed
        if (avatar && avatar !== user.avatar) {
            // If base64 → upload to Cloudinary
            if (avatar.startsWith("data:image")) {
                try {
                    const uploadResult = await cloudinary.uploader.upload(avatar, {
                        folder: "user_avatars",
                        transformation: [
                            { width: 500, height: 500, crop: "limit" },
                            { quality: "auto", fetch_format: "auto" },
                        ],
                    });

                    // Delete old Cloudinary image if exists
                    if (user.avatar?.includes("res.cloudinary.com")) {
                        const parts = user.avatar.split("/");
                        const publicId = parts.slice(-2).join("/").split(".")[0];
                        await cloudinary.uploader.destroy(publicId).catch((err) =>
                            console.log("Old image deletion failed:", err.message)
                        );
                    }

                    updateData.avatar = uploadResult.secure_url;
                } catch (uploadError) {
                    console.error("Cloudinary upload error:", uploadError);
                    return res.status(500).json({ message: "Failed to upload image" });
                }
            } else {
                // If avatar is a URL (maybe reverting to a previous one)
                updateData.avatar = avatar;
            }
        }

        // 5️⃣ If no actual changes were made
        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({ message: "No changes detected" });
        }

        // 6️⃣ Update user in DB
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: updateData,
        });

        // Remove password before sending response
        const { password: _, ...userWithoutPassword } = updatedUser;

        return res.status(200).json(userWithoutPassword);
    } catch (error) {
        console.error("❌ Update user error:", error);
        return res.status(500).json({ message: "Failed to update user!" });
    }
};

export const deleteUser = async (req, res) => {
    const userId = req.userId;
    const id = req.params.id;

    if (userId !== id) {
        return res.status(403).json({ message: "Not authorized!" });
    }

    try {
        await prisma.user.delete({
            where: { id }
        });

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete user!" });
    }
};

export const getUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await prisma.user.findUnique({
            where: { id }
        });

        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }

        const { password, ...rest } = user;

        res.status(200).json(rest);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to get user!" });
    }
};