import React from "react";
import CV from "../assets/Images/UtsavKayastha_CV.pdf";
const About = () => {
  return (
    <main id="about_main">
      <div className="download-cv">
        <a href={CV} download={true}>
          <button id="download-cv-btn">Download CV</button>
        </a>
      </div>

      <section className="card">
        <h2>Event Experiences</h2>
        <div className="details">
          <div>
            <h3>LOCUS Cubing Nepal 2025 | Staff</h3>
            <p>
              Facilitated the event by supervising cube time judging,
              coordinating registration, delivering certificates, arranging
              stations, and performing runner duties.
            </p>
          </div>
        </div>
        <div className="details">
          <div>
            <h3>Hult Prize at KhCE | StartUps Coordinator</h3>
            <p>
              Assisted with the event planning process and informing
              participants of the event details as the startup’s coordinator.
            </p>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Hackathon Experiences</h2>
        <div className="details">
          <div>
            <h3>Hack The Circle, 2024</h3>
            <p>
              Participated in HackTheCircle organized at KhCE and created a
              platform for youths to volunteer towards cultural preservation
              with team.
            </p>
          </div>
        </div>
        <div className="details">
          <div>
            <h3>Codewave, 2024</h3>
            <p>
              Participated in Codewave organized at KU and helped to create a
              legal chatbot that helps general public to learn about laws
              through interaction.
            </p>
          </div>
        </div>
        <div className="details">
          <div>
            <h3>Hult Prize at IOE, 2023</h3>
            <p>Participated in Hult Prize and made it to the semi-finals.</p>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Education</h2>
        <div className="details">
          <div>
            <h3>Bachelor's in Compuer Engineering</h3>
            <p>Khwopa College of Engineering</p>
          </div>
        </div>
        <div className="details">
          <div>
            <h3>Higher Secondary Education</h3>
            <p>Khwopa Higher Secondary School</p>
          </div>
        </div>
        <div className="details">
          <div>
            <h3>SEE</h3>
            <p>Nobel Academy</p>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Skills & Expertise</h2>
        <p>
          <b>Frontend technologies:</b> HTML/CSS/JS, ReactJS, Vite
        </p>
        <p>
          <b>Languages:</b> JavaScript, Python, C, C++, SQL
        </p>
        <p>
          <b>Soft Skills:</b> Problem Solving, Communication, Teamwork,
          Detail-Oriented
        </p>
      </section>
    </main>
  );
};

export default About;
