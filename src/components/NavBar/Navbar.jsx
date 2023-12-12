import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png"
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="" className="logo"/>
      <div className="desktopMenu">
        {/* if link is active followed by id it should go to id */}
        <Link activeClass="active" to="intro" spy={true} smooth={true} duration={500} offset={-100} className="desktopMenuItemList">Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} offset={-40}className="desktopMenuItemList">About</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} duration={500} offset={-30}className="desktopMenuItemList">Portfolio</Link>
        <Link activeClass="active" to="contactpage" spy={true} smooth={true} duration={500} offset={-30}className="desktopMenuItemList">Clients</Link>
        
        
        
      </div>
      <button className="desktopMenubtn"onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={contact} alt="" className="desktopMenuimg" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
