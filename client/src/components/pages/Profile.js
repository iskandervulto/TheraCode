import React, { useState, useEffect } from 'react'

import "./styles/AllPages.css"
import LoginForm from '../LoginForm';

const Profile = ( ) => {

  const [users, setUsers] = useState([{
    username: "",
    password: "",
    injury: "",
    strengthening: "",
    mobility: "",
    flexibility: "",
  }])

useEffect(() => {
  fetchAllUsers();
}, []);

const fetchAllUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/users");

    if (response.ok) {
      const allUsers = await response.json();
      setUsers(allUsers);
    } else {
      console.error("Error fetching users:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

return (
  <div className="User">
    <header className="User-header">
      <h1>Profile</h1>
      <LoginForm />
      {users.map((user, index) => (
        <div key={index} className="All-container">
          <p>Username: {user.username}</p>
          <p>Password: {user.password}</p>
          <p>Injury: {user.injury_id}</p>
          <p>Strengthening: {user.strengthening_id}</p>
          <p>Mobility: {user.mobility_id}</p>
          <p>Flexibility: {user.flexibility_id}</p>
        </div>
      ))}
    </header>
  </div>
);
};

export default Profile


