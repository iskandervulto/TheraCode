import React, { useState, useEffect } from 'react';

function DropdownOptions({ type, onChange }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/${type}`)
      .then((response) => response.json())
      .then((data) => setOptions(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, [type]);

  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;

    onChange(e);
  };

  return (
    <select name={`${type}_id`} onChange={handleDropdownChange}>
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {`${option.part_of_body} - ${option.movement} - ${option.equipment}`}
        </option>
      ))}
    </select>
  );
}

export default DropdownOptions;
