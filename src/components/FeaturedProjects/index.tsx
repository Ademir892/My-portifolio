import { Link } from "react-router-dom";

import "./styles.css";

interface FeaturedProject {
  id: number;
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  status: string;
  githubUrl?: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    number: "01",
    category: "Experiência web interativa",
    title: "Universo Mariana",
    description:
      "Projeto autoral desenvolvido como uma experiência digital interativa, combinando narrativa, animações, arquitetura modular em JavaScript e uma interface espacial construída do zero.",
    technologies: ["JavaScript", "HTML", "CSS", "Git"],
    status: "Em evolução",
    githubUrl: "https://github.com/Ademir892/ANIVERSARIO-CARD",
  },
  {
    id: 2,
    number: "02",
    category: "Software + regras de negócio",
    title: "Auditor de Guias Tributárias",
    description:
      "Conceito de aplicação para revisar cálculos tributários, validar guias mensais e transformar regras fiscais complexas em verificações claras para empresas e profissionais.",
    technologies: ["Software", "Regras de negócio", "Fiscal"],
    status: "Em planejamento",
  },
  {
    id: 3,
    number: "03",
    category: "Frontend + arquitetura",
    title: "Portfólio V2",
    description:
      "Reconstrução do meu portfólio profissional com React e TypeScript, aplicando design system, arquitetura de componentes, responsividade e uma identidade orientada a engenharia e software.",
    technologies: ["React", "TypeScript", "Vite", "CSS"],
    status: "Em desenvolvimento",
    githubUrl: "https://github.com/Ademir892/My-portifolio",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      className="featured-projects"
      aria-labelledby="featured-projects-title"
    >
      <div className="featured-projects__container">
        <div className="featured-projects__header">
          <div>
            <span className="featured-projects__eyebrow">
              Trabalho selecionado
            </span>

            <h2
              id="featured-projects-title"
              className="featured-projects__title"
            >
              Projetos em destaque
            </h2>
          </div>

          <p className="featured-projects__introduction">
            Projetos que representam diferentes formas de transformar ideias,
            necessidades e problemas em soluções técnicas.
          </p>
        </div>

        <div className="featured-projects__list">
          {featuredProjects.map((project) => (
            <article key={project.id} className="featured-projects__card">
              <div className="featured-projects__card-number">
                {project.number}
              </div>

              <div className="featured-projects__card-content">
                <div className="featured-projects__card-top">
                  <div>
                    <span className="featured-projects__category">
                      {project.category}
                    </span>

                    <h3 className="featured-projects__project-title">
                      {project.title}
                    </h3>
                  </div>

                  <span className="featured-projects__status">
                    {project.status}
                  </span>
                </div>

                <p className="featured-projects__description">
                  {project.description}
                </p>

                <div className="featured-projects__footer">
                  <div className="featured-projects__technologies">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="featured-projects__technology"
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
                      className="featured-projects__link"
                    >
                      GitHub
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="featured-projects__all">
          <Link to="/projects" className="featured-projects__all-link">
            Explorar todos os projetos
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
