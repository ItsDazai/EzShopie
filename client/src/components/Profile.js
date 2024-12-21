// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });

  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await axios.get('/api/user');
      setUserInfo(response.data);
    };
    fetchUserInfo();
  }, []);

  return (
    <div>
      <h1>Your Profile</h1>
      <input value={userInfo.name} />
      <input value={userInfo.email} />
      {/* Add buttons for updating information */}
    </div>
  );
};

export default Profile;
