import React, { useContext } from 'react'
import "./Profile.scss"
import { useState } from 'react';
import { Edit2, Save, X, Lock } from 'lucide-react';
import apiRequest from "../../lib/apiRequest"
import { AuthContext } from '../../context/AuthContext';

function Profile() {

  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Original profile data
  const { currentUser, updateUser } = useContext(AuthContext);

  const [originalProfile, setOriginalProfile] = useState({
    username: currentUser.username,
    email: currentUser.email,
    profilePicture: currentUser.avatar
  });

  // Editable profile data
  const [profile, setProfile] = useState({ ...originalProfile });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size too large. Please choose an image smaller than 5MB.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Calculate new dimensions while maintaining aspect ratio
        let { width, height } = img;
        const maxDimension = 500;

        if (width > height && width > maxDimension) {
          height = (height * maxDimension) / width;
          width = maxDimension;
        } else if (height > maxDimension) {
          width = (width * maxDimension) / height;
          height = maxDimension;
        }

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        // Convert to base64 with compression
        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
        setProfile(prev => ({
          ...prev,
          profilePicture: compressedBase64
        }));
      };
    };
    reader.readAsDataURL(file);
  };

  const handleSaveClick = () => {
    setShowPasswordModal(true);
    setPassword('');
    setPasswordError('');
  };

  const handleCancelEdit = () => {
    setProfile({ ...originalProfile });
    setIsEditing(false);
  };

  const handleConfirmUpdate = async () => {
  if (!password) {
    setPasswordError('Password is required');
    return;
  }

  // Find changed fields
  const updatedFields = {};
  Object.keys(profile).forEach((key) => {
    if (profile[key] !== originalProfile[key]) {
      updatedFields[key === 'profilePicture' ? 'avatar' : key] = profile[key];
    }
  });

  // If no changes were made
  if (Object.keys(updatedFields).length === 0) {
    alert("No changes detected.");
    setShowPasswordModal(false);
    setIsEditing(false);
    return;
  }

  // Add password for confirmation
  updatedFields.password = password;

  try {
    const res = await apiRequest.put("/user/update", updatedFields);

    const data = await res.data;
    console.log(res)
    updateUser(data); // update global context

    setOriginalProfile({ ...profile });
    setIsEditing(false);
    setShowPasswordModal(false);
    alert('Profile updated successfully!');
  } catch (error) {
    console.error(error);
    setPasswordError(error.response?.data?.message ||'Failed to update profile. Please try again.');
  }
};

  return (
    <div className='profiler'>
      {/* Left Side - Profile Container */}
      <div className="profile-content">
        <div className="container">
          {/* Profile Picture */}
          <div className="profile-picture-wrapper">
            <div className="profile-picture-container">
              <img
                src={profile.profilePicture}
                alt="Profile"
                className="profile-picture"
              />
              {isEditing && (
                <label className="edit-picture-btn">
                  <Edit2 size={16} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="file-input"
                  />
                </label>
              )}
            </div>
          </div>

          {/* Profile Fields */}
          <div className="profile-fields">
            {/* Username */}
            <div className="field">
              <label className="field-label">Username</label>
              {isEditing ? (
                <input
                  type="text"
                  name="username"
                  value={profile.username}
                  onChange={handleInputChange}
                  className="field-input"
                />
              ) : (
                <p className="field-value">{profile.username}</p>
              )}
            </div>

            {/* Email */}
            <div className="field">
              <label className="field-label">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  className="field-input"
                />
              ) : (
                <p className="field-value">{profile.email}</p>
              )}
            </div>
          </div>
          {/* Edit Button */}
          <div className="action-buttons">
            {!isEditing ? (
              <button onClick={() => setIsEditing(true)} className="btn btn-edit">
                <Edit2 size={18} />
                Edit Profile
              </button>
            ) : (
              <div className="button-group">
                <button onClick={handleCancelEdit} className="btn btn-cancel">
                  <X size={18} />
                  Cancel
                </button>
                <button onClick={handleSaveClick} className="btn btn-save">
                  <Save size={18} />
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Side - Background Images */}
      <div className="image-container">
        <img src="bg.png" />
      </div>

      {/* Password Confirmation Modal */}
      {showPasswordModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <div className="modal-icon">
                <Lock size={24} />
              </div>
              <h3 className="modal-title">Confirm Your Password</h3>
            </div>

            <p className="modal-text">
              Please enter your password to confirm these changes.
            </p>

            <div className="modal-field">
              <label className="field-label">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError('');
                }}
                className="field-input"
                placeholder="Enter your password"
              />
              {passwordError && (
                <p className="error-message">{passwordError}</p>
              )}
            </div>

            <div className="modal-actions">
              <button
                onClick={() => setShowPasswordModal(false)}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmUpdate}
                className="btn btn-primary"
              >
                Confirm Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;