import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

import "./styles.css";

type FormValues = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

type FormStatus = "idle" | "success" | "error";

export function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const serviceID = "service_4ej0xm4";
    const templateID = "template_5xmb5pi";
    const publicKey = "amcRpFdmhcKDDOfsA";

    setFormStatus("idle");

    try {
      await emailjs.send(serviceID, templateID, data, publicKey);

      setFormStatus("success");
      reset();
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);

      setFormStatus("error");
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__container">
          <div>
            <span className="contact-hero__eyebrow">Contato</span>

            <h1 className="contact-hero__title">
              Vamos construir
              <span> alguma coisa?</span>
            </h1>
          </div>

          <p className="contact-hero__description">
            Projetos, oportunidades, tecnologia ou simplesmente uma boa conversa
            sobre problemas interessantes para resolver.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-content__container">
          <aside className="contact-info">
            <div>
              <span className="contact-info__eyebrow">Onde me encontrar</span>

              <h2 className="contact-info__title">
                Uma conversa pode ser o começo.
              </h2>

              <p className="contact-info__description">
                Se você tem uma oportunidade, projeto, problema técnico ou ideia
                que acredita que vale explorar, pode me chamar.
              </p>
            </div>

            <div className="contact-info__links">
              <a
                href="https://www.linkedin.com/in/ademir-marmitt-traesel-63bb20221/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info__link"
              >
                <div>
                  <span className="contact-info__link-label">LinkedIn</span>

                  <span className="contact-info__link-description">
                    Perfil profissional
                  </span>
                </div>

                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://github.com/Ademir892"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info__link"
              >
                <div>
                  <span className="contact-info__link-label">GitHub</span>

                  <span className="contact-info__link-description">
                    Código e projetos
                  </span>
                </div>

                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://wa.me/5551997923275?text=Olá!%20Gostaria%20de%20conversar."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info__link"
              >
                <div>
                  <span className="contact-info__link-label">WhatsApp</span>

                  <span className="contact-info__link-description">
                    Contato direto
                  </span>
                </div>

                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="contact-info__availability">
              <span
                className="contact-info__availability-dot"
                aria-hidden="true"
              />

              <div>
                <strong>Aberto a oportunidades</strong>

                <span>Software, tecnologia e projetos interessantes.</span>
              </div>
            </div>
          </aside>

          <div className="contact-form-wrapper">
            <div className="contact-form-wrapper__header">
              <span>Envie uma mensagem</span>

              <span>Todos os campos com * são obrigatórios</span>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="contact-form__field">
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
                  <p className="contact-form__error" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="contact-form__row">
                <div className="contact-form__field">
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
                    <p className="contact-form__error" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="contact-form__field">
                  <label htmlFor="phone">
                    Telefone
                    <span> opcional</span>
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="(51) 99999-9999"
                    aria-invalid={errors.phone ? "true" : "false"}
                    {...register("phone", {
                      pattern: {
                        value: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
                        message: "Informe um telefone válido.",
                      },
                    })}
                  />

                  {errors.phone && (
                    <p className="contact-form__error" role="alert">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="contact-form__field">
                <label htmlFor="message">Mensagem *</label>

                <textarea
                  id="message"
                  rows={7}
                  placeholder="Me conte sobre a ideia, projeto ou oportunidade..."
                  aria-invalid={errors.message ? "true" : "false"}
                  {...register("message", {
                    required: "Por favor, escreva uma mensagem.",
                    minLength: {
                      value: 10,
                      message:
                        "A mensagem precisa ter pelo menos 10 caracteres.",
                    },
                  })}
                />

                {errors.message && (
                  <p className="contact-form__error" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {formStatus === "success" && (
                <div
                  className="contact-form__feedback contact-form__feedback--success"
                  role="status"
                >
                  <span aria-hidden="true">✓</span>

                  <div>
                    <strong>Mensagem enviada.</strong>

                    <p>Obrigado pelo contato. Sua mensagem chegou por aqui.</p>
                  </div>
                </div>
              )}

              {formStatus === "error" && (
                <div
                  className="contact-form__feedback contact-form__feedback--error"
                  role="alert"
                >
                  <span aria-hidden="true">!</span>

                  <div>
                    <strong>Não foi possível enviar.</strong>

                    <p>
                      Tente novamente ou utilize um dos canais de contato ao
                      lado.
                    </p>
                  </div>
                </div>
              )}

              <div className="contact-form__footer">
                <p>
                  Ao enviar, seus dados serão usados apenas para responder ao
                  contato.
                </p>

                <button
                  type="submit"
                  className="contact-form__submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensagem"}

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
