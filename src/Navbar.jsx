import React from 'react'
import './navbar.css';
import logo from './logo1.png'
import { FaRegUserCircle } from "react-icons/fa";
import {  NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <section id='navbar'>
        <div className='nav-left'>
        <img className='logo' src={logo} alt="logo" />
        <NavLink to = ''> <div className="l1">Geosync Connect </div></NavLink>
        </div>
     
        <ul  className='nav-right'>
            <li>
            < NavLink to="/whyus" > <div> Why Us </div> </NavLink>
            </li>
            <li >
               < NavLink to = "/rules"> <div > Rules </div></NavLink></li>
             
        </ul>
         <NavLink to='/login'><FaRegUserCircle  className='user_icon'/></NavLink>
       
    </section>
  );
}

export default Navbar;