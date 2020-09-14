import React from "react";
import "./Stars.scss";
import Typed from "react-typed";
import Back from "../img/fondo.jpg";
//import Typography from "@material-ui/core/Typography";
//import { makeStyles } from "@material-ui/core/styles";


class Home extends React.Component {
  render() {
    
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background" img src={Back}>
       <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
                <p className="title">
                    <span className="intro"></span>
                <strong className="intro-title mb-4">
                  <Typed 
                    strings={["Maria del Rosario Wrobel"]}
                    typeSpeed={100}
                    loop
                    />
                </strong>
            </p>
             {/* <h1 className="intro-title mb-4">Hello, I am Maria del Rosario</h1>*/}              
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={["Front End Developer"]}          
                    typeSpeed={80}                    
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="button button-a button-big button-rouded js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  PORTAFOLIO
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
