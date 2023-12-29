import React, { useState } from 'react';
import { Button } from '../button/Button.js'
import { Link } from 'react-router-dom';
import '../Styles/Nav.css';
import Dropdown from '../Dropdown/Dropdown.js';
import logo from '../assets/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <img className="logo" src={logo} alt='logo'/>
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home 
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/about'
              className='about-link'
              onClick={closeMobileMenu}
            >
              About <FontAwesomeIcon icon={faCaretDown} className='caret'/>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/Green'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Green
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Nav;

/*import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Nav.css";
//import astronautHelmet from "../assets/astronaut-helmet.png";
//import deadEye from "../assets/dead-eye.png";
//import stack from "../assets/stack.png";
//import envelope from "../assets/envelope.png";



export default function Navbar() {
  const location = useLocation();

  const getNavPositionClass = () => {
    switch (location.pathname) {
      case "/":
        return "nav-home";
      case "/about":
        return "nav-about";
      case "/GREEN":
        return "nav-GREEN";
      default:
        return "";
    }
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/GREEN":
        return "GREEN";
      case "/about":
        return "About";
      default:
        return "";
    }
  };



  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();

  const isCurrentPage = (navClass) => {
    return navClass === navPositionClass;
  };

  const renderNavLink = (to, navClass, pageTitle) => {
  const isCurrent = isCurrentPage(navClass);
  const linkClass = isCurrent ? "nav-link current" : "nav-link";

    return (
      //<Link to={to} className="link-class">
      <Link to={to} className={linkClass} style={{fontFamily: 'Georgia'}}>
      <h1 className="page-title" style={{fontWeight:'normal'}}>{pageTitle}</h1>
      </Link>
    );
  };

  return (
    <>
      <img className="logo" src={logo}/>
      <nav className={`nav ${navPositionClass}`}>
        {renderNavLink(
          "/",
          "nav-home",
          "Home"
        )}
        {renderNavLink("/about", "nav-about", "About")}
        {renderNavLink("/GREEN", "nav-GREEN", "GREEN")}
      </nav>
      </>
  );
}
*/