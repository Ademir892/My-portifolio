import { Link } from "react-router-dom";

import { contentProducts } from "../../../data/contentProducts";

import "./styles.css";

const product = contentProducts.find(
  (item) => item.slug === "mobilidade-para-a-vida-real",
);

export default function Mobilidade() {
  if (!product) {
    return null;
  }

  return (
    <main className="mobility-page">
      <section className="mobility-hero">
        <div className="mobility-hero__top">
          <Link to="/conteudos" className="mobility-hero__back">
            <span aria-hidden="true">←</span>
            Conteúdos
          </Link>

          <span className="mobility-hero__number">02 / 03</span>
        </div>

        <div className="mobility-hero__visual" aria-hidden="true">
          <div className="mobility-hero__orbit mobility-hero__orbit--large" />
          <div className="mobility-hero__orbit mobility-hero__orbit--medium" />
          <div className="mobility-hero__orbit mobility-hero__orbit--small" />
          <div className="mobility-hero__point" />
        </div>

        <div className="mobility-hero__content">
          <p className="mobility-hero__category">{product.category}</p>

          <h1>
            Mobilidade
            <span>para a vida real.</span>
          </h1>

          <p className="mobility-hero__statement">
            Mobilidade não é simplesmente
            <strong>chegar mais longe.</strong>
          </p>

          <p className="mobility-hero__statement mobility-hero__statement--secondary">
            É ter mais possibilidades
            <strong>para se mover.</strong>
          </p>
        </div>

        <div className="mobility-hero__bottom">
          <span>AMPLITUDE + CONTROLE + POSSIBILIDADE</span>

          <span className="mobility-hero__scroll">
            Explorar
            <span aria-hidden="true">↓</span>
          </span>
        </div>
      </section>

      <section className="mobility-question">
        <div className="mobility-question__number">01</div>

        <div className="mobility-question__content">
          <p className="mobility-eyebrow">UMA PERGUNTA SIMPLES</p>

          <h2>
            Você consegue chegar até lá.
            <span>Mas consegue controlar o caminho?</span>
          </h2>

          <p>
            A mobilidade não está apenas relacionada ao quanto uma articulação
            consegue se mover. Existe também a capacidade de controlar, explorar
            e utilizar esse movimento quando ele é necessário.
          </p>
        </div>
      </section>

      <section className="mobility-spectrum">
        <div className="mobility-spectrum__heading">
          <div className="mobility-spectrum__number">02</div>

          <div>
            <p className="mobility-eyebrow">MAIS DO QUE AMPLITUDE</p>

            <h2>
              Movimento precisa de
              <span>espaço e controle.</span>
            </h2>
          </div>
        </div>

        <div className="mobility-spectrum__visual">
          <div className="mobility-spectrum__axis mobility-spectrum__axis--horizontal" />
          <div className="mobility-spectrum__axis mobility-spectrum__axis--vertical" />

          <div className="mobility-spectrum__circle mobility-spectrum__circle--outer">
            <span>AMPLITUDE</span>
          </div>

          <div className="mobility-spectrum__circle mobility-spectrum__circle--middle">
            <span>CONTROLE</span>
          </div>

          <div className="mobility-spectrum__circle mobility-spectrum__circle--inner">
            <span>MOVIMENTO</span>
          </div>

          <div className="mobility-spectrum__center">
            <span>+</span>
          </div>
        </div>
      </section>

      <section className="mobility-principles">
        <article className="mobility-principle">
          <span>01</span>

          <div>
            <p>AMPLITUDE</p>

            <h3>Quanto espaço o movimento possui?</h3>

            <span>
              Explorar possibilidades maiores de movimento faz parte da
              construção da mobilidade.
            </span>
          </div>
        </article>

        <article className="mobility-principle">
          <span>02</span>

          <div>
            <p>CONTROLE</p>

            <h3>Quanto desse espaço você consegue controlar?</h3>

            <span>
              Movimento sem controle não representa necessariamente uma
              capacidade útil para o corpo.
            </span>
          </div>
        </article>

        <article className="mobility-principle">
          <span>03</span>

          <div>
            <p>CONTEXTO</p>

            <h3>Quando esse movimento realmente precisa existir?</h3>

            <span>
              A mobilidade ganha sentido quando pode ser aplicada às demandas
              reais do movimento.
            </span>
          </div>
        </article>
      </section>

      <section className="mobility-real-life">
        <div className="mobility-real-life__intro">
          <div className="mobility-real-life__number">03</div>

          <div>
            <p className="mobility-eyebrow">VIDA REAL</p>

            <h2>
              O movimento não acontece
              <span>em uma sala perfeita.</span>
            </h2>
          </div>
        </div>

        <div className="mobility-real-life__track">
          <div className="mobility-real-life__track-line" />

          <div className="mobility-real-life__item">
            <span>01</span>
            <strong>AGACHAR</strong>
          </div>

          <div className="mobility-real-life__item">
            <span>02</span>
            <strong>ALCANÇAR</strong>
          </div>

          <div className="mobility-real-life__item">
            <span>03</span>
            <strong>GIRAR</strong>
          </div>

          <div className="mobility-real-life__item">
            <span>04</span>
            <strong>CAMINHAR</strong>
          </div>

          <div className="mobility-real-life__item">
            <span>05</span>
            <strong>TREINAR</strong>
          </div>
        </div>

        <p className="mobility-real-life__description">
          Por isso, desenvolver mobilidade não significa simplesmente acumular
          exercícios. Significa criar mais possibilidades para que o corpo
          consiga responder às demandas que encontra.
        </p>
      </section>

      <section className="mobility-material">
        <div className="mobility-material__number">04</div>

        <div className="mobility-material__content">
          <p className="mobility-eyebrow">O MATERIAL</p>

          <h2>
            Mobilidade que faz sentido
            <span>fora do treino.</span>
          </h2>

          <p className="mobility-material__description">
            {product.introduction}
          </p>

          <div className="mobility-material__topics">
            {product.topics.map((topic, index) => (
              <div key={topic} className="mobility-material__topic">
                <span>{String(index + 1).padStart(2, "0")}</span>

                <strong>{topic}</strong>

                <span aria-hidden="true">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mobility-audience">
        <div className="mobility-audience__heading">
          <div className="mobility-audience__number">05</div>

          <div>
            <p className="mobility-eyebrow">PARA QUEM É</p>

            <h2>
              Mais opções para
              <span>se movimentar.</span>
            </h2>
          </div>
        </div>

        <div className="mobility-audience__list">
          {product.audience.map((item, index) => (
            <div key={item} className="mobility-audience__item">
              <span>{String(index + 1).padStart(2, "0")}</span>

              <p>{item}</p>

              <span aria-hidden="true">+</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mobility-product">
        <div className="mobility-product__visual">
          <div className="mobility-product__placeholder">
            <div className="mobility-product__placeholder-orbit">
              <span />
              <span />
              <span />
            </div>

            <span>MOBILIDADE</span>

            <strong>
              Para a<small>vida real.</small>
            </strong>

            <span>E-BOOK DIGITAL</span>
          </div>
        </div>

        <div className="mobility-product__information">
          <p className="mobility-eyebrow">{product.status}</p>

          <h2>
            Um material para
            <span>ampliar possibilidades.</span>
          </h2>

          <p>{product.shortDescription}</p>

          <div className="mobility-product__details">
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

          <a
            href={product.checkoutUrl ?? "#"}
            className="mobility-product__button"
            target="_blank"
            rel="noreferrer"
          >
            {product.ctaLabel}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="mobility-final">
        <div className="mobility-final__visual" aria-hidden="true">
          <div />
          <div />
          <div />
          <span />
        </div>

        <div className="mobility-final__content">
          <p className="mobility-eyebrow">MOVIMENTO É POSSIBILIDADE</p>

          <h2>
            Seu corpo não precisa apenas
            <span>chegar mais longe.</span>
          </h2>

          <p>
            Precisa ter opções para explorar, controlar e utilizar o movimento
            quando a vida pedir.
          </p>

          <Link to="/conteudos" className="mobility-final__link">
            Explorar outros conteúdos
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="mobility-disclaimer">
        <p>
          Este material possui caráter educativo e não substitui avaliação,
          diagnóstico ou acompanhamento individualizado de um profissional
          habilitado.
        </p>
      </section>
    </main>
  );
}
