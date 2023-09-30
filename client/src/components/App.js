import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home"

function App() {
  return <h1>Iskander's Capstone</h1>;

  <div>
  <NavBar />
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/Ankle" element={<AllUsers  />} />
    <Route path="/Random" element={<Random />} />
    <Route path="/create_drink" element={<CreateDrink />} />
    <Route path="/create_user" element={<CreateUser />} />
    <Route path="/drinks" element={<AllDrinks />} />
  </Routes>

  </div>

}

export default App;
