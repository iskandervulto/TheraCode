import React, { useState, useEffect } from 'react'

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
    <>
    <div className="User">
    <header className="User-header">
        <h1>Profile</h1>
      <LoginForm />
    </header>
</div>

  </>
  )
}

export default Profile


// {users.map((user, index) => (
//   <div key={index}>
//     <p>Username: {user.user_name}</p>
//     <p>password: {user.password}</p>
//     <p>injury: {user.injury_id}</p>
//     <p>strengthening: {user.strengthening_id}</p>
//     <p>mobility: {user.mobility_id}</p>
//     <p>flexibility: {user.flexibility_id}</p>
//   </div>
// ))}