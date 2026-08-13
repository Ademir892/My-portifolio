import { Link } from "react-router-dom";

import "./styles.css";

interface JourneyItem {
  id: number;
  number: string;
  stage: string;
  title: string;
  description: string;
  tags: string[];
}

const journeyItems: JourneyItem[] = [
  {
    id: 1,
    number: "01",
    stage: "Base profissional",
    title: "Ensinar também é resolver problemas",
    description:
      "Minha experiência como professor desenvolveu uma habilidade que continuo levando para a tecnologia: entender pessoas, identificar dificuldades e transformar conceitos complexos em algo claro e aplicável.",
    tags: ["Comunicação", "Análise", "Pessoas"],
  },
  {
    id: 2,
    number: "02",
    stage: "Formação atual",
    title: "Engenharia de Software",
    description:
      "A tecnologia passou de interesse para construção profissional. Hoje aprofundo fundamentos de desenvolvimento, arquitetura, orientação a objetos, testes, versionamento e construção de aplicações.",
    tags: ["Java", "Web", "Arquitetura", "Testes"],
  },
  {
    id: 3,
    number: "03",
    stage: "Aprendizado aplicado",
    title: "Projetos que saem do papel",
    description:
      "Uso projetos autorais para transformar conhecimento em prática. Cada aplicação é uma oportunidade de experimentar arquitetura, interface, organização de código e resolução de problemas reais.",
    tags: ["React", "TypeScript", "JavaScript", "Git"],
  },
  {
    id: 4,
    number: "04",
    stage: "Direção profissional",
    title: "Engenharia, software e soluções",
    description:
      "Meu objetivo é atuar onde pensamento analítico e tecnologia se encontram: compreender um problema, estruturar uma solução e construir sistemas que realmente tenham utilidade.",
    tags: ["Software", "Engenharia", "Soluções"],
  },
];

export default function ProfessionalJourney() {
  return (
    <section
      className="professional-journey"
      aria-labelledby="professional-journey-title"
    >
      <div className="professional-journey__container">
        <div className="professional-journey__intro">
          <div>
            <span className="professional-journey__eyebrow">Trajetória</span>

            <h2
              id="professional-journey-title"
              className="professional-journey__title"
            >
              Mais do que uma mudança de área.
            </h2>
          </div>

          <div className="professional-journey__intro-content">
            <p>
              Minha trajetória conecta experiências diferentes por um ponto em
              comum: entender problemas e encontrar formas melhores de
              resolvê-los.
            </p>

            <Link to="/about" className="professional-journey__about-link">
              Conhecer minha história
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="professional-journey__timeline">
          {journeyItems.map((item) => (
            <article key={item.id} className="professional-journey__item">
              <div className="professional-journey__marker">
                <span className="professional-journey__number">
                  {item.number}
                </span>

                <span
                  className="professional-journey__dot"
                  aria-hidden="true"
                />
              </div>

              <div className="professional-journey__item-content">
                <span className="professional-journey__stage">
                  {item.stage}
                </span>

                <h3 className="professional-journey__item-title">
                  {item.title}
                </h3>

                <p className="professional-journey__description">
                  {item.description}
                </p>

                <div className="professional-journey__tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="professional-journey__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
