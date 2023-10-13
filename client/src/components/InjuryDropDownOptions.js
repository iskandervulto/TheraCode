import React, { useState, useEffect } from 'react';

function InjuryDropdownOptions({ type, onChange }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/${type}`)
      .then((response) => response.json())
      .then((data) => setOptions(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, [type]);

  const handleDropdownChange = (e) => {
    const selectedValue = parseInt(e.target.value, 10);
    console.log(`Selected value for ${type}: ${selectedValue}`);
  
    onChange(e, selectedValue);
  };

  return (
    <select name={`${type}_id`} onChange={handleDropdownChange}>
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.part_of_body} - {option.type_of_injury}
        </option>
      ))}
    </select>
  );
}

export default InjuryDropdownOptions;
