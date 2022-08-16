import React from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from "../../assets/images/logo_d.png"

const Home  = () => {
  return (
    <div className='container home-page'> 
        <div className="text-zone">
            <h1>Hi, <br /> I'm
            <img src={LogoTitle} alt="developer" />
            demba
            <br />
            web developer
            </h1>
            <h2>Frontend Developer / Java</h2>
            <Link to="contact" className='flat-button'>
                CONTACT ME</Link>
        </div>
    </div>
  );
}

export default Home;