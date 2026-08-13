import { useEffect, useMemo, useState } from "react";

import { fetchGitHubProjects } from "../../services/github";
import type { GitHubRepository } from "../../types/github";

import "./styles.css";

interface SelectedProject {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  status: string;
  githubUrl?: string;
}

const selectedProjects: SelectedProject[] = [
  {
    number: "01",
    category: "Experiência web interativa",
    title: "Universo Mariana",
    description:
      "Uma experiência digital autoral construída para transformar memórias, mensagens e interações em uma aplicação web imersiva. O projeto evoluiu para uma arquitetura modular em JavaScript, com renderers, eventos customizados, componentes visuais e diferentes experiências dentro da mesma aplicação.",
    technologies: ["JavaScript", "HTML", "CSS", "Arquitetura modular", "Git"],
    status: "Em evolução",
    githubUrl: "https://github.com/Ademir892/ANIVERSARIO-CARD",
  },
  {
    number: "02",
    category: "Software + regras de negócio",
    title: "Auditor de Guias Tributárias",
    description:
      "Projeto concebido para revisar cálculos tributários e ajudar empresas a identificar possíveis inconsistências em guias mensais. A proposta combina regras fiscais, validação de dados e software para tornar verificações complexas mais compreensíveis.",
    technologies: ["Regras de negócio", "Software", "Validação", "Fiscal"],
    status: "Em planejamento",
  },
  {
    number: "03",
    category: "Frontend + engenharia de software",
    title: "Portfólio V2",
    description:
      "Reconstrução completa deste portfólio com React e TypeScript. O projeto aplica design system, componentes reutilizáveis, tipagem, organização por responsabilidades, responsividade e um fluxo de desenvolvimento baseado em pequenas entregas versionadas.",
    technologies: ["React", "TypeScript", "Vite", "CSS", "Git"],
    status: "Em desenvolvimento",
    githubUrl: "https://github.com/Ademir892/My-portifolio",
  },
];

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

  const availableProjects = useMemo(() => {
    return [...projects]
      .filter((project) => !project.fork && !project.archived)
      .sort(
        (firstProject, secondProject) =>
          new Date(secondProject.updated_at).getTime() -
          new Date(firstProject.updated_at).getTime(),
      );
  }, [projects]);

  const visibleRepositories = availableProjects.slice(0, visibleProjects);

  const loadMoreProjects = () => {
    setVisibleProjects((previousValue) => previousValue + 6);
  };

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="projects-hero__container">
          <div>
            <span className="projects-hero__eyebrow">Projetos</span>

            <h1 className="projects-hero__title">
              Ideias que viram
              <span> código.</span>
            </h1>
          </div>

          <p className="projects-hero__description">
            Uso projetos para aprender, testar decisões técnicas e transformar
            problemas em aplicações. Alguns começam como experimentos. Outros
            surgem de necessidades reais.
          </p>
        </div>
      </section>

      <section
        className="projects-selected"
        aria-labelledby="projects-selected-title"
      >
        <div className="projects-selected__container">
          <div className="projects-selected__header">
            <span className="projects-selected__eyebrow">
              Trabalho selecionado
            </span>

            <h2
              id="projects-selected-title"
              className="projects-selected__title"
            >
              Projetos em destaque
            </h2>
          </div>

          <div className="projects-selected__list">
            {selectedProjects.map((project) => (
              <article
                key={project.number}
                className="projects-selected__project"
              >
                <div className="projects-selected__number">
                  {project.number}
                </div>

                <div className="projects-selected__content">
                  <div className="projects-selected__top">
                    <div>
                      <span className="projects-selected__category">
                        {project.category}
                      </span>

                      <h3 className="projects-selected__project-title">
                        {project.title}
                      </h3>
                    </div>

                    <span className="projects-selected__status">
                      {project.status}
                    </span>
                  </div>

                  <p className="projects-selected__description">
                    {project.description}
                  </p>

                  <div className="projects-selected__footer">
                    <div className="projects-selected__technologies">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="projects-selected__technology"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects-selected__link"
                      >
                        Ver código
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="projects-github"
        aria-labelledby="projects-github-title"
      >
        <div className="projects-github__container">
          <div className="projects-github__intro">
            <div>
              <span className="projects-github__eyebrow">GitHub</span>

              <h2 id="projects-github-title" className="projects-github__title">
                Outros experimentos
                <span> e estudos.</span>
              </h2>
            </div>

            <p className="projects-github__description">
              Esta área é carregada diretamente do meu GitHub e reúne outros
              projetos, exercícios e experimentos que fazem parte do meu
              processo de aprendizado.
            </p>
          </div>

          {isLoading ? (
            <div className="projects-github__message">
              Carregando repositórios...
            </div>
          ) : visibleRepositories.length > 0 ? (
            <>
              <div className="projects-github__grid">
                {visibleRepositories.map((project) => (
                  <article key={project.id} className="projects-github__card">
                    <div className="projects-github__card-header">
                      <span className="projects-github__repository-label">
                        Repositório
                      </span>

                      {project.language && (
                        <span className="projects-github__language">
                          {project.language}
                        </span>
                      )}
                    </div>

                    <h3 className="projects-github__card-title">
                      {project.name}
                    </h3>

                    <p className="projects-github__card-description">
                      {project.description ||
                        "Projeto disponível no meu GitHub."}
                    </p>

                    <div className="projects-github__card-footer">
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects-github__repository-link"
                      >
                        GitHub
                        <span aria-hidden="true">↗</span>
                      </a>

                      {project.homepage && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="projects-github__demo-link"
                        >
                          Demo
                          <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              {visibleProjects < availableProjects.length && (
                <div className="projects-github__load-more">
                  <button
                    type="button"
                    onClick={loadMoreProjects}
                    className="projects-github__load-button"
                  >
                    Carregar mais projetos
                    <span aria-hidden="true">↓</span>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="projects-github__message">
              Não foi possível carregar os repositórios neste momento.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
