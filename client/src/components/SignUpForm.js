import React, { useState } from 'react';
import InjuryDropdownOptions from './InjuryDropDownOptions';
import DropdownOptions from './DropdownOptions';

function SignUpForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });


  const [injuryId, setInjuryId] = useState(0);
  const [strengtheningId, setStrengtheningId] = useState(0);
  const [mobilityId, setMobilityId] = useState(0);
  const [flexibilityId, setFlexibilityId] = useState(0);

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    const { name, value } = e.target;

    console.log(selectedValue);
  
    if (name === "username" || name === "password") {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleInjuryChange = (e) => {
    const selectedValue = e.target.value;
    console.log(selectedValue);
    setInjuryId(selectedValue);
  };
  
  const handleStrengtheningChange = (e) => {
    const selectedValue = e.target.value;
    console.log(selectedValue);
    setStrengtheningId(selectedValue);
  };
  
  const handleMobilityChange = (e) => {
    const selectedValue = e.target.value;
    console.log(selectedValue);
    setMobilityId(selectedValue);
  };
  
  const handleFlexibilityChange = (e) => {
    const selectedValue = e.target.value;
    console.log(selectedValue);
    setFlexibilityId(selectedValue);
  };
  
  
  const formDataWithIds = {
    ...formData,
    injury_id: injuryId,
    strengthening_id: strengtheningId,
    mobility_id: mobilityId,
    flexibility_id: flexibilityId,
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // POST HAPPENS HERE

  const handleSignup = (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:3000/users';
  
      const requestData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          injury_id: injuryId,
          strengthening_id: strengtheningId,
          mobility_id: mobilityId,
          flexibility_id: flexibilityId,
        })
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
  };
  

  return (
    <div className='All-container'>
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
        <InjuryDropdownOptions type="injuries" onChange={handleInjuryChange} />
      </div>

      <div>
        <label htmlFor="strengthening_id">Strengthening:</label>
        <DropdownOptions type="strengthenings" onChange={handleStrengtheningChange} />
      </div>

      <div>
        <label htmlFor="mobility_id">Mobility:</label>
        <DropdownOptions type="mobilities" onChange={handleMobilityChange} />
      </div>

      <div>
        <label htmlFor="flexibility_id">Flexibility:</label>
        <DropdownOptions type="flexibilities" onChange={handleFlexibilityChange} />
      </div>

        {/* Button is here */}
        
        <div>
          <button type="submit" onClick={handleSignup}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
