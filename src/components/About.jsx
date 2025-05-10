import React from "react";
import CV from "../assets/Images/UtsavKayastha_CV.pdf";
import AboutSectionCard from "./cards/AboutSectionCard";
const About = () => {
  const eventDetails = [
    {
      title: "LOCUS Cubing Nepal 2025 | Staff",
      description:
        "Facilitated the event by supervising cube time judging, coordinating registration, delivering certificates, arranging stations, and performing runner duties.",
    },
    {
      title: "Hult Prize at KhCE | StartUps Coordinator",
      description:
        "Assisted with the event planning process and informing participants of the event details as the startup’s coordinator.",
    },
  ];

  const hackathonDetails = [
    {
      title: "Hack The Circle, 2024",
      description:
        "Participated in HackTheCircle organized at KhCE and created a platform for youths to volunteer towards cultural preservation with team.",
    },
    {
      title: "Codewave, 2024",
      description:
        "Participated in Codewave organized at KU and helped to create a legal chatbot that helps general public to learn about laws through interaction.",
    },
    {
      title: "Hult Prize at KhCE, 2023",
      description:
        "Participated in Hult Prize and made it to the semi-finals. Pitched use of flax as a sustainable alternative to cotton for fashion.",
    },
  ];

  const educationDetails = [
    {
      title: "Khwopa College of Engineering",
      description: "Bachelor's in Computer Engineering",
    },
    {
      title: "Khwopa Higher Secondary School",
      description: "Higher Secondary Education with Science as major",
    },
    {
      title: "Nobel Academy",
      description: "SEE (Secondary Education Examination)",
    },
  ];
  return (
    <main id="about_main">
      <div className="download-cv">
        <a href={CV} download={true}>
          <button id="download-cv-btn">Download CV</button>
        </a>
      </div>

      <AboutSectionCard title="Event Experiences" details={eventDetails} />

      <AboutSectionCard
        title="Hackathon Experiences"
        details={hackathonDetails}
      />

      <AboutSectionCard
        title="Education Experiences"
        details={educationDetails}
      />

      <section className="card skills-card">
        <h2>| Skills & Expertise</h2>
        <div className="skills-list">
          <div className="skill-item">
            <span className="skill-label">Frontend:</span>
            <span className="skill-value">
              HTML, CSS, JavaScript, React, Vite
            </span>
          </div>
          <div className="skill-item">
            <span className="skill-label">Languages:</span>
            <span className="skill-value">JavaScript, Python, C/C++, SQL</span>
          </div>
          <div className="skill-item">
            <span className="skill-label">Soft Skills:</span>
            <span className="skill-value">
              Problem Solving, Communication, Teamwork
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
