import { Link } from "react-router-dom";

import { contentProducts } from "../../../data/contentProducts";

import "./styles.css";

const product = contentProducts.find(
  (item) => item.slug === "postura-no-dia-a-dia",
);

export default function Postura() {
  if (!product) {
    return null;
  }

  return (
    <main className="posture-page">
      <section className="posture-hero">
        <div className="posture-hero__top">
          <Link to="/conteudos" className="posture-hero__back">
            <span aria-hidden="true">←</span>
            Conteúdos
          </Link>

          <span className="posture-hero__number">01 / 03</span>
        </div>

        <div className="posture-hero__content">
          <p className="posture-hero__category">{product.category}</p>

          <h1>
            Postura
            <span>no dia a dia.</span>
          </h1>

          <div className="posture-hero__statement">
            <p>
              E se você não precisasse simplesmente
              <strong> corrigir</strong> sua postura?
            </p>

            <p>
              E se precisasse primeiro
              <strong> entender</strong> por que seu corpo se posiciona como se
              posiciona?
            </p>
          </div>
        </div>

        <div className="posture-hero__bottom">
          <span>ENTENDER ANTES DE CORRIGIR</span>

          <span className="posture-hero__scroll">
            Role para explorar
            <span aria-hidden="true">↓</span>
          </span>
        </div>
      </section>

      <section className="posture-introduction">
        <div className="posture-introduction__index">01</div>

        <div className="posture-introduction__content">
          <p className="posture-eyebrow">O PROBLEMA</p>

          <h2>
            Postura não é uma
            <span>fotografia.</span>
          </h2>

          <p className="posture-introduction__text">{product.introduction}</p>

          <p className="posture-introduction__highlight">
            O corpo não existe parado.
            <span>Ele existe em movimento.</span>
          </p>
        </div>
      </section>

      <section className="posture-observation">
        <div className="posture-observation__heading">
          <div className="posture-observation__index">02</div>

          <div>
            <p className="posture-eyebrow">OBSERVE SUA ROTINA</p>

            <h2>
              A postura acontece
              <span>na vida real.</span>
            </h2>
          </div>
        </div>

        <div className="posture-observation__timeline">
          <div className="posture-observation__line" />

          <article className="posture-observation__item">
            <span>01</span>

            <div>
              <strong>SENTADO</strong>
              <p>
                Como seu corpo se organiza quando você permanece sentado por
                longos períodos?
              </p>
            </div>
          </article>

          <article className="posture-observation__item">
            <span>02</span>

            <div>
              <strong>EM PÉ</strong>
              <p>O que acontece quando você simplesmente permanece parado?</p>
            </div>
          </article>

          <article className="posture-observation__item">
            <span>03</span>

            <div>
              <strong>CAMINHANDO</strong>
              <p>Como seu corpo se organiza quando precisa se deslocar?</p>
            </div>
          </article>

          <article className="posture-observation__item">
            <span>04</span>

            <div>
              <strong>TRABALHANDO</strong>
              <p>Quais posições aparecem repetidamente durante sua rotina?</p>
            </div>
          </article>

          <article className="posture-observation__item">
            <span>05</span>

            <div>
              <strong>TREINANDO</strong>
              <p>
                O que muda quando seu corpo precisa produzir força e controle?
              </p>
            </div>
          </article>

          <article className="posture-observation__item">
            <span>06</span>

            <div>
              <strong>DESCANSANDO</strong>
              <p>
                Até nos momentos de descanso, o corpo continua encontrando
                posições.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="posture-process">
        <div className="posture-process__intro">
          <div className="posture-process__index">03</div>

          <div>
            <p className="posture-eyebrow">UMA OUTRA FORMA DE OLHAR</p>

            <h2>
              Antes de mudar,
              <span>observe.</span>
            </h2>
          </div>
        </div>

        <div className="posture-process__steps">
          <article>
            <span>01</span>
            <h3>Observar</h3>
            <p>
              Perceber como seu corpo realmente se comporta durante a rotina.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Entender</h3>
            <p>
              Relacionar posições, movimentos e contexto em vez de buscar uma
              posição perfeita.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Questionar</h3>
            <p>
              Identificar hábitos e padrões que podem estar presentes no seu
              dia.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Aplicar</h3>
            <p>
              Transformar conhecimento em uma percepção mais consciente do
              próprio movimento.
            </p>
          </article>
        </div>
      </section>

      <section className="posture-material">
        <div className="posture-material__index">04</div>

        <div className="posture-material__content">
          <p className="posture-eyebrow">O MATERIAL</p>

          <h2>
            Conhecimento para
            <span>olhar diferente.</span>
          </h2>

          <div className="posture-material__topics">
            {product.topics.map((topic, index) => (
              <div key={topic} className="posture-material__topic">
                <span>{String(index + 1).padStart(2, "0")}</span>

                <strong>{topic}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="posture-audience">
        <div className="posture-audience__heading">
          <div className="posture-audience__index">05</div>

          <div>
            <p className="posture-eyebrow">PARA QUEM É</p>

            <h2>
              Para quem quer
              <span>entender melhor.</span>
            </h2>
          </div>
        </div>

        <div className="posture-audience__list">
          {product.audience.map((item, index) => (
            <div key={item} className="posture-audience__item">
              <span>{String(index + 1).padStart(2, "0")}</span>

              <p>{item}</p>

              <span aria-hidden="true">+</span>
            </div>
          ))}
        </div>
      </section>

      <section className="posture-product">
        <div className="posture-product__visual">
          <div className="posture-product__placeholder">
            <span>E-BOOK</span>

            <strong>
              Postura
              <small>no dia a dia.</small>
            </strong>

            <span>{product.category}</span>
          </div>
        </div>

        <div className="posture-product__information">
          <p className="posture-eyebrow">{product.status}</p>

          <h2>
            Um material para
            <span>começar a observar.</span>
          </h2>

          <p>{product.shortDescription}</p>

          <div className="posture-product__details">
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

          <span className="posture-product__button">
            {product.ctaLabel}
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </section>

      <section className="posture-final">
        <p className="posture-eyebrow">ENTENDER ANTES DE CORRIGIR</p>

        <h2>
          Seu corpo não precisa
          <span>de uma fórmula pronta.</span>
        </h2>

        <p>
          Precisa ser observado, compreendido e desenvolvido de acordo com as
          demandas da vida real.
        </p>

        <Link to="/conteudos" className="posture-final__link">
          Explorar outros conteúdos
          <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="posture-disclaimer">
        <p>
          Este material possui caráter educativo e não substitui avaliação,
          diagnóstico ou acompanhamento individualizado de um profissional
          habilitado.
        </p>
      </section>
    </main>
  );
}
