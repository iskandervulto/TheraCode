import React, { createContext, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import ReactSwitch from 'react-switch';

import "../App.css"
import Home from './pages/Home'
import Injury from './pages/Injury'
import About from './pages/About'
import Strength from './pages/Strength'
import Mobility from './pages/Mobility'
import Flexibility from './pages/Flexibility'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp';
import NavBar  from "./NavBar"

export const ThemeContext = createContext(null)

function App() {

const [theme, setTheme] = useState("light")

const toggleTheme = () => {
  setTheme((curr) => (curr === 'light' ? "dark" : "light"));
}

  return (
  
 
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="App" id={theme}>
    <NavBar />
    <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/injury" element={<Injury />} />
      <Route path="/strength" element={<Strength />} />
      <Route path="/mobility" element={<Mobility />} />
      <Route path="/flexibility" element={<Flexibility />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </div>
  </ThemeContext.Provider>
  )
}

export default App;
