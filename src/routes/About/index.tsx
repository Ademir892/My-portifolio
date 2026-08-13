import { Link } from "react-router-dom";

import imgAvatar from "../../../assets/B864196D-DFFF-4D68-B58E-F13F1BD0D45A.jpeg";

import "./styles.css";

const principles = [
  {
    number: "01",
    title: "Entender antes de construir",
    description:
      "Antes de pensar em tecnologia, procuro entender o problema, o contexto e quem realmente precisa da solução.",
  },
  {
    number: "02",
    title: "Clareza sobre complexidade",
    description:
      "Gosto de decompor problemas grandes em partes menores, tornar conceitos compreensíveis e construir soluções que façam sentido.",
  },
  {
    number: "03",
    title: "Aprender construindo",
    description:
      "Projetos são parte central do meu processo. Uso cada aplicação para testar conhecimentos, encontrar limitações e evoluir tecnicamente.",
  },
];

const skillGroups = [
  {
    title: "Desenvolvimento",
    skills: ["React", "TypeScript", "JavaScript", "Java", "HTML", "CSS"],
  },
  {
    title: "Engenharia de Software",
    skills: [
      "Orientação a Objetos",
      "Arquitetura",
      "Testes",
      "APIs",
      "Maven",
      "Git",
    ],
  },
  {
    title: "Competências",
    skills: [
      "Resolução de problemas",
      "Comunicação",
      "Pensamento analítico",
      "Organização",
      "Aprendizado contínuo",
      "Trabalho com pessoas",
    ],
  },
];

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero__container">
          <div className="about-hero__content">
            <span className="about-hero__eyebrow">Sobre mim</span>

            <h1 className="about-hero__title">
              Pessoas, problemas
              <span> e tecnologia.</span>
            </h1>

            <p className="about-hero__lead">
              Minha trajetória profissional começou trabalhando diretamente com
              pessoas. Hoje, na Engenharia de Software, levo comigo algo que
              continua sendo essencial: compreender necessidades e transformar
              conhecimento em soluções aplicáveis.
            </p>

            <div className="about-hero__actions">
              <Link to="/projects" className="about-hero__primary-link">
                Ver meus projetos
                <span aria-hidden="true">→</span>
              </Link>

              <Link to="/contact" className="about-hero__secondary-link">
                Entrar em contato
              </Link>
            </div>
          </div>

          <div className="about-hero__visual">
            <div className="about-hero__image-wrapper">
              <img
                src={imgAvatar}
                alt="Ademir Traesel"
                className="about-hero__image"
              />
            </div>

            <div className="about-hero__identity">
              <span>Ademir Traesel</span>

              <span>Engenharia de Software • Tecnologia • Educação Física</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-story" aria-labelledby="about-story-title">
        <div className="about-story__container">
          <div className="about-story__heading">
            <span className="about-story__eyebrow">Minha trajetória</span>

            <h2 id="about-story-title" className="about-story__title">
              Não comecei pela tecnologia.
              <span> E isso virou uma vantagem.</span>
            </h2>
          </div>

          <div className="about-story__content">
            <p className="about-story__highlight">
              Trabalhar como professor me ensinou que uma solução tecnicamente
              correta não é suficiente se ela não puder ser compreendida e
              utilizada por pessoas.
            </p>

            <div className="about-story__text">
              <p>
                Ensinar exige observar, identificar dificuldades, adaptar
                estratégias e comunicar conceitos de formas diferentes. Com o
                tempo, percebi que esse processo tem muito em comum com aquilo
                que mais me atrai em desenvolvimento de software.
              </p>

              <p>
                Programar passou a ser uma nova forma de resolver problemas. Em
                vez de apenas estudar tecnologias, passei a construir projetos,
                testar ideias, organizar código, trabalhar com versionamento e
                compreender melhor como sistemas são estruturados.
              </p>

              <p>
                Hoje quero continuar evoluindo justamente nesse ponto de
                encontro: pensamento analítico, engenharia e tecnologia
                aplicados a problemas reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="about-principles"
        aria-labelledby="about-principles-title"
      >
        <div className="about-principles__container">
          <div className="about-principles__header">
            <span className="about-principles__eyebrow">Como penso</span>

            <h2 id="about-principles-title" className="about-principles__title">
              Minha forma de construir.
            </h2>
          </div>

          <div className="about-principles__grid">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="about-principles__item"
              >
                <span className="about-principles__number">
                  {principle.number}
                </span>

                <h3 className="about-principles__item-title">
                  {principle.title}
                </h3>

                <p className="about-principles__description">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-skills" aria-labelledby="about-skills-title">
        <div className="about-skills__container">
          <div className="about-skills__intro">
            <div>
              <span className="about-skills__eyebrow">Conhecimentos</span>

              <h2 id="about-skills-title" className="about-skills__title">
                Ferramentas mudam.
                <span> Fundamentos ficam.</span>
              </h2>
            </div>

            <p className="about-skills__description">
              Minha formação está em evolução contínua. Mais do que acumular
              tecnologias, procuro entender os fundamentos que permitem
              aprender, adaptar e construir melhor.
            </p>
          </div>

          <div className="about-skills__groups">
            {skillGroups.map((group) => (
              <article key={group.title} className="about-skills__group">
                <h3 className="about-skills__group-title">{group.title}</h3>

                <div className="about-skills__list">
                  {group.skills.map((skill) => (
                    <span key={skill} className="about-skills__skill">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-next" aria-labelledby="about-next-title">
        <div className="about-next__container">
          <div>
            <span className="about-next__eyebrow">Próximo capítulo</span>

            <h2 id="about-next-title" className="about-next__title">
              Ainda estou construindo
              <span> essa história.</span>
            </h2>

            <p className="about-next__description">
              Quero continuar criando projetos, aprofundando minha formação e
              encontrando oportunidades onde software seja usado para resolver
              problemas de verdade.
            </p>
          </div>

          <Link to="/contact" className="about-next__button">
            Vamos conversar
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
