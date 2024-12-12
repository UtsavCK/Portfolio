import React from "react";

const Projects = () => {
  return (
    <main>
      <section id="projects">
        <h2>My Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <h3>To-do List</h3>
            <p>
              A handy to-do list that retains tasks in your browser for future
              use.
            </p>
            <a
              href="https://to-do-list-rouge-seven.vercel.app/"
              target="_blank"
              className="project-link"
            >
              View Project
            </a>
          </div>

          <div className="project-card">
            <h3>Portfolio website</h3>
            <p>
              Personal website that successfully highlight projects and
              accomplishments.
            </p>
            <a href="./" target="_blank" className="project-link">
              View Project
            </a>
          </div>

          <div className="project-card">
            <h3>RaCircle</h3>
            <p>Platform for youths to volunteer for cultural preservation.</p>
            <a
              href="https://htc-six.vercel.app/"
              target="_blank"
              className="project-link"
            >
              View Project
            </a>
          </div>

          <div className="project-card">
            <h3>Coming Soon..</h3>
            <p>Stay tuned for upcoming projects</p>
            {/* <!-- <a href="" target="_blank" className="project-link">View Project</a> --> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
