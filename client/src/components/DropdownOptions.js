import React, { useState, useEffect } from 'react';

function DropdownOptions({ type }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/${type}s`)
      .then((response) => response.json())
      .then((data) => setOptions(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, [type]);

  return (
    <select name={`${type}_id`}>
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.part_of_body} - {option.type_of_injury}
        </option>
      ))}
    </select>
  );
}

export default DropdownOptions;