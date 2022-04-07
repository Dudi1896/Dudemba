import "./index.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoDude from "../../assets/images/logo_Dude.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoDude} alt="logo" />
        </Link>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon
            className="menu-icon" icon={faBars} color="#4d4d4e"/>
        </NavLink>
    </div>
  );
};

export default Navbar;
