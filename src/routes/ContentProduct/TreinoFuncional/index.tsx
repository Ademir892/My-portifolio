import { Link } from "react-router-dom";

import { contentProducts } from "../../../data/contentProducts";

import "./styles.css";

const product = contentProducts.find(
  (item) => item.slug === "treino-funcional",
);

export default function TreinoFuncional() {
  if (!product) {
    return null;
  }

  return (
    <main className="functional-page">
      <section className="functional-hero">
        <div className="functional-hero__top">
          <Link to="/conteudos" className="functional-hero__back">
            <span aria-hidden="true">←</span>
            Conteúdos
          </Link>

          <span className="functional-hero__number">03 / 03</span>
        </div>

        <div className="functional-hero__content">
          <div className="functional-hero__label">
            <span>03</span>
            <p>{product.category}</p>
          </div>

          <h1>
            Treino
            <span>Funcional.</span>
          </h1>

          <div className="functional-hero__statement">
            <p>Comece pelo</p>
            <strong>movimento.</strong>
          </div>
        </div>

        <div className="functional-hero__bottom">
          <span>{product.subtitle}</span>

          <span className="functional-hero__scroll">
            Explorar
            <span aria-hidden="true">↓</span>
          </span>
        </div>
      </section>

      <section className="functional-manifesto">
        <div className="functional-manifesto__number">01</div>

        <div className="functional-manifesto__content">
          <p className="functional-eyebrow">ANTES DE TREINAR</p>

          <h2>
            Seu corpo já está
            <span>fazendo alguma coisa.</span>
          </h2>

          <p className="functional-manifesto__text">
            Antes de aumentar a carga, repetir um exercício ou buscar
            determinado resultado, existe uma pergunta mais importante:
            <strong> como esse movimento está sendo realizado?</strong>
          </p>

          <p className="functional-manifesto__highlight">
            Treinar começa muito antes
            <span>do primeiro peso.</span>
          </p>
        </div>
      </section>

      <section className="functional-method">
        <div className="functional-method__header">
          <div className="functional-method__number">02</div>

          <div>
            <p className="functional-eyebrow">UMA LÓGICA DE TREINAMENTO</p>

            <h2>
              Movimento antes
              <span>de complexidade.</span>
            </h2>
          </div>
        </div>

        <div className="functional-method__system">
          <div className="functional-method__connector" />

          <article className="functional-method__step">
            <span>01</span>

            <div className="functional-method__step-content">
              <small>OBSERVAR</small>

              <h3>O que está acontecendo?</h3>

              <p>
                Perceber como o corpo organiza o movimento antes de tentar
                modificá-lo.
              </p>
            </div>
          </article>

          <article className="functional-method__step">
            <span>02</span>

            <div className="functional-method__step-content">
              <small>ENTENDER</small>

              <h3>Por que está acontecendo?</h3>

              <p>
                Compreender a relação entre corpo, movimento e demanda do
                exercício.
              </p>
            </div>
          </article>

          <article className="functional-method__step">
            <span>03</span>

            <div className="functional-method__step-content">
              <small>CONTROLAR</small>

              <h3>Você consegue conduzir?</h3>

              <p>
                Desenvolver consciência e controle antes de simplesmente
                adicionar complexidade.
              </p>
            </div>
          </article>

          <article className="functional-method__step">
            <span>04</span>

            <div className="functional-method__step-content">
              <small>DESENVOLVER</small>

              <h3>Agora podemos progredir.</h3>

              <p>
                Utilizar o treinamento para desenvolver capacidades de maneira
                mais consciente.
              </p>
            </div>
          </article>

          <article className="functional-method__step functional-method__step--final">
            <span>05</span>

            <div className="functional-method__step-content">
              <small>TREINAR</small>

              <h3>O exercício passa a ter propósito.</h3>

              <p>
                O movimento deixa de ser apenas execução e passa a fazer parte
                de uma estratégia de desenvolvimento.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="functional-principles">
        <div className="functional-principles__intro">
          <div className="functional-principles__number">03</div>

          <div>
            <p className="functional-eyebrow">PRINCÍPIOS</p>

            <h2>
              Não é sobre fazer
              <span>mais. É fazer melhor.</span>
            </h2>
          </div>
        </div>

        <div className="functional-principles__grid">
          <article>
            <span>01</span>
            <h3>Consciência</h3>
            <p>Perceber o próprio corpo durante a execução do movimento.</p>
          </article>

          <article>
            <span>02</span>
            <h3>Controle</h3>
            <p>Desenvolver capacidade de conduzir o movimento com intenção.</p>
          </article>

          <article>
            <span>03</span>
            <h3>Qualidade</h3>
            <p>
              Valorizar a execução antes de simplesmente acumular repetições.
            </p>
          </article>
        </div>
      </section>

      <section className="functional-training">
        <div className="functional-training__number">04</div>

        <div className="functional-training__content">
          <p className="functional-eyebrow">TREINAMENTO FUNCIONAL</p>

          <h2>
            Funcional para quem?
            <span>Para a vida.</span>
          </h2>

          <p className="functional-training__description">
            O treinamento funcional parte da ideia de desenvolver capacidades
            que possam fazer sentido para o corpo e para as demandas que ele
            encontra.
          </p>

          <div className="functional-training__topics">
            {product.topics.map((topic, index) => (
              <div key={topic} className="functional-training__topic">
                <span>{String(index + 1).padStart(2, "0")}</span>

                <strong>{topic}</strong>

                <span aria-hidden="true">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="functional-audience">
        <div className="functional-audience__header">
          <div className="functional-audience__number">05</div>

          <div>
            <p className="functional-eyebrow">PARA QUEM É</p>

            <h2>
              Para quem quer
              <span>treinar com consciência.</span>
            </h2>
          </div>
        </div>

        <div className="functional-audience__list">
          {product.audience.map((item, index) => (
            <div key={item} className="functional-audience__item">
              <span>{String(index + 1).padStart(2, "0")}</span>

              <p>{item}</p>

              <span aria-hidden="true">+</span>
            </div>
          ))}
        </div>
      </section>

      <section className="functional-product">
        <div className="functional-product__visual">
          <div className="functional-product__structure">
            <span>01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
            <span>05</span>
          </div>

          <div className="functional-product__title">
            <small>TREINO FUNCIONAL</small>

            <strong>
              Comece pelo
              <span>movimento.</span>
            </strong>
          </div>

          <span className="functional-product__format">E-BOOK DIGITAL</span>
        </div>

        <div className="functional-product__information">
          <p className="functional-eyebrow">{product.status}</p>

          <h2>
            Um ponto de partida
            <span>para treinar melhor.</span>
          </h2>

          <p>{product.shortDescription}</p>

          <div className="functional-product__details">
            <div>
              <span>Formato</span>
              <strong>{product.format}</strong>
            </div>

            <div>
              <span>Status</span>
              <strong>{product.status}</strong>
            </div>

            <div>
              <span>Investimento</span>
              <strong>{product.price ?? "A definir"}</strong>
            </div>
          </div>

          <span className="functional-product__button">
            {product.ctaLabel}
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </section>

      <section className="functional-final">
        <div className="functional-final__number">06</div>

        <div className="functional-final__content">
          <p className="functional-eyebrow">COMECE PELO MOVIMENTO</p>

          <h2>
            Treinar não começa
            <span>quando você pega um peso.</span>
          </h2>

          <p>Começa quando você entende o que seu corpo está fazendo.</p>

          <Link to="/conteudos" className="functional-final__link">
            Explorar outros conteúdos
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="functional-disclaimer">
        <p>
          Este material possui caráter educativo e não substitui avaliação,
          diagnóstico ou acompanhamento individualizado de um profissional
          habilitado.
        </p>
      </section>
    </main>
  );
}
