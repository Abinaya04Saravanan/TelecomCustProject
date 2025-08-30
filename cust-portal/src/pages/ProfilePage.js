// src/pages/ProfilePage.js
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import './ProfilePage.css';

export default function ProfilePage() {
  // Temporary placeholders – replace with actual session data when login system is ready
  const [userId, setUserId] = useState('USR123456');
  const [userName, setUserName] = useState('John Doe');

  useEffect(() => {
    // In a real app, fetch user details from localStorage, API, or context
    // Example:
    // const user = JSON.parse(localStorage.getItem("loggedInUser"));
    // setUserId(user?.id);
    // setUserName(user?.name);
  }, []);

  return (
    <div className="profile-page">
      <div className="profile-container mt-5">
        <div className="profile-header">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png" 
            alt="Profile Icon" 
            className="profile-image"
          />
          <h2 className="profile-title">My Profile</h2>
        </div>

        <div className="profile-info">
          <p className="profile-welcome">Welcome back, <strong>{userName}</strong>!</p>
          <ul className="profile-details">
            <li><strong>User ID:</strong> {userId}</li>
            <li><strong>Username:</strong> {userName}</li>
            <li><strong>Plan:</strong> Premium Fiber 100 Mbps</li>
          </ul>
          {/* <button className="edit-profile-btn">Edit Profile</button> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
