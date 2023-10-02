import './Home.css'

export default function Home() {
    return (
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
        <a href="/test" className = "get-started-button">Get Started</a>
      </div>
    );
  }
  