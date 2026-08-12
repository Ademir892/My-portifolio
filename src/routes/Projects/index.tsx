import { useEffect, useState } from "react";

import { fetchGitHubProjects } from "../../services/github";
import type { GitHubRepository } from "../../types/github";

import "./styles.css";

export default function Projects() {
  const [projects, setProjects] = useState<GitHubRepository[]>([]);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      setIsLoading(true);

      const data = await fetchGitHubProjects("Ademir892");

      setProjects(data);
      setIsLoading(false);
    };

    loadProjects();
  }, []);

  const loadMoreProjects = () => {
    setVisibleProjects((previousValue) => previousValue + 6);
  };

  return (
    <div className="container">
      <h1 className="title">Meus Projetos</h1>

      {isLoading ? (
        <p className="loading-message">Carregando projetos do GitHub...</p>
      ) : (
        <div className="projectList">
          {projects.length > 0 ? (
            projects.slice(0, visibleProjects).map((project) => (
              <div key={project.id} className="projectCard">
                <h3 className="projectTitle">{project.name}</h3>

                <p className="projectDescription">
                  {project.description || "Sem descrição."}
                </p>

                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectLink"
                >
                  Ver no GitHub
                </a>
              </div>
            ))
          ) : (
            <p>Nenhum projeto encontrado ou ocorreu um erro ao carregar.</p>
          )}
        </div>
      )}

      {!isLoading && visibleProjects < projects.length && (
        <button
          type="button"
          onClick={loadMoreProjects}
          className="btn-load-more"
        >
          Carregar Mais
        </button>
      )}
    </div>
  );
}
