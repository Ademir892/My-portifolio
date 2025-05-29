import { useState, useEffect } from "react";
import iconFacebook from "./../../../assets/icons8-facebook-64.svg";
import iconInstagram from "./../../../assets/icons8-instagram-64.svg";
import iconLinkedin from "./../../../assets/icons8-linkedin-64.svg";
import iconWhats from "./../../../assets/icons8-whatsapp (1).svg";
import iconGitHub from "./../../../assets/icons8-github.svg";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const year = new Date().getFullYear(); 
  
  const userPart = "contato";
  const domainPart = "ademir_dev_mentorphysical.com";
  const finalEmailDisplay = `${userPart}@${domainPart}`;
  const actualEmailForMailto = "ademirtraesel@hotmail.com";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer>
      <p className="footer-font-color">&copy; {year} Todos os direitos reservados.</p>
      <nav className="nav-footer">
        <div className="links-footer">
          <Link to="/termos">Termos e Privacidade</Link>
        </div>
      </nav>
      <div className="mp-container socials-media">
        <a href="https://www.facebook.com/ademir.traesel" target="_blank" rel="noopener noreferrer">
          <img src={iconFacebook} alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/ademir_dev_mentorphysical?igsh=dTA2c2t4aHBqNHA3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={iconInstagram} alt="Instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/ademir-marmitt-traesel-63bb20221/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={iconLinkedin} alt="LinkedIn" />
        </a>
        <a
          href="https://wa.me/5551997923275?text=Olá! Gostaria de mais informações."
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={iconWhats} alt="WhatsApp" />
        </a>
        <a href="https://github.com/Ademir892" target="_blank" rel="noopener noreferrer">
          <img src={iconGitHub} alt="GitHub" />
        </a>
      </div>
      <p className="footer-font-color">
        Entre em contato:{" "}
        <a href={`mailto:${actualEmailForMailto}`}>{finalEmailDisplay}</a>
      </p>

      <button
        className={showScrollButton ? "show" : ""}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Voltar ao topo
      </button>
    </footer>
  );
}
