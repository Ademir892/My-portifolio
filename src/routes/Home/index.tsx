import { Link } from "react-router-dom";

import FeaturedProjects from "../../components/FeaturedProjects";
import ProfessionalJourney from "../../components/ProfessionalJourney";

import "./styles.css";

const technologies = [
  "React",
  "TypeScript",
  "Java",
  "JavaScript",
  "Git",
  "Maven",
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero__container">
          <div className="home-hero__content">
            <div className="home-hero__eyebrow">
              <span className="home-hero__eyebrow-line" />

              <span>Engenharia • Software • Tecnologia</span>
            </div>

            <h1 className="home-hero__title">
              Transformo problemas em
              <span> soluções técnicas.</span>
            </h1>

            <p className="home-hero__description">
              Uno raciocínio de engenharia e desenvolvimento de software para
              construir soluções úteis, claras e bem estruturadas.
            </p>

            <div className="home-hero__actions">
              <Link
                to="/projects"
                className="home-hero__button home-hero__button--primary"
              >
                Ver projetos
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                to="/about"
                className="home-hero__button home-hero__button--secondary"
              >
                Conhecer minha trajetória
              </Link>
            </div>

            <div className="home-hero__stack">
              <span className="home-hero__stack-label">Tecnologias</span>

              <div className="home-hero__technologies">
                {technologies.map((technology) => (
                  <span key={technology} className="home-hero__technology">
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="home-hero__panel" aria-label="Áreas de atuação">
            <div className="home-hero__panel-header">
              <span>Áreas de atuação</span>

              <span className="home-hero__panel-status">Em evolução</span>
            </div>

            <div className="home-hero__area">
              <span className="home-hero__area-number">01</span>

              <div>
                <h2>Software</h2>

                <p>
                  Desenvolvimento de aplicações, arquitetura e integração de
                  tecnologias.
                </p>
              </div>
            </div>

            <div className="home-hero__area">
              <span className="home-hero__area-number">02</span>

              <div>
                <h2>Engenharia</h2>

                <p>
                  Análise de processos, pensamento sistêmico e resolução
                  estruturada de problemas.
                </p>
              </div>
            </div>

            <div className="home-hero__area">
              <span className="home-hero__area-number">03</span>

              <div>
                <h2>Soluções</h2>

                <p>
                  Tecnologia aplicada a necessidades reais, do problema inicial
                  à implementação.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <FeaturedProjects />

      <ProfessionalJourney />
    </div>
  );
}
