import React from "react";
import ProjectCard from "./cards/ProjectCard";

const Projects = () => {
  const projectDetails = [
    {
      title: "ACME Dashboard",
      description: "A dashboard for ACME to manage their data and operations.",
      link: "https://nextjs-app-router-sigma.vercel.app/",
      image: "./src/assets/Images/Projects/acme.png",
    },
    {
      title: "NextJs Blog",
      description:
        "A lightweight localstorage blog app with session-based authentication on Next.js App Router.",
      link: "https://nextjs-app-router-sigma.vercel.app/",
      image: "./src/assets/Images/Projects/blog.png",
    },
    {
      title: "Multimodal Approach to Malware Classification",
      description:
        "A research project on malware classification using a multimodal approach.",
      link: "https://github.com/cruvss/Multimodal-Approach-For-Malware-Classification",
      image: "./src/assets/Images/Projects/malware.png",
    },
    {
      title: "LegalSathi",
      description:
        "AI-powered chatbot enhancing access to justice in Nepal by providing legal document explanations.",
      link: "https://github.com/uniquesht1/codewave_legalsathi",
      image: "./src/assets/Images/Projects/legalsathi.png",
    },
    {
      title: "RaCircle",
      description:
        "Platform for youths to volunteer for cultural preservation.",
      link: "https://htc-six.vercel.app/",
      image: "./src/assets/Images/Projects/racircle.png",
    },
    {
      title: "Image Steganalysis using Ensemble Classifiers",
      description:
        "A research project on Image Steganalysis using Ensemble Classifiers.",
      link: "https://github.com/cruvss/Image-Steganalysis-Using-Ensemble-Classifiers",
      image: "./src/assets/Images/Projects/steganalysis.png",
    },
    {
      title: "To-do List",
      description:
        "A handy to-do list that retains tasks in your browser for future use.",
      link: "https://to-do-list-rouge-seven.vercel.app/",
      image: "./src/assets/Images/Projects/todo.png",
    },
    {
      title: "Coming Soon..",
      description: "Stay tuned for upcoming projects",
      link: "",
      image: "./src/assets/Images/Projects/coming-soon.png",
    },
  ];
  return (
    <main>
      <section id="projects">
        <h2>My Projects</h2>
        <div class="projects-container">
          <ProjectCard projectDetails={projectDetails} />
        </div>
      </section>
    </main>
  );
};

export default Projects;
