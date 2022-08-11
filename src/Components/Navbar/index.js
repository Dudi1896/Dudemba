import "./index.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoDude from "../../assets/images/logo_Dude.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const Navbar = () => {

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoDude} alt="logo" />
      </Link>
      <NavLink exact="true" activeclassname="active" to="/">
        <ul>
          <FontAwesomeIcon className="hamburger" icon={faBars} 
            color="#4d4d4e" onClick={toggleHamburger}> 
            
          </FontAwesomeIcon>
        </ul>
      </NavLink>
      className={
        hamburgerOpen ? "nav-menu expanded" : "nav-menu"
      }
      <ul>
        <li>My Work</li>
        <li>My Resume</li>
        <li>Blog</li>
      </ul>
    </div>
  );
};

export default Navbar;
