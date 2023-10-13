import React, { useState, useEffect } from "react";

import "./styles/AllPages.css";

const Flexibility = () => {
  const [flexibilities, setFlexibilities] = useState([
    {
      part_of_body: "",
      movement: "",
      equipment: "",
    },
  ]);

  useEffect(() => {
    fetchAllFlexibilities();
  }, []);

  const fetchAllFlexibilities = async () => {
    try {
      const response = await fetch("http://localhost:3000/flexibilities");

      if (response.ok) {
        const allFlexibilities = await response.json();
        setFlexibilities(allFlexibilities);
      } else {
        console.error("Error fetching flexibilities:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching flexibilities:", error);
    }
  };

  return (
    <div className="Flexibilities">
      <header className="Flexibilities-header">
        <h1>Flexibilities</h1>
        {flexibilities.map((flexibility, index) => (
          <div key={index} className="All-container">
            <p>Part of Body: {flexibility.part_of_body}</p>
            <p>Movement: {flexibility.movement}</p>
            <p>Equipment: {flexibility.equipment}</p>
          </div>
        ))}
      </header>
    </div>
  );
};

export default Flexibility;
