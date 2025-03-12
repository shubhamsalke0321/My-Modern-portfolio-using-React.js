import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg ">
  <div class="container-fluid ">
    <NavLink className="navbar-brand" to="./Home"><h3 style={{color:'red'}}>Navbar</h3></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav" >
        <li className="nav-item">
          <NavLink className="nav-link " to="./Home"><p>Home</p></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link "  to="./About"><p>About</p></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="./Education"><p>Education</p></NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link"  to="./Skills"><p>Skills</p></NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link"  to="./Projects"><p>Projects</p></NavLink>
          </li>
      </ul>
      <div className="nav-connect"> <NavLink className="nav-link"  to="./Contact_Me"><p style={{color:'black'}}>Connect With Me</p></NavLink></div>
    </div>
  </div>
</nav>
    </>

  )
}

export default Navbar
        