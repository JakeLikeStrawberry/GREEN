import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Nav.css";
//import astronautHelmet from "../assets/astronaut-helmet.png";
//import deadEye from "../assets/dead-eye.png";
//import stack from "../assets/stack.png";
//import envelope from "../assets/envelope.png";
import logo from '../assets/Logo.png'


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
      <Link to={to} className={linkClass} style={{textDecoration:'none',   fontFamily: 'Monospace'}}>
      <h1 className="page-title">{pageTitle}</h1>
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