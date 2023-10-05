import React from 'react';
import { Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import Injury from './pages/Injury'
import About from './pages/About'
import Strength from './pages/Strength'
import Mobility from './pages/Mobility'
import Flexibility from './pages/Flexibility'
import Login from './pages/Login'
import NavBar  from "./NavBar"

function App() {
  return (
  <div className="App">
  <NavBar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/injury" element={<Injury />} />
    <Route path="/strength" element={<Strength />} />
    <Route path="/mobility" element={<Mobility />} />
    <Route path="/flexibility" element={<Flexibility />} />
    <Route path="/login" element={<Login />} />
  </Routes>
  </div>
  )
}

export default App;
