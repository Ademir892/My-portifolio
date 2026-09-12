import "./styles.css";

const contentProducts = [
  {
    category: "POSTURA",
    title: "Postura no dia a dia",
    description:
      "Um guia prático para compreender melhor sua postura e os hábitos de movimento presentes na rotina.",
    status: "Em breve",
  },
  {
    category: "MOBILIDADE",
    title: "Mobilidade para a vida real",
    description:
      "Estratégias simples para desenvolver mobilidade e melhorar a qualidade dos seus movimentos.",
    status: "Em breve",
  },
  {
    category: "TREINAMENTO",
    title: "Treino Funcional: comece pelo movimento",
    description:
      "Princípios para começar a treinar com mais consciência, controle e qualidade de movimento.",
    status: "Em breve",
  },
];

export default function Content() {
  return (
    <main className="content-page">
      <section className="content__hero" aria-labelledby="content-title">
        <div className="content__hero-inner">
          <div className="content__hero-copy">
            <p className="content__eyebrow">CONTEÚDOS DIGITAIS</p>

            <h1 id="content-title">
              Conhecimento para você
              <span>se movimentar melhor.</span>
            </h1>

            <p className="content__hero-description">
              Guias práticos sobre movimento, postura, mobilidade e treinamento,
              desenvolvidos a partir de uma visão funcional do corpo.
            </p>

            <a href="#materiais" className="content__hero-action">
              Explorar conteúdos
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="content__hero-mark" aria-hidden="true">
            <span>+</span>
          </div>
        </div>
      </section>

      <section
        id="materiais"
        className="content__products"
        aria-labelledby="content-products-title"
      >
        <div className="content__section-heading">
          <p className="content__eyebrow">MATERIAIS</p>

          <h2 id="content-products-title">
            Conteúdo pensado para
            <span>ser aplicado na vida real.</span>
          </h2>

          <p>
            Materiais objetivos para quem quer entender melhor o próprio corpo e
            desenvolver uma relação mais consciente com o movimento.
          </p>
        </div>

        <div className="content__products-grid">
          {contentProducts.map((product, index) => (
            <article
              key={product.title}
              className={`content__product content__product--${index + 1}`}
            >
              <div className="content__product-top">
                <span className="content__product-number">0{index + 1}</span>

                <span className="content__product-category">
                  {product.category}
                </span>
              </div>

              <div className="content__product-content">
                <p className="content__product-status">{product.status}</p>

                <h3>{product.title}</h3>

                <p>{product.description}</p>
              </div>

              <div className="content__product-footer">
                <span className="content__product-link content__product-link--disabled">
                  Em breve
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="content__philosophy"
        aria-labelledby="content-philosophy-title"
      >
        <div className="content__philosophy-heading">
          <p className="content__eyebrow">UMA OUTRA FORMA DE APRENDER</p>

          <h2 id="content-philosophy-title">
            Treinar também é<span>entender.</span>
          </h2>
        </div>

        <div className="content__philosophy-content">
          <p>
            Informação não substitui acompanhamento profissional. Mas entender
            melhor como o corpo funciona pode mudar completamente a forma como
            você se movimenta, treina e percebe sua própria rotina.
          </p>

          <p>
            Por isso, os materiais são desenvolvidos para transformar conceitos
            em orientações práticas, sem promessas milagrosas e sem transformar
            o movimento em uma fórmula pronta.
          </p>
        </div>
      </section>

      <section
        className="content__how-it-works"
        aria-labelledby="content-how-title"
      >
        <div className="content__section-heading">
          <p className="content__eyebrow">COMO FUNCIONA</p>

          <h2 id="content-how-title">
            Simples de acessar.
            <span>Fácil de aplicar.</span>
          </h2>
        </div>

        <div className="content__steps">
          <article className="content__step">
            <span className="content__step-number">01</span>

            <div>
              <h3>Escolha o material</h3>

              <p>
                Encontre o conteúdo que mais combina com o que você busca
                desenvolver.
              </p>
            </div>
          </article>

          <article className="content__step">
            <span className="content__step-number">02</span>

            <div>
              <h3>Faça sua aquisição</h3>

              <p>
                O pagamento será realizado de forma segura através da plataforma
                de checkout.
              </p>
            </div>
          </article>

          <article className="content__step">
            <span className="content__step-number">03</span>

            <div>
              <h3>Receba seu material</h3>

              <p>
                Após a confirmação, você receberá acesso ao conteúdo adquirido.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="content__disclaimer">
        <p>
          Os materiais possuem caráter educativo e não substituem avaliação,
          diagnóstico ou acompanhamento individualizado de um profissional
          habilitado.
        </p>
      </section>

      <section className="content__final-cta">
        <div>
          <p className="content__eyebrow">CONHECIMENTO EM MOVIMENTO</p>

          <h2>
            Comece entendendo
            <span>o seu próprio corpo.</span>
          </h2>
        </div>

        <a href="#materiais" className="content__final-action">
          Ver materiais
          <span aria-hidden="true">→</span>
        </a>
      </section>
    </main>
  );
}
