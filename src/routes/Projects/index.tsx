import React, { useEffect, useState } from "react";
import { fetchGitHubProjects } from "../../utils/FetchGitHubProjects";
import "./styless.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await fetchGitHubProjects("Ademir892");
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="title">Meus Projetos</h1>
        <div className="projectList">
          {projects.map((project) => (
            <div key={project.id} className="projectCard">
              <h3 className="projectTitle">{project.name}</h3>
              <p className="projectDescription">{project.description}</p>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                Ver no GitHub
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>

  );
};

export default Projects;
