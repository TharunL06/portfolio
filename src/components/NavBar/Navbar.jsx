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
        <Link className="desktopMenuItemList">Home</Link>
        <Link className="desktopMenuItemList">Clients</Link>
        <Link className="desktopMenuItemList">About</Link>
        <Link className="desktopMenuItemList">Portfolio</Link>
      </div>
      <button className="desktopMenubtn">
        <img src={contact} alt="" className="desktopMenuimg" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
