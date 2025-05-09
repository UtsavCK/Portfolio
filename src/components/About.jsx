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
      title: "Hack The Circle 2024",
      description:
        "Participated in HackTheCircle organized at KhCE and created a platform for youths to volunteer towards cultural preservation with team.",
    },
    {
      title: "Codewave 2024",
      description:
        "Participated in Codewave organized at KU and helped to create a legal chatbot that helps general public to learn about laws through interaction.",
    },
  ];

  const educationDetails = [
    {
      title: "Khwopa College of Engineering",
      description:
        "Currently pursuing a Bachelor's degree in Computer Engineering at Khwopa College of Engineering.",
    },
    {
      title: "Khwopa Higher Secondary School",
      description:
        "Completed Higher Secondary Education with a focus on Science at Khwopa Higher Secondary School.",
    },
    {
      title: "Nobel Academy",
      description:
        "Completed SEE from Nobel Academy, where I developed a strong foundation in various subjects.",
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
