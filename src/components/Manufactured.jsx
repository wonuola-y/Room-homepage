import "./style.css";
import hamburger from "./images/icon-hamburger.svg";
import { useState } from "react";
import close from "./images/icon-close.svg";
import left from "./images/icon-angle-left.svg";
import right from "./images/icon-angle-right.svg";
import arrow from "./images/icon-arrow.svg";
import about from "./images/image-about-dark.jpg";
import white from "./images/image-about-light.jpg";
import { Link, useNavigate } from "react-router-dom";

function Manufactured() {
 // useNavigate to move across pages
  const navgiate = useNavigate();
//handleClick function to identify the route the button is navigating to
  const handleClick = (e) => {
    navgiate("/Available");
  };
 // responsive nav bar
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  // to toggle between open and closed navbar
  const showNavBar = () => {
    setIsNavExpanded(!isNavExpanded);
  };
  return (
    <section className="App">
    <div className="contain-main">
    <div className="intro pg2">
       <div className="container">
       <div className="header">
          <img
            className="hamburger nav-btn"
            src={hamburger}
            onClick={showNavBar}
          />

          <h1>room</h1>
        </div>
        <nav className={isNavExpanded ? "nav expanded" : "nav"}>
          <img
            src={close}
            alt="close"
            className="close nav-btn nav-close-btn"
            onClick={showNavBar}
          />{" "}
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </nav>

       </div>
        <div className="angles-container">
          <div className="angles">
            <img src={left} onClick={handleClick} />
            <img src={right} />
          </div>
        </div>
      </div>
    <div className="side">
    <div className="text">
        <h1> Manufactured with the best materials</h1>

        <p>
          {" "}
          Our modern furniture store provide a high level of quality. Our
          company has invested in advanced technology to ensure that every
          product is made as perfect and as consistent as possible. With three
          decades of experience in this industry, we understand what customers
          want for their home and office.
        </p>

        <div>
          <button>
            Shop now
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
    </div>
      <section className="about">
        <div className="img">
          <img src={about} alt="about" />
        </div>
        <div className="text">
          <h2>About our furniture</h2>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are Maufactured
            to help you create your dream space.
          </p>
        </div>
      </section>
      <section>
        <div className="img">
          <img src={white} alt="white" />
        </div>
      </section>
    </section>
  );
}

export default Manufactured;
