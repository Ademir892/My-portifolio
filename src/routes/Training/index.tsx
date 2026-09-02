import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import emailjs from "@emailjs/browser";

import "./styles.css";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  plan: string;
  goal: string;
  customGoal?: string;
  experience: string;
  frequency: string;
  limitations?: string;
  contactPreference: string;
  message?: string;
};

type FormStatus = "idle" | "success" | "error";

const trainingGoals = [
  "Ganhar força",
  "Hipertrofia",
  "Emagrecimento",
  "Condicionamento físico",
  "Mobilidade",
  "Melhorar movimentos",
  "Performance",
  "Qualidade de vida",
  "Voltar a treinar",
];

const trainingPlans = [
  {
    number: "01",
    name: "Essencial",
    description:
      "Para quem busca um planejamento personalizado e consegue conduzir o processo com mais autonomia.",
    features: [
      "Avaliação inicial",
      "Treinamento personalizado",
      "Planejamento em PDF",
      "Orientações para execução",
      "Revisão periódica",
    ],
  },
  {
    number: "02",
    name: "Evolução",
    featured: true,
    description:
      "Para quem quer acompanhamento próximo, ajustes constantes e alguém acompanhando sua evolução.",
    features: [
      "Tudo do Essencial",
      "Acompanhamento semanal",
      "Ajustes do treinamento",
      "Feedback via WhatsApp",
      "Análise de vídeos",
    ],
  },
  {
    number: "03",
    name: "Performance",
    description:
      "Para quem busca um acompanhamento mais próximo e uma estratégia ainda mais individualizada.",
    features: [
      "Tudo do Evolução",
      "Análise detalhada dos movimentos",
      "Ajustes mais frequentes",
      "Videochamadas",
      "Acompanhamento próximo",
    ],
  },
];

