import React from 'react'

import DropdownOptions from "../DropdownOptions";
import InjuryDropdownOptions from "../InjuryDropDownOptions";

function EditUser() {
    const [selectedDropdownValue, setSelectedDropdownValue] = useState(null);
  
    const handleDropdownChange = (e, selectedValue) => {
      setSelectedDropdownValue(selectedValue);
    };
  
    return (
      <div>
        <h2>Edit User</h2>

        <div>
          <label>Choose a Type of Injury:</label>
          <InjuryDropdownOptions type="your_injury_type" onChange={handleDropdownChange} />
        </div>
        
        <div>
          <label>Choose a Part of Body, Movement, and Equipment:</label>
          <DropdownOptions type="your_type" onChange={handleDropdownChange} />
        </div>
  
   
  
        <p>Selected Dropdown Value: {selectedDropdownValue}</p>

      </div>
    );
  }
  
  export default EditUser;
  