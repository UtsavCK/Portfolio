import React from "react";
import me from "../assets/Images/me.jpg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <div className="intro">
        <div className="pic">
          <img src={me} alt="Utsav Chandra Kayastha" />
        </div>
        <div className="about_text">
          <h1>Utsav Kayastha</h1>
          <h3>Few things about me!</h3>
          <p>
            Hey guys! It's me, Utsav Kayastha. I am currently a student. I love
            trying new things and I am fascinated by new technologies. This
            website is a simple pet project to show some things about myself.
          </p>
          <br />
          <Link to="/about">
            <button style={{ marginRight: 10 }}>About Me</button>
          </Link>
          <Link to="/projects">
            <button style={{ marginRight: 10 }}>Projects</button>
          </Link>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Main;
