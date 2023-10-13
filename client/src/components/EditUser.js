import React, { useState } from 'react';
import InjuryDropdownOptions from './InjuryDropDownOptions'; 
import DropdownOptions from './DropdownOptions'; 

function EditUser({ option }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [injuryId, setInjuryId] = useState(0);
  const [strengtheningId, setStrengtheningId] = useState(0);
  const [mobilityId, setMobilityId] = useState(0);
  const [flexibilityId, setFlexibilityId] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'username' || name === 'password') {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleInjuryChange = (e) => {
    const selectedValue = e.target.value;
    setInjuryId(selectedValue);
  };

  const handleStrengtheningChange = (e) => {
    const selectedValue = e.target.value;
    setStrengtheningId(selectedValue);
  };

  const handleMobilityChange = (e) => {
    const selectedValue = e.target.value;
    setMobilityId(selectedValue);
  };

  const handleFlexibilityChange = (e) => {
    const selectedValue = e.target.value;
    setFlexibilityId(selectedValue);
  };

  const formDataWithIds = {
    ...formData,
    injury_id: injuryId,
    strengthening_id: strengtheningId,
    mobility_id: mobilityId,
    flexibility_id: flexibilityId,
  };

  const editUser = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users/${option}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataWithIds),

      });

      if (response.ok) {

        console.log('User updated successfully');
      } else {
        console.error('Error editing user:', response.statusText);
      }
    } catch (error) {
      console.error('Error editing user:', error);
    }

    console.log(option)
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
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
          <label htmlFor="password">Password:</label>
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

        <button onClick={editUser}>Submit</button>
      </form>
    </div>
  );
}

export default EditUser;
