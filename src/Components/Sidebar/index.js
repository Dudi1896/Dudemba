import "./index.scss";
import React from 'react'
import { Link, NavLink } from "react-router-dom";
import LogoD from "../../assets/images/logo_d.png";
import LogoUde from "../../assets/images/logo_ude.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHome,  faEnvelope, faBlog, faFolderOpen} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoD} alt="logo" />
            <img className="sub-logo" src={LogoUde} alt="udemba" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink activeclassname="active" className="mywork-link" to="/My Work">
                <FontAwesomeIcon icon={faFolderOpen} color="#4d4d4e" />
            </NavLink>
            <NavLink activeclassname="active" className="myblog-link" to="/My Blog">
                <FontAwesomeIcon icon={faBlog} color="#4d4d4e" />
            </NavLink>
            <NavLink activeclassname="active" className="contact-link" to="/Contact">
                <FontAwesomeIcon icon={ faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer"
                href="https://www.linkedin.com/in/denzel-udemba-3500505b/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer"
                href="https://github.com/Dudi1896">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar