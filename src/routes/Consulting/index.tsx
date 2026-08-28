import "./styles.css";

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
    </main>
  );
}
