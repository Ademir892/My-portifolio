import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./styles.css";

export function TermsAnsPrivacy(){
    return (
        <>
            <Header />
            <div className="terms-container">
                <h1>Termos de Uso e Política de Privacidade</h1>

                <section className="terms-section">
                    <h2>Termos de Uso</h2>
                    <p>
                        Ao acessar este site, você concorda em cumprir os Termos de Uso, 
                        todas as leis e regulamentos aplicáveis, e reconhece que é responsável 
                        por cumprir todas as leis locais aplicáveis. Se você não concordar 
                        com algum desses termos, está proibido de usar ou acessar este site.
                    </p>
                    <p>
                        Os conteúdos do site são protegidos pelas leis de direitos autorais 
                        e marcas registradas aplicáveis.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>Política de Privacidade</h2>
                    <p>
                        Sua privacidade é importante para nós. Esta política explica como 
                        coletamos, usamos e protegemos as informações pessoais fornecidas 
                        ao usar este site.
                    </p>
                    <h3>Informações que Coletamos</h3>
                    <ul>
                        <li>Dados fornecidos voluntariamente, como nome, e-mail e mensagens enviadas por meio de formulários.</li>
                        <li>Informações de navegação, como endereço IP, tipo de navegador e páginas visitadas.</li>
                    </ul>
                    <h3>Uso das Informações</h3>
                    <p>
                        Usamos as informações coletadas para melhorar sua experiência no site, 
                        responder às suas solicitações e, ocasionalmente, enviar comunicações relevantes.
                    </p>
                    <h3>Proteção de Dados</h3>
                    <p>
                        Implementamos medidas de segurança para proteger suas informações pessoais, 
                        mas não podemos garantir a segurança total devido à natureza da internet.
                    </p>
                </section>

                <section className="contact-section">
                    <h2>Entre em Contato</h2>
                    <p>
                        Se você tiver dúvidas sobre nossos Termos de Uso ou Política de Privacidade, 
                        entre em contato por meio da nossa <a href="/contact">página de contato</a>.
                    </p>
                </section>
            </div>
            <Footer />
        </>
    );
}