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
            Hi! I&apos;m Utsav Kayastha, a recent Computer Engineering graduate and
            aspiring Fullstack Software Engineer. I enjoy building end-to-end
            web applications, solving problems with a creative and analytical
            approach, and exploring new technologies. This site showcases some
            of the projects I&apos;ve worked on. Thanks for stopping by!
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
