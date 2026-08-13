import { Link } from "react-router-dom";

import "./styles.css";

export default function ContactCTA() {
  return (
    <section className="contact-cta" aria-labelledby="contact-cta-title">
      <div className="contact-cta__container">
        <div className="contact-cta__content">
          <span className="contact-cta__eyebrow">Próximo passo</span>

          <h2 id="contact-cta-title" className="contact-cta__title">
            Tem um problema interessante
            <span> para resolver?</span>
          </h2>

          <p className="contact-cta__description">
            Estou sempre interessado em projetos, oportunidades e conversas onde
            tecnologia, engenharia e resolução de problemas possam criar algo
            útil.
          </p>
        </div>

        <div className="contact-cta__actions">
          <Link to="/contact" className="contact-cta__button">
            Entrar em contato
            <span aria-hidden="true">→</span>
          </Link>

          <a
            href="https://github.com/Ademir892"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-cta__secondary-link"
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
