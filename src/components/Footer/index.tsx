import { Link } from "react-router-dom";

import "./styles.css";

const navigationLinks = [
  {
    label: "Início",
    path: "/",
  },
  {
    label: "Projetos",
    path: "/projects",
  },
  {
    label: "Sobre",
    path: "/about",
  },
  {
    label: "Contato",
    path: "/contact",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    url: "https://github.com/Ademir892",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/ademir-marmitt-traesel-63bb20221/",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link
              to="/"
              className="site-footer__name"
              aria-label="Ir para a página inicial"
            >
              Ademir Traesel
            </Link>

            <p className="site-footer__description">
              Engenharia, software e tecnologia aplicados à resolução de
              problemas reais.
            </p>
          </div>

          <div className="site-footer__navigation">
            <div className="site-footer__group">
              <span className="site-footer__group-title">Navegação</span>

              <nav
                className="site-footer__links"
                aria-label="Navegação do rodapé"
              >
                {navigationLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="site-footer__link"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="site-footer__group">
              <span className="site-footer__group-title">Redes</span>

              <div className="site-footer__links">
                {socialLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-footer__link"
                  >
                    {link.label}

                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="site-footer__group">
              <span className="site-footer__group-title">Informações</span>

              <div className="site-footer__links">
                <Link to="/termos" className="site-footer__link">
                  Termos & Privacidade
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {currentYear} Ademir Traesel</span>

          <span className="site-footer__signature">
            Construído com React + TypeScript
          </span>

          <a
            href="#top"
            className="site-footer__back-to-top"
            aria-label="Voltar ao início da página"
          >
            Voltar ao topo
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
