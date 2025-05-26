import React from "react";
import ProjectCard from "./cards/ProjectCard";
import acmeImg from "../assets/Images/Projects/acme.jpg";
import blogImg from "../assets/Images/Projects/blog.jpg";
import malwareImg from "../assets/Images/Projects/malware.jpg";
import legalsathiImg from "../assets/Images/Projects/legalsathi.jpg";
import racircleImg from "../assets/Images/Projects/racircle.jpg";
import steganalysisImg from "../assets/Images/Projects/steganalysis.jpg";
import todoImg from "../assets/Images/Projects/todo.jpg";
import comingSoonImg from "../assets/Images/Projects/coming-soon.jpg";

const Projects = () => {
  const projectDetails = [
    {
      title: "ACME Dashboard",
      description: "A dashboard for ACME to manage their data and operations.",
      link: "https://nextjs-app-router-sigma.vercel.app/",
      image: acmeImg,
    },
    {
      title: "NextJs Blog",
      description:
        "A lightweight localstorage blog app with session-based authentication on Next.js App Router.",
      link: "https://blog-app-six-liard.vercel.app/",
      image: blogImg,
    },
    {
      title: "Multimodal Approach to Malware Classification",
      description:
        "A research project on malware classification using a multimodal approach.",
      link: "https://github.com/cruvss/Multimodal-Approach-For-Malware-Classification",
      image: malwareImg,
    },
    {
      title: "LegalSathi",
      description:
        "AI-powered chatbot enhancing access to justice in Nepal by providing legal document explanations.",
      link: "https://github.com/uniquesht1/codewave_legalsathi",
      image: legalsathiImg,
    },
    {
      title: "RaCircle",
      description:
        "Platform for youths to volunteer for cultural preservation.",
      link: "https://htc-six.vercel.app/",
      image: racircleImg,
    },
    {
      title: "Image Steganalysis using Ensemble Classifiers",
      description:
        "A research project on Image Steganalysis using Ensemble Classifiers.",
      link: "https://github.com/cruvss/Image-Steganalysis-Using-Ensemble-Classifiers",
      image: steganalysisImg,
    },
    {
      title: "To-do List",
      description:
        "A handy to-do list that retains tasks in your browser for future use.",
      link: "https://to-do-list-rouge-seven.vercel.app/",
      image: todoImg,
    },
    {
      title: "Coming Soon..",
      description: "Stay tuned for upcoming projects",
      // link: "",
      image: comingSoonImg,
    },
  ];
  return (
    <main>
      <section id="projects">
        <h2>My Projects</h2>
        <div className="projects-container">
          <ProjectCard projectDetails={projectDetails} />
        </div>
      </section>
    </main>
  );
};

export default Projects;
