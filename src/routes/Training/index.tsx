import { Link } from "react-router-dom";

import "./styles.css";

const trainingGoals = [
  "Ganhar força",
  "Hipertrofia",
  "Emagrecimento",
  "Condicionamento físico",
  "Mobilidade",
  "Melhorar movimentos",
  "Performance",
  "Qualidade de vida",
  "Voltar a treinar",
];

const trainingPlans = [
  {
    number: "01",
    name: "Essencial",
    description:
      "Para quem busca um planejamento personalizado e consegue conduzir o processo com mais autonomia.",
    features: [
      "Avaliação inicial",
      "Treinamento personalizado",
      "Planejamento em PDF",
      "Orientações para execução",
      "Revisão periódica",
    ],
  },
  {
    number: "02",
    name: "Evolução",
    featured: true,
    description:
      "Para quem quer acompanhamento próximo, ajustes constantes e alguém acompanhando sua evolução.",
    features: [
      "Tudo do Essencial",
      "Acompanhamento semanal",
      "Ajustes do treinamento",
      "Feedback via WhatsApp",
      "Análise de vídeos",
    ],
  },
  {
    number: "03",
    name: "Performance",
    description:
      "Para quem busca um acompanhamento mais próximo e uma estratégia ainda mais individualizada.",
    features: [
      "Tudo do Evolução",
      "Análise detalhada dos movimentos",
      "Ajustes mais frequentes",
      "Videochamadas",
      "Acompanhamento próximo",
    ],
  },
];

export default function Training() {
  return (
    <main className="training">
      <section className="training__hero">
        <div className="training__hero-content">
          <p className="training__eyebrow">CONSULTORIA ONLINE</p>

          <h1 className="training__title">
            Você define o objetivo.
            <span> Eu explico o caminho.</span>
          </h1>

          <p className="training__description">
            Um treinamento pensado para você, seus objetivos e a sua realidade.
            Com acompanhamento, ajustes e uma coisa que considero fundamental:
            entender o porquê de cada escolha.
          </p>

          <div className="training__actions">
            <a href="#como-funciona" className="training__primary-action">
              Entender como funciona
            </a>

            <a href="#objetivos" className="training__secondary-action">
              Ver objetivos
            </a>
          </div>
        </div>

        <div className="training__philosophy">
          <span className="training__philosophy-line" />

          <p>
            “Eu não quero apenas dizer o que você deve fazer. Quero que você
            entenda o porquê.”
          </p>

          <span className="training__philosophy-author">— Ademir Traesel</span>
        </div>
      </section>

      <section
        id="objetivos"
        className="training__goals"
        aria-labelledby="training-goals-title"
      >
        <div className="training__section-heading">
          <p className="training__eyebrow">SEU OBJETIVO</p>

          <h2 id="training-goals-title">
            Você não precisa se encaixar em um objetivo pronto.
          </h2>

          <p>
            Cada pessoa começa de um lugar diferente. Por isso, o treinamento
            parte daquilo que você realmente quer alcançar.
          </p>
        </div>

        <div className="training__goals-grid">
          {trainingGoals.map((goal, index) => (
            <div className="training__goal" key={goal}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{goal}</strong>
            </div>
          ))}

          <div className="training__goal training__goal--custom">
            <span>+</span>
            <strong>Outro objetivo</strong>
          </div>
        </div>

        <p className="training__goals-note">
          Não encontrou o que procura? Você pode explicar seu objetivo com suas
          próprias palavras.
        </p>
      </section>

      <section
        id="como-funciona"
        className="training__intro"
        aria-labelledby="training-intro-title"
      >
        <p className="training__eyebrow">TREINAMENTO COM PROPÓSITO</p>

        <h2 id="training-intro-title">
          Pessoas diferentes precisam de caminhos diferentes.
        </h2>

        <div className="training__intro-content">
          <p>
            Você pode querer ganhar força, desenvolver massa muscular, melhorar
            seu condicionamento, voltar a treinar ou simplesmente se movimentar
            melhor.
          </p>

          <p>
            A consultoria começa entendendo onde você está, para onde quer ir e
            o que precisa ser construído para chegar lá.
          </p>
        </div>
      </section>

      <section
        className="training__steps"
        aria-labelledby="training-steps-title"
      >
        <div className="training__section-heading">
          <p className="training__eyebrow">O PROCESSO</p>

          <h2 id="training-steps-title">
            Um acompanhamento que evolui com você.
          </h2>
        </div>

        <div className="training__steps-list">
          <article className="training__step">
            <span>01</span>
            <div>
              <h3>Você me conta</h3>
              <p>
                Objetivos, rotina, experiência e tudo aquilo que pode ajudar a
                entender o seu momento.
              </p>
            </div>
          </article>

          <article className="training__step">
            <span>02</span>
            <div>
              <h3>Eu analiso</h3>
              <p>
                A partir das informações, definimos o que precisa ser trabalhado
                e como podemos começar.
              </p>
            </div>
          </article>

          <article className="training__step">
            <span>03</span>
            <div>
              <h3>Construímos o treino</h3>
              <p>
                Você recebe um planejamento personalizado e entende a lógica por
                trás das escolhas.
              </p>
            </div>
          </article>

          <article className="training__step">
            <span>04</span>
            <div>
              <h3>Acompanhamos</h3>
              <p>
                Conversamos semanalmente para entender o que está funcionando, o
                que precisa mudar e como continuar evoluindo.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section
        id="planos"
        className="training__plans"
        aria-labelledby="training-plans-title"
      >
        <div className="training__section-heading">
          <p className="training__eyebrow">ESCOLHA SEU ACOMPANHAMENTO</p>

          <h2 id="training-plans-title">
            O nível de acompanhamento muda.
            <span> O cuidado com o seu processo, não.</span>
          </h2>

          <p>
            Três formas de começar. A escolha depende do quanto você quer de
            acompanhamento durante sua jornada.
          </p>
        </div>

        <div className="training__plans-grid">
          {trainingPlans.map((plan) => (
            <article
              className={
                plan.featured
                  ? "training__plan training__plan--featured"
                  : "training__plan"
              }
              key={plan.name}
            >
              <div className="training__plan-header">
                <div className="training__plan-number">{plan.number}</div>

                {plan.featured && (
                  <span className="training__plan-badge">Mais procurado</span>
                )}
              </div>

              <div>
                <h3>{plan.name}</h3>

                <p className="training__plan-description">{plan.description}</p>
              </div>

              <ul className="training__plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#interesse" className="training__plan-action">
                Tenho interesse
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <p className="training__plans-note">
          Não sabe qual escolher? Sem problema. Podemos conversar e entender
          qual formato faz mais sentido para o seu momento.
        </p>
      </section>
      <section className="training__back">
        <Link to="/consultoria">← Voltar para Consultoria</Link>
      </section>
    </main>
  );
}
