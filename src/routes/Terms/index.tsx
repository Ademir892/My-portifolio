import { Link } from "react-router-dom";

import "./styles.css";

export function TermsAnsPrivacy() {
  return (
    <div className="terms-page">
      <section className="terms-hero">
        <div className="terms-hero__container">
          <div>
            <span className="terms-hero__eyebrow">Transparência</span>

            <h1 className="terms-hero__title">
              Termos &<span> Privacidade.</span>
            </h1>
          </div>

          <div className="terms-hero__summary">
            <p>
              Informações claras sobre o uso deste portfólio, seus conteúdos e
              os dados enviados por meio do formulário de contato.
            </p>

            <span className="terms-hero__updated">
              Última atualização • 13 de agosto de 2026
            </span>
          </div>
        </div>
      </section>

      <section className="terms-content">
        <div className="terms-content__container">
          <aside className="terms-navigation">
            <span className="terms-navigation__label">Neste documento</span>

            <nav
              className="terms-navigation__links"
              aria-label="Seções dos termos e política de privacidade"
            >
              <a href="#sobre">
                <span>01</span>
                Sobre este site
              </a>

              <a href="#conteudo">
                <span>02</span>
                Uso do conteúdo
              </a>

              <a href="#dados">
                <span>03</span>
                Dados pessoais
              </a>

              <a href="#servicos">
                <span>04</span>
                Serviços externos
              </a>

              <a href="#seguranca">
                <span>05</span>
                Segurança
              </a>

              <a href="#alteracoes">
                <span>06</span>
                Alterações e contato
              </a>
            </nav>
          </aside>

          <main className="terms-document">
            <section id="sobre" className="terms-section">
              <div className="terms-section__number">01</div>

              <div className="terms-section__content">
                <span className="terms-section__eyebrow">Introdução</span>

                <h2>Sobre este site</h2>

                <p>
                  Este site é o portfólio profissional de Ademir Traesel e tem
                  como objetivo apresentar informações sobre trajetória
                  profissional, conhecimentos, projetos e formas de contato.
                </p>

                <p>
                  Ao navegar pelo site, você concorda em utilizá-lo de forma
                  legítima e respeitosa, sem realizar atividades que possam
                  comprometer sua segurança, funcionamento ou disponibilidade.
                </p>
              </div>
            </section>

            <section id="conteudo" className="terms-section">
              <div className="terms-section__number">02</div>

              <div className="terms-section__content">
                <span className="terms-section__eyebrow">
                  Propriedade intelectual
                </span>

                <h2>Uso do conteúdo</h2>

                <p>
                  Textos, identidade visual, projetos autorais, elementos
                  gráficos e demais conteúdos produzidos especificamente para
                  este portfólio não devem ser reproduzidos ou utilizados
                  comercialmente sem autorização.
                </p>

                <p>
                  Projetos de software disponibilizados publicamente no GitHub
                  seguem as condições e licenças indicadas em seus respectivos
                  repositórios, quando houver.
                </p>

                <div className="terms-section__note">
                  <span>Em resumo</span>

                  <p>
                    Visualizar, estudar e conhecer os projetos é bem-vindo.
                    Reutilização e distribuição devem respeitar os direitos e
                    licenças correspondentes.
                  </p>
                </div>
              </div>
            </section>

            <section id="dados" className="terms-section">
              <div className="terms-section__number">03</div>

              <div className="terms-section__content">
                <span className="terms-section__eyebrow">Privacidade</span>

                <h2>Dados pessoais</h2>

                <p>
                  A principal coleta direta de informações pessoais neste
                  portfólio ocorre quando você decide enviar uma mensagem pelo
                  formulário de contato.
                </p>

                <div className="terms-data">
                  <div className="terms-data__item">
                    <span>Nome</span>

                    <p>
                      Utilizado para identificar quem está entrando em contato.
                    </p>
                  </div>

                  <div className="terms-data__item">
                    <span>E-mail</span>

                    <p>
                      Utilizado para possibilitar uma resposta à mensagem
                      enviada.
                    </p>
                  </div>

                  <div className="terms-data__item">
                    <span>Telefone</span>

                    <p>
                      Campo opcional utilizado apenas quando fornecido
                      voluntariamente.
                    </p>
                  </div>

                  <div className="terms-data__item">
                    <span>Mensagem</span>

                    <p>
                      Conteúdo informado voluntariamente para contextualizar o
                      contato.
                    </p>
                  </div>
                </div>

                <p>
                  Essas informações são utilizadas para receber, analisar e
                  responder ao contato realizado pelo próprio usuário.
                </p>
              </div>
            </section>

            <section id="servicos" className="terms-section">
              <div className="terms-section__number">04</div>

              <div className="terms-section__content">
                <span className="terms-section__eyebrow">Infraestrutura</span>

                <h2>Serviços externos</h2>

                <p>
                  Algumas funcionalidades do portfólio dependem de serviços
                  fornecidos por terceiros.
                </p>

                <div className="terms-services">
                  <div className="terms-services__item">
                    <div>
                      <strong>EmailJS</strong>

                      <span>Formulário de contato</span>
                    </div>

                    <p>
                      Responsável pela integração utilizada para encaminhar as
                      mensagens enviadas pelo formulário.
                    </p>
                  </div>

                  <div className="terms-services__item">
                    <div>
                      <strong>GitHub</strong>

                      <span>Projetos públicos</span>
                    </div>

                    <p>
                      Utilizado para disponibilizar código e carregar
                      informações públicas sobre alguns repositórios.
                    </p>
                  </div>

                  <div className="terms-services__item">
                    <div>
                      <strong>Netlify</strong>

                      <span>Hospedagem</span>
                    </div>

                    <p>
                      Plataforma utilizada para disponibilizar este portfólio na
                      internet.
                    </p>
                  </div>
                </div>

                <p>
                  Esses serviços possuem suas próprias políticas, condições de
                  uso e práticas de tratamento de dados.
                </p>
              </div>
            </section>

            <section id="seguranca" className="terms-section">
              <div className="terms-section__number">05</div>

              <div className="terms-section__content">
                <span className="terms-section__eyebrow">Proteção</span>

                <h2>Segurança e responsabilidade</h2>

                <p>
                  São adotadas práticas razoáveis para manter o portfólio e suas
                  integrações organizados e seguros. Entretanto, nenhum serviço
                  conectado à internet pode oferecer garantia absoluta de
                  segurança.
                </p>

                <p>
                  Evite incluir informações sensíveis, confidenciais ou
                  desnecessárias no campo de mensagem do formulário.
                </p>

                <div className="terms-section__note">
                  <span>Boa prática</span>

                  <p>
                    Utilize o formulário apenas com as informações necessárias
                    para iniciar a conversa.
                  </p>
                </div>
              </div>
            </section>

            <section id="alteracoes" className="terms-section">
              <div className="terms-section__number">06</div>

              <div className="terms-section__content">
                <span className="terms-section__eyebrow">Atualizações</span>

                <h2>Alterações e contato</h2>

                <p>
                  Estes termos podem ser atualizados quando houver mudanças
                  relevantes no portfólio, nas funcionalidades oferecidas ou na
                  forma como dados são tratados.
                </p>

                <p>
                  A data exibida no início desta página indica a revisão mais
                  recente do documento.
                </p>

                <div className="terms-section__contact">
                  <div>
                    <span>Ficou com alguma dúvida?</span>

                    <p>
                      Entre em contato para conversar sobre estes termos ou
                      sobre o tratamento das informações enviadas pelo site.
                    </p>
                  </div>

                  <Link to="/contact" className="terms-section__contact-link">
                    Entrar em contato
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </section>
          </main>
        </div>
      </section>
    </div>
  );
}
