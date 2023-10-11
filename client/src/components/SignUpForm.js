import React, { useState, useEffect } from 'react';

function SignUpForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    injury_id: null,           
    strengthening_id: null,   
    mobility_id: null,        
    flexibility_id: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSignup = (e) => {
    e.preventDefault();
  
    try {

      const url = 'http://localhost:3000/users';
  
  
      const requestData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      };
  
      fetch(url, requestData)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
      
            throw new Error('Server error: ' + response.statusText);
          }
        })
        .then((responseData) => {
          console.log('Server response:', responseData);
        })
        .catch((error) => {
          console.error('An error occurred while sending the request:', error);
        });
    } catch (error) {
      console.error('An error occurred while sending the request:', error);
    }

  }




  

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit" onClick={handleSignup}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;