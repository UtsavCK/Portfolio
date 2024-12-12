import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const toggle = () => {
    setToggleNavbar(!toggleNavbar);
  };
  return (
    <>
      <header>
        <p>
          <Link to="/">
            <b>UtsavCK</b>
          </Link>
        </p>
        <nav>
          <a onClick={toggle} className="toggle-btn">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
          {toggleNavbar && (
            <div className="navlinks_small">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Me</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          )}
          <div className="navlinks">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Me</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <hr />
    </>
  );
};

export default Header;
