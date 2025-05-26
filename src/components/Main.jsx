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
            Hi! I'm Utsav Kayastha, a recent Computer Engineering graduate with
            a passion for exploring new technologies. I'm a curious
            problem-solver and approach challenges with a curious mindset. This
            site is a little showcase of what I've been up to. Thanks for
            stopping by!
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
