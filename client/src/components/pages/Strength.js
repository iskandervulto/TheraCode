import React, { useState, useEffect } from 'react'

import "./styles/AllPages.css"

const Strength = () => {

  const [strengths, setStrengths] = useState([{
    part_of_body: "",
    movement: "",
    equipment: "",
  }])

useEffect(() => {
  fetchAllStrengths();
}, []);

const fetchAllStrengths = async () => {
  try {
    const response = await fetch("http://localhost:3000/strengthenings");

    if (response.ok) {
      const allStrengths = await response.json();
      setStrengths(allStrengths);
    } else {
      console.error("Error fetching strengths:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching strengths:", error);
  }
};

  return (
    <div className="Strength">
    <header className="Strength-header">
        <h1>Strength</h1>
        {strengths.map((strength, index) => (
          <div key={index} className='All-container'>
            <p>Part of Body: {strength.part_of_body}</p>
            <p>Movement: {strength.movement}</p>
            <p>Equipment: {strength.equipment}</p>
          </div>
        ))}
    </header>
</div>
  )
}

export default Strength