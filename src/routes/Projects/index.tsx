import React, { useEffect, useState } from "react";
import { fetchGitHubProjects } from "../../utils/FetchGitHubProjects";
import './styles.css'; // Mantenha a importação do CSS
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
      {/* Ajuste aqui: projects-container para container */}
      <div className="container">
        {/* Ajuste aqui: Sem classe no h1, ou adicione class="title" */}
        <h1 className="title">Meus Projetos</h1> {/* Adicionado class="title" */}

        {isLoading ? (
          <p className="loading-message">Carregando projetos do GitHub...</p>
        ) : (
          // Ajuste aqui: projects-grid para projectList
          <div className="projectList">
            {projects && projects.length > 0 ? (
              projects.slice(0, visibleProjects).map((project) => (
                // Ajuste aqui: project-card para projectCard
                <div key={project.id} className="projectCard">
                  {/* Ajuste aqui: h3 sem classe para projectTitle */}
                  <h3 className="projectTitle">{project.name}</h3>
                  {/* Ajuste aqui: p sem classe para projectDescription */}
                  <p className="projectDescription">{project.description || "Sem descrição."}</p>
                  {/* Ajuste aqui: a sem classe para projectLink */}
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="projectLink">
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

export default Projects;