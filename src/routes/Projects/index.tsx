import React, { useEffect, useState } from "react";
import { fetchGitHubProjects } from "../../utils/FetchGitHubProjects";
import './styles.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [visibleProjects, setVisibleProjects] = useState(6);

  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true); 
      const data = await fetchGitHubProjects("Ademir892");
      setProjects(data);
      setIsLoading(false); 
    };

    fetchProjects();
  }, []);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  return (
    <>
      <Header />
      <div className="projects-container">
        <h1>Meus Projetos</h1>

        {isLoading ? (
          <p className="loading-message">Carregando projetos do GitHub...</p>
        ) : (
          <div className="projects-grid">
            {projects && projects.length > 0 ? (
              projects.slice(0, visibleProjects).map((project) => (
                <div key={project.id} className="project-card">
                  <h3>{project.name}</h3>
                  <p>{project.description || "Sem descrição."}</p>
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer">
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
          <button onClick={loadMoreProjects} className="btn-load-more">
            Carregar Mais
          </button>
        )}
      </div>
      <Footer />
    </>
  );
}
