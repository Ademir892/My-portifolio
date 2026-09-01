import "./styles.css";

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

export default function Consulting() {
  return (
    <main className="consulting">
      <section className="consulting__hero">
        <p className="consulting__eyebrow">CONSULTORIA</p>

        <h1 className="consulting__title">
          Problemas diferentes.
          <span> A mesma lógica.</span>
        </h1>

        <p className="consulting__description">
          Entender o que precisa ser melhorado antes de decidir como resolver.
        </p>
      </section>

      <section
        className="consulting__areas"
        aria-labelledby="consulting-areas-title"
      >
        <div className="consulting__section-heading">
          <p className="consulting__eyebrow">COMO POSSO AJUDAR</p>

          <h2 id="consulting-areas-title">
            Escolha o caminho que faz mais sentido para você.
          </h2>
        </div>

        <div className="consulting__grid">
          <article className="consulting__card">
            <span className="consulting__icon" aria-hidden="true">
              🏋️
            </span>

            <p className="consulting__card-number">01</p>

            <h3>Treinamento Online</h3>

            <p>
              Consultoria personalizada para diferentes objetivos, com
              planejamento individual, acompanhamento semanal e ajustes durante
              o processo.
            </p>

            <span className="consulting__coming-soon">Em construção</span>
          </article>

          <article className="consulting__card">
            <span className="consulting__icon" aria-hidden="true">
              ⚙️
            </span>

            <p className="consulting__card-number">02</p>

            <h3>Sistemas & Automação</h3>

            <p>
              Análise de processos, ideias e problemas que podem ser
              simplificados ou transformados em soluções digitais.
            </p>

            <span className="consulting__coming-soon">Em construção</span>
          </article>
        </div>
      </section>

      <section
        className="consulting__plans"
        aria-labelledby="consulting-plans-title"
      >
        <div className="consulting__section-heading">
          <p className="consulting__eyebrow">TREINAMENTO ONLINE</p>

          <h2 id="consulting-plans-title">
            Três formas de começar.
            <span> O cuidado com o seu processo, não.</span>
          </h2>

          <p className="consulting__plans-intro">
            A diferença entre os planos está no nível de acompanhamento. O
            objetivo continua sendo o mesmo: construir um treinamento que faça
            sentido para você.
          </p>
        </div>

        <div className="consulting__plans-grid">
          {trainingPlans.map((plan) => (
            <article
              key={plan.name}
              className={
                plan.featured
                  ? "consulting__plan consulting__plan--featured"
                  : "consulting__plan"
              }
            >
              <div className="consulting__plan-top">
                <span className="consulting__plan-number">{plan.number}</span>

                {plan.featured && (
                  <span className="consulting__plan-badge">Mais procurado</span>
                )}
              </div>

              <div>
                <h3>{plan.name}</h3>

                <p className="consulting__plan-description">
                  {plan.description}
                </p>
              </div>

              <ul className="consulting__plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#interesse" className="consulting__plan-action">
                Tenho interesse
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <p className="consulting__plans-note">
          Não sabe qual escolher? Sem problema. Podemos conversar e entender
          qual formato faz mais sentido para o seu momento.
        </p>
      </section>
      <section
        className="consulting__training"
        aria-labelledby="consulting-training-title"
      >
        <div className="consulting__section-heading">
          <p className="consulting__eyebrow">TREINAMENTO ONLINE</p>

          <h2 id="consulting-training-title">
            Não é só receber um treino.
            <span> É entender o processo.</span>
          </h2>

          <p className="consulting__section-description">
            O planejamento é construído a partir dos seus objetivos, da sua
            realidade e daquilo que você precisa desenvolver.
          </p>
        </div>

        <div className="consulting__training-grid">
          <article className="consulting__feature">
            <span className="consulting__feature-number">01</span>

            <h3>Avaliação</h3>

            <p>
              Antes de montar qualquer planejamento, quero entender você, seus
              objetivos, sua rotina e o que precisa ser melhorado.
            </p>
          </article>

          <article className="consulting__feature">
            <span className="consulting__feature-number">02</span>

            <h3>Planejamento</h3>

            <p>
              Seu treinamento é estruturado de forma individual, considerando
              seu nível atual, seus objetivos e os recursos disponíveis.
            </p>
          </article>

          <article className="consulting__feature">
            <span className="consulting__feature-number">03</span>

            <h3>Acompanhamento</h3>

            <p>
              O processo não termina quando você recebe o treino. Ajustamos,
              conversamos e evoluímos conforme sua realidade muda.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
