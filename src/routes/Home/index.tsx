
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import "./styles.css";



export default function Home() {
    return (
        <>
            <Header />
            <div className="home-container">
                <header className="hero-section">
                    <div className="hero-content">
                        <h1>Bem-vindo ao Meu Portfólio</h1>
                        <p>
                            Sou Ademir, Desenvolvedor Frontend/Backend e Educador Físico, apaixonado por tecnologia e bem-estar.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/projects" className="btn-primary">
                                Meus Projetos
                            </Link>
                            <Link to="/about" className="btn-secondary">
                                Sobre Mim
                            </Link>
                        </div>
                    </div>
                </header>

                <main className="sections">
                    <section className="about-preview">
                        <h2>Sobre Mim</h2>
                        <p>
                            Desenvolvedor com experiência em React, TypeScript e C#, além de Educador Físico. Acredito no equilíbrio entre tecnologia e saúde.
                        </p>
                        <Link to="/about" className="btn-link">
                            Saiba Mais
                        </Link>
                    </section>

                    <section className="projects-preview">
                        <h2>Meus Projetos</h2>
                        <p>
                            Confira alguns dos projetos que desenvolvi, aplicando tecnologias como React, APIs RESTful, JavaScript e C#.
                        </p>
                        <Link to="/projects" className="btn-link">
                            Ver Projetos
                        </Link>
                    </section>

                    <section className="contact-preview">
                        <h2>Entre em Contato</h2>
                        <p>
                            Interessado em trabalhar comigo ou simplesmente quer conversar? Vamos nos conectar!
                        </p>
                        <Link to="/contact" className="btn-link">
                            Contato
                        </Link>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}