import React, { useEffect, useState } from 'react'

const Mobility = () => {

  const [mobilities, setMobilities] = useState([{
    part_of_body: "",
    movement: "",
    equipment: "",
  }])

useEffect(() => {
  fetchAllMobilities();
}, []);

const fetchAllMobilities = async () => {
  try {
    const response = await fetch("http://localhost:3000/mobilities");

    if (response.ok) {
      const allMobilities = await response.json();
      setMobilities(allMobilities);
    } else {
      console.error("Error fetching mobilities:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching mobilities:", error);
  }
};

  return (
    <div className="Mobility">
    <header className="Mobility-header">
        <h1>Mobility</h1>
        {mobilities.map((mobility, index) => (
          <div key={index}>
            <p>Part of Body: {mobility.part_of_body}</p>
            <p>Movement: {mobility.movement}</p>
            <p>Equipment: {mobility.equipment}</p>
          </div>
        ))}
    </header>
</div>
  )
}

export default Mobility

