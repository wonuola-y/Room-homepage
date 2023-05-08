import "./App.css";
import hamburger from "./images/icon-hamburger.svg";
import { useState } from "react";
import close from "./images/icon-close.svg";
import left from "./images/icon-angle-left.svg";
import right from "./images/icon-angle-right.svg";
import arrow from "./images/icon-arrow.svg";
import about from "./images/image-about-dark.jpg";
import white from "./images/image-about-light.jpg";
// import { useRef } from "react";
function App() {

  // };
  const [isNavExpanded, setIsNavExpanded] = useState(false);

   const showNavBar = () => {
    setIsNavExpanded(!isNavExpanded)

  }
  return (
    <div className="App">
      <section className="intro">
        <div className="header">
        <img
            className="hamburger nav-btn"
            src={hamburger}
            onClick={showNavBar}
          />

          <h1>room</h1>
        </div>
        <nav
       className={
        isNavExpanded ? "nav expanded" : "nav"}
          >
          <img
            src={close}
            alt="close"
            className="close nav-btn nav-close-btn"
            onClick={showNavBar}
          />{" "}
          <ul>
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </nav>
    
        <div className="angles-container">
          <div className="angles">
            <img src={left} />
            <img src={right} />
          </div>
        </div>
      </section>
      <section className="text">
        <h1>Discover innovative ways to decorate</h1>

        <p>
          {" "}
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>

        <div>
          <button>
            Shop now
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      </section>
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
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
      </section>
      <section>
        <div className="img">
          <img src={white} alt="white" />
        </div>
      </section>
    </div>
  );
}

export default App;
