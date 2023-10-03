//import logo from './logo.svg'
import React from "react"; 
import './Styles/App.css';
import HomePage from "./home/HomePage.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav/Nav.js"
import Impact from "./impact/Impact.js"
import About from "./about/About.js"


const App = () => {
  return(
  <Router>
    <Nav/>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/impact" element={<Impact />} />
    </Routes>
  </Router>
  );
};

export default App;
