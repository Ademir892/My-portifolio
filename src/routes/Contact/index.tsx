import { useForm, SubmitHandler } from 'react-hook-form';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import emailjs from "@emailjs/browser";
import "./styles.css";


type FormValues = {
    name: string;
    email: string;
    message: string;
};

export function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormValues>();



    const onSubmit: SubmitHandler<FormValues> = (data) => {
        const serviceID = "service_4ej0xm4";
        const templateID = "template_5xmb5pi";
        const publicKey = "amcRpFdmhcKDDOfsA";
    
        emailjs
          .send(serviceID, templateID, data, publicKey)
          .then(() => {
            alert("Mensagem enviada com sucesso! 🚀");
            reset();
          })
          .catch((error) => {
            console.error("Erro ao enviar mensagem:", error);
            alert("Ocorreu um erro. Por favor, tente novamente.");
          });
      };


    return (
        <>
            <Header />
            <div className="contact-container">
                <h1>Contato</h1>
                <p>Entre em contato comigo preenchendo o formulário abaixo.</p>

                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <label htmlFor="name">Nome</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Seu Nome"
                            {...register('name', { required: 'Por favor, insira seu nome.' })}
                        />
                        {errors.name && <p className="form-error">{errors.name.message}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="seuemail@email.com"
                            {...register('email', {
                                required: 'Por favor, insira um email válido.',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Formato de email inválido.',
                                },
                            })}
                        />
                        {errors.email && <p className="form-error">{errors.email.message}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Mensagem</label>
                        <textarea
                            id="message"
                            placeholder="Digite sua mensagem"
                            rows={4}
                            {...register('message', {
                                required: 'Por favor, insira sua mensagem.',
                                minLength: {
                                    value: 10,
                                    message: 'A mensagem deve ter pelo menos 10 caracteres.',
                                },
                            })}
                        />
                        {errors.message && <p className="form-error">{errors.message.message}</p>}
                    </div>

                    <button type="submit" className="btn-primary" disabled={isSubmitting}>
                        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                    </button>
                </form>
            </div>
            <Footer />
        </>

    );
}