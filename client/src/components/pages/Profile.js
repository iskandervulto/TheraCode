import React, { useState, useEffect } from "react";


import "./styles/AllPages.css";

const Profile = () => {
  const [users, setUsers] = useState([
    {
      username: "",
      password: "",
      injury: "",
      strengthening: "",
      mobility: "",
      flexibility: "",
    },
  ]);

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

  // Patch function

  const handleEditUser = (userId) => {
  
    const editedUserData = users.find((user) => user.id === userId);

    editUser(editedUserData); 
  };

  const editUser = async (userData) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${userData.Id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData), 
      });

      if (response.ok) {

      } else {
        console.error("Error editing user:", response.statusText);
      }
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  // Delete function

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${userId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setUsers(users.filter((user) => user.id !== userId));
      } else {
        console.error("Error deleting user:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="User">
      <header className="User-header">
        <h1>Profile</h1>
        {users.map((user, index) => (
          <div key={index} className="All-container">
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
            <p>Injury: {user.injury_id}</p>
            <p>Strengthening: {user.strengthening_id}</p>
            <p>Mobility: {user.mobility_id}</p>
            <p>Flexibility: {user.flexibility_id}</p>
            <button onClick={() => handleEditUser(user.id)}>Edit</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </div>
        ))}
      </header>
    </div>
  );
};

export default Profile;
