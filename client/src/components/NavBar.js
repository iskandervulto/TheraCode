import React, { useState } from 'react'; 
import { NavLink, Link } from "react-router-dom"
import "./NavBar.css"
  
const NavBar = () => { 

  const [menuOpen, setMenuOpen] = useState(false)

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
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
      </ul>
    </nav>
  )
}
  
export default NavBar;