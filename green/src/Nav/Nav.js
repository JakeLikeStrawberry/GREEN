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
      case "/impact":
        return "nav-impact";
      case "/about":
        return "nav-about";
      default:
        return "";
    }
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "HOME";
      case "/impact":
        return "IMPACT";
      case "/about":
        return "ABOUT";
      default:
        return "";
    }
  };



  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();

  const isCurrentPage = (navClass) => {
    return navClass === navPositionClass;
  };

  const renderNavLink = (to, /*imgSrc, altText,*/ navClass, pageTitle) => {
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? "nav-link current" : "nav-link";

    return (
      <Link to={to} className={linkClass}>
        <h1 className="page-title">{pageTitle}</h1>
      </Link>
    );
  };

  return (
    <header className = "navHeader">
      <img className="logo" src={logo}/>
      <nav className={`nav ${navPositionClass}`}>
        {renderNavLink(
          "/",
        // astronautHelmet,
        // "astronaut helmet icon",
          "nav-home",
          "HOME"
        )}
        {renderNavLink("/impact", /*stack, "stack icon",*/ "nav-impact", "IMPACT")}
        {renderNavLink("/about", /*deadEye, "deadEye icon",*/ "nav-about", "ABOUT")}
      </nav>
    </header>
  );
}