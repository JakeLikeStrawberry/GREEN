import React from 'react';
import Nav from './Nav/Nav.js';
import './Styles/App.css';
import Home from './home/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './about/About.js';
import Green from './GREEN/Green.js';
import Calculator from './calculator/Calculator.js';


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/GREEN" element={<Green />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>
  );
}

export default App;
/*//
import React from "react"; 
import './Styles/App.css';
import HomePage from "./home/HomePage.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav/Nav.js"
import Impact from "./GREEN/GREEN.js"
import About from "./about/About.js"
import Calculator from "./calculator/Quiz.js"
import GREEN from "./GREEN/GREEN.js";


const App = () => {
  return(
  <Router>
    <Nav/>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/GREEN" element={<GREEN />} />
        <Route path="/calculator" element={<Calculator />} />
    </Routes>
  </Router>
  );
};

export default App;
*/