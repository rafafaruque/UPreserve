import React from 'react';
import Logo from '../assets/earth.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
        <div className="leftSide">
            <img src={Logo} height='70' width='100'/>
        </div>
        <div className="rightSide">
            <Link to="/"> Home </Link>
            <Link to="/leaderpage"> Leaderboard </Link>
            <Link to="/news"> News </Link>
            <Link to="/community"> Community </Link>
        </div>
    </div>
  ) 
}

export default Navbar