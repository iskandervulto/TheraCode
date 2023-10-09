import React, { useState, useEffect } from 'react'

import "./styles/Injury.css"

const Injury = () => {

  const [injuries, setInjuries] = useState([{
    part_of_body: "",
    type_of_injury: ""
  }])

useEffect(() => {
  fetchAllInjuries();
}, []);

const fetchAllInjuries = async () => {
  try {
    const response = await fetch("http://localhost:3000/injuries");

    if (response.ok) {
      const allInjuries = await response.json();
      setInjuries(allInjuries);
    } else {
      console.error("Error fetching injuries:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching injuries:", error);
  }
};

  return (
    <div className="Injury">
    <header className="Injury-header">
        <h1>Injury</h1>
        {injuries.map((injury, index) => (
          <div key={index}>
            <div className="main">
            <p>{injury.part_of_body} {injury.type_of_injury}</p>
            </div>
          </div>
        ))}
    </header>
</div>
  )
}
export default Injury