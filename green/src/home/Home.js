import '../Styles/Home.css'
import {Link} from 'react-router-dom';
import React, { Component } from "react";
//import Helmet from 'react-helmet';


export default class Home extends Component {
  render(){
    return <>
      <div className="body1">
        <div className="parent">
          <div className="GREEN">
            <h1>GREEN</h1>
          </div>
          <div className = "GREEN_desc">
              <h3>
              Welcome to "GREEN", a LEED Scoring Calculator and valuable tool designed for educational 
              purposes to support architectural development and enhance learning processes.
              Our first prototype is tailored specifically for projects located in 
              Los Angeles. We recognize that sustainability and LEED certification are 
              essential considerations in modern architecture, and this calculator 
              aims to assist students, professionals, and enthusiasts in understanding 
              and optimizing their green building strategies. While we currently serve the
              Los Angeles area, please stay tuned as we explore the possibility of 
              expanding our coverage to include more locations in the future.
              </h3>
          </div>
          <Link to="/calculator" className = "get-started-button" style={{ fontFamily: "Monospace" }}>Get Started</Link>
        </div>
      </div>
      </>;
  }
}
  