export default function Training() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      plan: "",
      goal: "",
    },
  });

  useEffect(() => {
    const selectedPlan = searchParams.get("plano");

    if (
      selectedPlan &&
      trainingPlans.some((plan) => plan.name === selectedPlan)
    ) {
      setValue("plan", selectedPlan);
    }
  }, [searchParams, setValue]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TRAINING_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateData = {
      ...data,
      source: "Site — Treinamento Online",
      customGoal: data.customGoal || "Não informado",
      limitations: data.limitations || "Não informado",
      message: data.message || "Não informado",
    };

    setFormStatus("idle");

    try {
      await emailjs.send(serviceID, templateID, templateData, publicKey);

      setFormStatus("success");
      reset();
    } catch (error) {
      console.error("Erro ao enviar interesse:", error);

      setFormStatus("error");
    }
  };

  return (
    <main className="training">
      <section className="training__hero">
        <div className="training__hero-content">
          <p className="training__eyebrow">CONSULTORIA ONLINE</p>

          <h1 className="training__title">
            Você define o objetivo.
            <span> Eu explico o caminho.</span>
          </h1>

          <p className="training__description">
            Um treinamento pensado para você, seus objetivos e a sua realidade.
            Com acompanhamento, ajustes e uma coisa que considero fundamental:
            entender o porquê de cada escolha.
          </p>

          <div className="training__actions">
            <a href="#como-funciona" className="training__primary-action">
              Entender como funciona
            </a>

            <a href="#objetivos" className="training__secondary-action">
              Ver objetivos
            </a>
          </div>
        </div>

        <div className="training__philosophy">
          <span className="training__philosophy-line" />

          <p>
            “Eu não quero apenas dizer o que você deve fazer. Quero que você
            entenda o porquê.”
          </p>

          <span className="training__philosophy-author">— Ademir Traesel</span>
        </div>
      </section>

      <section
        id="objetivos"
        className="training__goals"
        aria-labelledby="training-goals-title"
      >
        <div className="training__section-heading">
          <p className="training__eyebrow">SEU OBJETIVO</p>

          <h2 id="training-goals-title">
            Você não precisa se encaixar em um objetivo pronto.
          </h2>

          <p>
            Cada pessoa começa de um lugar diferente. Por isso, o treinamento
            parte daquilo que você realmente quer alcançar.
          </p>
        </div>

        <div className="training__goals-grid">
          {trainingGoals.map((goal, index) => (
            <div className="training__goal" key={goal}>
              <span>{String(index + 1).padStart(2, "0")}</span>

              <strong>{goal}</strong>
            </div>
          ))}

          <div className="training__goal training__goal--custom">
            <span>+</span>

            <strong>Outro objetivo</strong>
          </div>
        </div>

        <p className="training__goals-note">
          Não encontrou o que procura? Você pode explicar seu objetivo com suas
          próprias palavras.
        </p>
      </section>

      <section
        id="como-funciona"
        className="training__intro"
        aria-labelledby="training-intro-title"
      >
        <p className="training__eyebrow">TREINAMENTO COM PROPÓSITO</p>

        <h2 id="training-intro-title">
          Pessoas diferentes precisam de caminhos diferentes.
        </h2>

        <div className="training__intro-content">
          <p>
            Você pode querer ganhar força, desenvolver massa muscular, melhorar
            seu condicionamento, voltar a treinar ou simplesmente se movimentar
            melhor.
          </p>

          <p>
            A consultoria começa entendendo onde você está, para onde quer ir e
            o que precisa ser construído para chegar lá.
          </p>
        </div>
      </section>

      <section
        className="training__steps"
        aria-labelledby="training-steps-title"
      >
        <div className="training__section-heading">
          <p className="training__eyebrow">O PROCESSO</p>

          <h2 id="training-steps-title">
            Um acompanhamento que evolui com você.
          </h2>
        </div>

        <div className="training__steps-list">
          <article className="training__step">
            <span>01</span>

            <div>
              <h3>Você me conta</h3>

              <p>
                Objetivos, rotina, experiência e tudo aquilo que pode ajudar a
                entender o seu momento.
              </p>
            </div>
          </article>

          <article className="training__step">
            <span>02</span>

            <div>
              <h3>Eu analiso</h3>

              <p>
                A partir das informações, definimos o que precisa ser trabalhado
                e como podemos começar.
              </p>
            </div>
          </article>

          <article className="training__step">
            <span>03</span>

            <div>
              <h3>Construímos o treino</h3>

              <p>
                Você recebe um planejamento personalizado e entende a lógica por
                trás das escolhas.
              </p>
            </div>
          </article>

          <article className="training__step">
            <span>04</span>

            <div>
              <h3>Acompanhamos</h3>

              <p>
                Conversamos semanalmente para entender o que está funcionando, o
                que precisa mudar e como continuar evoluindo.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section
        id="planos"
        className="training__plans"
        aria-labelledby="training-plans-title"
      >
        <div className="training__section-heading">
          <p className="training__eyebrow">ESCOLHA SEU ACOMPANHAMENTO</p>

          <h2 id="training-plans-title">
            O nível de acompanhamento muda.
            <span> O cuidado com o seu processo, não.</span>
          </h2>

          <p>
            Três formas de começar. A escolha depende do quanto você quer de
            acompanhamento durante sua jornada.
          </p>
        </div>

        <div className="training__plans-grid">
          {trainingPlans.map((plan) => (
            <article
              className={
                plan.featured
                  ? "training__plan training__plan--featured"
                  : "training__plan"
              }
              key={plan.name}
            >
              <div className="training__plan-header">
                <div className="training__plan-number">{plan.number}</div>

                {plan.featured && (
                  <span className="training__plan-badge">Mais procurado</span>
                )}
              </div>

              <div>
                <h3>{plan.name}</h3>

                <p className="training__plan-description">{plan.description}</p>
              </div>

              <ul className="training__plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={`?plano=${encodeURIComponent(plan.name)}#interesse`}
                className="training__plan-action"
              >
                Tenho interesse
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>

        <p className="training__plans-note">
          Não sabe qual escolher? Sem problema. Podemos conversar e entender
          qual formato faz mais sentido para o seu momento.
        </p>
      </section>

      <section
        id="interesse"
        className="training__interest"
        aria-labelledby="training-interest-title"
      >
        <div className="training__section-heading">
          <p className="training__eyebrow">PRÓXIMO PASSO</p>

          <h2 id="training-interest-title">
            Vamos entender o que você precisa.
          </h2>

          <p>
            Antes de começar, quero entender seu momento, seus objetivos e o que
            você espera desse acompanhamento.
          </p>
        </div>

        <form
          className="training__interest-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="training__interest-grid">
            <div className="training__field">
              <label htmlFor="name">Nome *</label>

              <input
                id="name"
                type="text"
                placeholder="Como você se chama?"
                {...register("name", {
                  required: "Informe seu nome.",
                })}
              />

              {errors.name && (
                <p className="training__field-error">{errors.name.message}</p>
              )}
            </div>

            <div className="training__field">
              <label htmlFor="phone">WhatsApp *</label>

              <input
                id="phone"
                type="tel"
                placeholder="(51) 99999-9999"
                {...register("phone", {
                  required: "Informe seu WhatsApp.",
                })}
              />

              {errors.phone && (
                <p className="training__field-error">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="training__field">
            <label htmlFor="email">E-mail *</label>

            <input
              id="email"
              type="email"
              placeholder="voce@email.com"
              {...register("email", {
                required: "Informe seu e-mail.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Informe um e-mail válido.",
                },
              })}
            />

            {errors.email && (
              <p className="training__field-error">{errors.email.message}</p>
            )}
          </div>

          <div className="training__field">
            <label htmlFor="plan">Plano de interesse *</label>

            <select
              id="plan"
              {...register("plan", {
                required: "Escolha um plano.",
              })}
            >
              <option value="">Selecione um plano</option>
              <option value="Essencial">Essencial</option>
              <option value="Evolução">Evolução</option>
              <option value="Performance">Performance</option>
              <option value="Ainda não sei">Ainda não sei</option>
            </select>

            {errors.plan && (
              <p className="training__field-error">{errors.plan.message}</p>
            )}
          </div>

          <div className="training__field">
            <label htmlFor="goal">Qual é o seu principal objetivo? *</label>

            <select
              id="goal"
              {...register("goal", {
                required: "Escolha seu objetivo.",
              })}
            >
              <option value="">Selecione seu objetivo</option>

              {trainingGoals.map((goal) => (
                <option key={goal} value={goal}>
                  {goal}
                </option>
              ))}

              <option value="Outro objetivo">Outro objetivo</option>
            </select>

            {errors.goal && (
              <p className="training__field-error">{errors.goal.message}</p>
            )}
          </div>

          <div className="training__field">
            <label htmlFor="customGoal">
              Se escolheu outro, conte um pouco sobre seu objetivo
              <span> opcional</span>
            </label>

            <textarea
              id="customGoal"
              rows={4}
              placeholder="Quero conseguir..."
              {...register("customGoal")}
            />
          </div>

          <div className="training__field">
            <label htmlFor="experience">
              Como está sua experiência com treinamento? *
            </label>

            <select
              id="experience"
              {...register("experience", {
                required: "Selecione uma opção.",
              })}
            >
              <option value="">Selecione uma opção</option>
              <option value="Estou começando">Estou começando</option>
              <option value="Já treino">Já treino</option>
              <option value="Já treinei, mas parei">
                Já treinei, mas parei
              </option>
              <option value="Tenho bastante experiência">
                Tenho bastante experiência
              </option>
            </select>

            {errors.experience && (
              <p className="training__field-error">
                {errors.experience.message}
              </p>
            )}
          </div>

          <div className="training__field">
            <label htmlFor="frequency">
              Quantas vezes por semana pretende treinar? *
            </label>

            <select
              id="frequency"
              {...register("frequency", {
                required: "Selecione uma opção.",
              })}
            >
              <option value="">Selecione uma opção</option>
              <option value="2x por semana">2x por semana</option>
              <option value="3x por semana">3x por semana</option>
              <option value="4x por semana">4x por semana</option>
              <option value="5x ou mais">5x ou mais</option>
              <option value="Ainda não sei">Ainda não sei</option>
            </select>

            {errors.frequency && (
              <p className="training__field-error">
                {errors.frequency.message}
              </p>
            )}
          </div>

          <div className="training__field">
            <label htmlFor="limitations">
              Existe alguma limitação ou algo que eu deveria saber?
              <span> opcional</span>
            </label>

            <textarea
              id="limitations"
              rows={4}
              placeholder="Conte algo que possa ser importante para entender seu momento."
              {...register("limitations")}
            />
          </div>

          <div className="training__field">
            <label htmlFor="contactPreference">
              Como prefere que eu entre em contato? *
            </label>

            <select
              id="contactPreference"
              {...register("contactPreference", {
                required: "Escolha uma preferência.",
              })}
            >
              <option value="">Selecione uma opção</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="E-mail">E-mail</option>
              <option value="Tanto faz">Tanto faz</option>
            </select>

            {errors.contactPreference && (
              <p className="training__field-error">
                {errors.contactPreference.message}
              </p>
            )}
          </div>

          <div className="training__field">
            <label htmlFor="message">
              Quer me contar mais alguma coisa?
              <span> opcional</span>
            </label>

            <textarea
              id="message"
              rows={6}
              placeholder="Pode escrever livremente. Quanto mais eu entender seu momento, melhor."
              {...register("message")}
            />
          </div>

          {formStatus === "success" && (
            <div className="training__form-feedback training__form-feedback--success">
              <strong>Solicitação enviada.</strong>

              <p>
                Recebi suas informações. Vou analisar tudo e entrar em contato.
              </p>
            </div>
          )}

          {formStatus === "error" && (
            <div className="training__form-feedback training__form-feedback--error">
              <strong>Não foi possível enviar.</strong>

              <p>
                Tente novamente ou entre em contato diretamente pelo WhatsApp.
              </p>
            </div>
          )}

          <div className="training__form-footer">
            <p>
              Suas informações serão usadas apenas para entender seu objetivo e
              entrar em contato sobre a consultoria.
            </p>

            <button
              type="submit"
              className="training__form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Quero conversar"}

              {!isSubmitting && <span aria-hidden="true">→</span>}
            </button>
          </div>
        </form>
      </section>

      <section className="training__back">
        <Link to="/consultoria">← Voltar para Consultoria</Link>
      </section>
    </main>
  );
}
