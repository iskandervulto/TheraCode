import React, { useState, useEffect } from 'react';
import DropdownOptions from './DropdownOptions';

function SignUpForm( { InjuryDropDown } ) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    injury_id: '',           
    strengthening_id: '',   
    mobility_id: '',        
    flexibility_id: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'injury_id') {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
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
     
      {/* DROP DOWNS START HERE */}

      <div>
          <label htmlFor="injury_id">Injury:</label>
          <DropdownOptions type="injuries" onChange={handleChange} />
        </div>

        {formData.injury_id && (
          <>
            <div>
              <label htmlFor="strengthening_id">Strengthening:</label>
              <DropdownOptions type="strengthening" onChange={handleChange} />
            </div>

            <div>
              <label htmlFor="mobility_id">Mobility:</label>
              <DropdownOptions type="mobility" onChange={handleChange} />
            </div>

            <div>
              <label htmlFor="flexibility_id">Flexibility:</label>
              <DropdownOptions type="flexibility" onChange={handleChange} />
            </div>
          </>
        )}

        {/* Button is here */}
        
        <div>
          <button type="submit" onClick={handleSignup}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;