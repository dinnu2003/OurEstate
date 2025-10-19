import bcrypt from "bcrypt";
import prisma from "../PrismaCl/prisma.js";
import jwt from "jsonwebtoken"
export const Register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashPassword

            }
        })
        console.log(newUser)
        if (!newUser) {
            res.status(400).json({
                message: "An error Occured"
            })
        }

        res.status(201).json({
            message: "user created succesgully",
            data: newUser
        })
    }
    catch(err){
        res.status(500).json({
            message:"Registration Failed!"
        })
    }


}

export const Login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user=await prisma.user.findUnique({
            where:{
                username
            }
        })
        console.log(user)
        if(!user){
            res.status(401).json({
                message:"user not found"
            })
        }
        const isPassValid=await bcrypt.compare(password,user.password)
        if(!isPassValid){
            res.status(400).json({message:"Invalid credentials"})
        }
        const age=1000*60*60*24*7;

        const token=jwt.sign({
            id:user.id
        },process.env.JWT_SECRET_KEY,{expiresIn:age})
        res.cookie("token",token,{
            httpOnly:true
        }).status(200).json({message:"Login Succesfull"})
        
    } catch (err) {
        console.log(err);
        res.status(500).json({message:"Login failed"})
    }


}