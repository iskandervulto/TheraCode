import React, { useState, useContext } from 'react'; 
import { NavLink, Link } from "react-router-dom"
import { ThemeContext } from './App';
import ReactSwitch from 'react-switch';
import "./NavBar.css"
  
const NavBar = () => { 

  const [menuOpen, setMenuOpen] = useState(false)

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <nav>
      <Link to="/" className='title'>TheraCode</Link>
      <div className='menu' onClick={() => {setMenuOpen(!menuOpen)}}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">About</NavLink>
          </li>
        <li>
          <NavLink to="/injury">Injury</NavLink>
          </li>
        <li>
          <NavLink to="/strength">Strength</NavLink>
          </li>
        <li>
          <NavLink to="/mobility">Mobility</NavLink>
        </li>
        <li>
          <NavLink to="/flexibility">Flexibility</NavLink>
        </li>
        <li>
          <NavLink to="/therapists">Therapists</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign up</NavLink>
        </li>
        <li>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </li>
      </ul>
    </nav>
  )
}
  
export default NavBar;