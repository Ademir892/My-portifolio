import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

import "./styles.css";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  needs: string[];
  currentTools: string;
  currentProblem: string;
  solutionAwareness: string;
  projectDetails?: string;
};

type FormStatus = "idle" | "success" | "error";

const needOptions = [
  "Automatizar um processo",
  "Criar um sistema",
  "Melhorar um sistema existente",
  "Integrar ferramentas",
  "Organizar um processo",
  "Transformar uma ideia em solução",
  "Ainda não sei exatamente",
];

export default function Systems() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const selectedNeeds =
      data.needs && data.needs.length > 0
        ? data.needs.join(", ")
        : "Não informado";

    const templateData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      source: "Site — Sistemas & Automação",
      subject: "Novo briefing de Sistemas & Automação",
      message: data.currentProblem,
      details: `
O que está buscando:
${selectedNeeds}

Ferramentas utilizadas atualmente:
${data.currentTools || "Não informado"}

Conhecimento sobre a solução:
${data.solutionAwareness}

Detalhes adicionais:
${data.projectDetails || "Não informado"}
      `.trim(),
    };

    setFormStatus("idle");

    try {
      await emailjs.send(serviceID, templateID, templateData, publicKey);

      setFormStatus("success");
      reset();
    } catch (error) {
      console.error("Erro ao enviar briefing:", error);

      setFormStatus("error");
    }
  };

  return (
    <div className="systems-page">
      <section className="systems-hero">
        <div className="systems-hero__container">
          <Link to="/consultoria" className="systems-hero__back">
            ← Voltar para Consultoria
          </Link>

          <span className="systems-hero__eyebrow">SISTEMAS & AUTOMAÇÃO</span>

          <h1 className="systems-hero__title">
            Nem todo problema
            <span> precisa de um sistema novo.</span>
          </h1>

          <p className="systems-hero__description">
            Às vezes, o problema está no processo. Antes de pensar em
            tecnologia, eu procuro entender o que realmente precisa ser
            melhorado.
          </p>
        </div>
      </section>

      <section className="systems-areas">
        <div className="systems-areas__container">
          <div className="systems-section-heading">
            <span className="systems-section-heading__eyebrow">
              COMO POSSO AJUDAR
            </span>

            <h2>
              Primeiro entendemos o problema.
              <span> Depois pensamos na solução.</span>
            </h2>
          </div>

          <div className="systems-areas__grid">
            <article className="systems-area">
              <span className="systems-area__number">01</span>

              <h3>Processos</h3>

              <p>
                Identificar gargalos, tarefas repetitivas, etapas desnecessárias
                e oportunidades de melhoria.
              </p>
            </article>

            <article className="systems-area">
              <span className="systems-area__number">02</span>

              <h3>Sistemas</h3>

              <p>
                Transformar uma necessidade real em uma solução digital adequada
                ao problema.
              </p>
            </article>

            <article className="systems-area">
              <span className="systems-area__number">03</span>

              <h3>Automação</h3>

              <p>
                Reduzir tarefas manuais e fazer a tecnologia trabalhar a favor
                do processo.
              </p>
            </article>

            <article className="systems-area">
              <span className="systems-area__number">04</span>

              <h3>Integrações</h3>

              <p>
                Conectar ferramentas e informações para evitar retrabalho e
                melhorar o fluxo de dados.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="systems-principle">
        <div className="systems-principle__container">
          <span className="systems-principle__eyebrow">MEU PRINCÍPIO</span>

          <blockquote>
            “Antes de construir alguma coisa, precisamos entender se ela
            realmente precisa ser construída.”
          </blockquote>

          <p>
            Tecnologia é uma ferramenta. O objetivo é resolver o problema da
            forma mais simples, eficiente e sustentável possível.
          </p>
        </div>
      </section>
      <section className="systems-cta">
        <div className="systems-cta__container">
          <span className="systems-cta__eyebrow">PRÓXIMO PASSO</span>

          <h2>
            Primeiro entendemos.
            <span> Depois construímos.</span>
          </h2>

          <p>
            Se você tem um problema que parece precisar de tecnologia, me
            explique o contexto. A solução começa por entender a situação.
          </p>

          <a href="#briefing" className="systems-cta__button">
            Quero explicar meu problema
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="systems-briefing" id="briefing">
        <div className="systems-briefing__container">
          <div className="systems-briefing__intro">
            <span className="systems-briefing__eyebrow">PRIMEIRO</span>

            <h2>
              Tem um problema
              <span> para resolver?</span>
            </h2>

            <p>
              Me conte um pouco sobre ele. Você não precisa saber exatamente
              qual tecnologia precisa ou como resolver. Essa parte podemos
              descobrir juntos.
            </p>
          </div>

          <div className="systems-form-wrapper">
            <div className="systems-form-wrapper__header">
              <span>Briefing inicial</span>

              <span>Todos os campos com * são obrigatórios</span>
            </div>

            <form
              className="systems-form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="systems-form__field">
                <label htmlFor="name">Nome *</label>

                <input
                  id="name"
                  type="text"
                  placeholder="Como você se chama?"
                  aria-invalid={errors.name ? "true" : "false"}
                  {...register("name", {
                    required: "Por favor, informe seu nome.",
                  })}
                />

                {errors.name && (
                  <p className="systems-form__error" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="systems-form__row">
                <div className="systems-form__field">
                  <label htmlFor="email">E-mail *</label>

                  <input
                    id="email"
                    type="email"
                    placeholder="voce@email.com"
                    aria-invalid={errors.email ? "true" : "false"}
                    {...register("email", {
                      required: "Por favor, informe seu e-mail.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Informe um e-mail válido.",
                      },
                    })}
                  />

                  {errors.email && (
                    <p className="systems-form__error" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="systems-form__field">
                  <label htmlFor="phone">WhatsApp *</label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="(51) 99999-9999"
                    aria-invalid={errors.phone ? "true" : "false"}
                    {...register("phone", {
                      required: "Por favor, informe seu WhatsApp.",
                      pattern: {
                        value: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
                        message: "Informe um telefone válido.",
                      },
                    })}
                  />

                  {errors.phone && (
                    <p className="systems-form__error" role="alert">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <fieldset className="systems-form__field systems-form__checkbox-group">
                <legend>O que você está buscando? *</legend>

                <div className="systems-form__checkboxes">
                  {needOptions.map((option) => (
                    <label key={option} className="systems-form__checkbox">
                      <input
                        type="checkbox"
                        value={option}
                        {...register("needs", {
                          required: "Selecione pelo menos uma opção.",
                        })}
                      />

                      <span>{option}</span>
                    </label>
                  ))}
                </div>

                {errors.needs && (
                  <p className="systems-form__error" role="alert">
                    {errors.needs.message}
                  </p>
                )}
              </fieldset>

              <div className="systems-form__field">
                <label htmlFor="currentTools">
                  Quais ferramentas você utiliza hoje?
                </label>

                <input
                  id="currentTools"
                  type="text"
                  placeholder="Ex.: Excel, WhatsApp, sistema interno..."
                  {...register("currentTools")}
                />
              </div>

              <div className="systems-form__field">
                <label htmlFor="currentProblem">
                  Onde está o problema hoje? *
                </label>

                <textarea
                  id="currentProblem"
                  rows={6}
                  placeholder="Explique o que está acontecendo, onde existe dificuldade ou o que está tomando tempo..."
                  aria-invalid={errors.currentProblem ? "true" : "false"}
                  {...register("currentProblem", {
                    required: "Por favor, descreva o problema.",
                    minLength: {
                      value: 20,
                      message: "Conte um pouco mais sobre o problema.",
                    },
                  })}
                />

                {errors.currentProblem && (
                  <p className="systems-form__error" role="alert">
                    {errors.currentProblem.message}
                  </p>
                )}
              </div>

              <fieldset className="systems-form__field systems-form__radio-group">
                <legend>Você já sabe qual solução precisa? *</legend>

                <div className="systems-form__radios">
                  <label className="systems-form__radio">
                    <input
                      type="radio"
                      value="Sim, já sei mais ou menos o que quero"
                      {...register("solutionAwareness", {
                        required: "Selecione uma das opções.",
                      })}
                    />

                    <span>Sim, já sei mais ou menos o que quero</span>
                  </label>

                  <label className="systems-form__radio">
                    <input
                      type="radio"
                      value="Tenho uma ideia, mas preciso entender como fazer"
                      {...register("solutionAwareness", {
                        required: "Selecione uma das opções.",
                      })}
                    />

                    <span>
                      Tenho uma ideia, mas preciso entender como fazer
                    </span>
                  </label>

                  <label className="systems-form__radio">
                    <input
                      type="radio"
                      value="Não, quero ajuda para identificar a melhor solução"
                      {...register("solutionAwareness", {
                        required: "Selecione uma das opções.",
                      })}
                    />

                    <span>
                      Não, quero ajuda para identificar a melhor solução
                    </span>
                  </label>
                </div>

                {errors.solutionAwareness && (
                  <p className="systems-form__error" role="alert">
                    {errors.solutionAwareness.message}
                  </p>
                )}
              </fieldset>

              <div className="systems-form__field">
                <label htmlFor="projectDetails">
                  Quer contar mais alguma coisa?
                </label>

                <textarea
                  id="projectDetails"
                  rows={5}
                  placeholder="Contexto, expectativas, prazos ou qualquer outra informação que possa ajudar..."
                  {...register("projectDetails")}
                />
              </div>

              {formStatus === "success" && (
                <div
                  className="systems-form__feedback systems-form__feedback--success"
                  role="status"
                >
                  <span aria-hidden="true">✓</span>

                  <div>
                    <strong>Briefing enviado.</strong>

                    <p>
                      Recebi as informações. Agora podemos conversar sobre o
                      problema e entender o melhor caminho.
                    </p>
                  </div>
                </div>
              )}

              {formStatus === "error" && (
                <div
                  className="systems-form__feedback systems-form__feedback--error"
                  role="alert"
                >
                  <span aria-hidden="true">!</span>

                  <div>
                    <strong>Não foi possível enviar.</strong>

                    <p>
                      Tente novamente ou entre em contato diretamente pelo
                      WhatsApp.
                    </p>
                  </div>
                </div>
              )}

              <div className="systems-form__footer">
                <p>
                  Ao enviar, seus dados serão usados apenas para entender sua
                  necessidade e entrar em contato.
                </p>

                <button
                  type="submit"
                  className="systems-form__submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar briefing"}

                  {!isSubmitting && <span aria-hidden="true">→</span>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
