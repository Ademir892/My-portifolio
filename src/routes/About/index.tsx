import "./styles.css";
import imgAvatar from "./../../../assets/my-avatar.jpg"
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="profile">
                    <img
                        src={imgAvatar}
                        alt="Minha Foto"
                        className="profileImage"
                    />
                    <h1 className="name">Ademir Marmitt Traesel</h1>
                    <p className="role">Programador e Educador Físico</p>
                </div>

                <div className="content">
                    <h2 className="title">Sobre Mim</h2>
                    <p>
                        Olá! Meu nome é Ademir Marmitt Traesel e sou apaixonado por programação e
                        educação física. Minha jornada na tecnologia começou há 2 anos em 2022
                        e desde então venho desenvolvendo projetos como aplicativos
                        web, sistemas interativos e ferramentas de automação. Tenho
                        experiência com tecnologias como <strong>React</strong>,{" "}
                        <strong>TypeScript</strong>, <strong>CSS</strong>, <strong>Java/JavaScript</strong>, <strong>Python</strong> e <strong>C#</strong>.
                    </p>

                    <p>
                        Além de programador, também sou educador físico e acredito na
                        importância do equilíbrio entre mente e corpo. Minha missão é
                        combinar conhecimento técnico e práticas saudáveis para melhorar a
                        vida das pessoas.
                    </p>

                    <h2 className="title">Tecnologias de Desenvolvimento</h2>
                    <ul className="skills">
                        <li>✔️ Desenvolvimento Frontend com React e TypeScript</li>
                        <li>✔️ Desenvolvimento Backend com Node.js e Express</li>
                        <li>✔️ Gerenciamento de Estado com Redux</li>
                        <li>✔️ Criação de interfaces responsivas com Tailwind CSS e Material-UI</li>
                        <li>✔️ Manipulação do DOM e otimização de desempenho com React Hooks</li>
                        <li>✔️ Estilização com CSS Modules e Styled-Components</li>
                        <li>✔️ APIs RESTful e Integração com serviços como GitHub</li>
                        <li>✔️ Noções básicas de design UX/UI e prototipagem com Figma</li>
                        <li>✔️ Banco de dados Relacionais MySQL</li>
                        <li>✔️ Desenvolvimento Backend com C# e .NET Framework</li>
                        <li>✔️ Utilização do Entity Framework para mapeamento objeto-relacional (ORM)</li>
                        <li>✔️ Configuração de pipelines de CI/CD básicos com GitHub Actions</li>
                    </ul>
                    <h2 className="title">Educador Físico</h2>
                    <ul className="skills">
                        <li>✔️ Treinamento Individual e Personalizado</li>
                        <li>✔️ Avaliação Física e Desenvolvimento de Planos de Treinamento</li>
                        <li>✔️ Treinamento Especializado para Comorbidades</li>
                        <li>✔️ Treinamento funcional e reabilitação</li>
                        <li>✔️ Desenvolvimento de programas para diferentes faixas etárias</li>
                        <li>✔️ Nutrição esportiva básica para acompanhamento complementar</li>
                    </ul>

                    <h2 className="title">Contato</h2>
                    <p>
                        Quer saber mais ou colaborar em um projeto? Me encontre nas redes
                        sociais ou envie um e-mail para {"ademirtraesel@hotmail.com "}
                        <a href="mailto:ademirtraesel@hotmail.com " className="link">
                            contato@ademir.com.br
                        </a>
                        .
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}