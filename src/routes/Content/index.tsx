import { Link } from "react-router-dom";

import "./styles.css";

const contentProducts = [
  {
    slug: "postura-no-dia-a-dia",
    category: "POSTURA",
    title: "Postura no dia a dia",
    description:
      "Um guia prático para compreender melhor sua postura e os hábitos de movimento presentes na rotina.",
    status: "Em breve",
  },
  {
    slug: "mobilidade-para-a-vida-real",
    category: "MOBILIDADE",
    title: "Mobilidade para a vida real",
    description:
      "Estratégias simples para desenvolver mobilidade e melhorar a qualidade dos seus movimentos.",
    status: "Em breve",
  },
  {
    slug: "treino-funcional",
    category: "TREINAMENTO",
    title: "Treino Funcional: comece pelo movimento",
    description:
      "Princípios para começar a treinar com mais consciência, controle e qualidade de movimento.",
    status: "Em breve",
  },
];

export default function Content() {
  return (
    <main className="content">
      <section className="content__hero">
        <div className="content__hero-content">
          <p className="content__eyebrow">CONTEÚDOS DIGITAIS</p>

          <h1>
            Conhecimento para
            <span>entender o movimento.</span>
          </h1>

          <p className="content__hero-description">
            Materiais desenvolvidos a partir de uma visão prática sobre corpo,
            movimento, treinamento e funcionalidade.
          </p>
        </div>
      </section>

      <section className="content__catalog">
        <div className="content__catalog-header">
          <div>
            <span className="content__section-number">01</span>

            <p className="content__eyebrow">CATÁLOGO</p>
          </div>

          <p className="content__catalog-introduction">
            Cada material parte de uma pergunta diferente, mas todos seguem a
            mesma ideia: compreender antes de simplesmente executar.
          </p>
        </div>

        <div className="content__products">
          {contentProducts.map((product, index) => (
            <Link
              key={product.slug}
              to={`/conteudos/${product.slug}`}
              className={`content__product content__product--${index + 1}`}
            >
              <div className="content__product-top">
                <span>{String(index + 1).padStart(2, "0")}</span>

                <span>{product.category}</span>
              </div>

              <div className="content__product-content">
                <h2>{product.title}</h2>

                <p>{product.description}</p>
              </div>

              <div className="content__product-footer">
                <span>{product.status}</span>

                <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="content__philosophy">
        <div className="content__philosophy-number">02</div>

        <div className="content__philosophy-content">
          <p className="content__eyebrow">A IDEIA</p>

          <h2>
            Não quero apenas ensinar
            <span>o que fazer.</span>
          </h2>

          <p>
            Quero ajudar você a entender por que está fazendo, perceber o que
            seu corpo está fazendo e desenvolver uma relação mais consciente com
            o próprio movimento.
          </p>
        </div>
      </section>

      <section className="content__closing">
        <p className="content__eyebrow">EM CONSTRUÇÃO</p>

        <h2>
          Novos materiais
          <span>estão chegando.</span>
        </h2>

        <p>
          Os primeiros conteúdos estão sendo desenvolvidos com calma,
          profundidade e aplicação prática.
        </p>
      </section>
    </main>
  );
}
