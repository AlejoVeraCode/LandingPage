import '../../App.css'
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";

function Contact() {
  const [state, handleSubmit] = useForm("xjvdplgw");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setSubmitted(true);
    }
  }, [state]);

  if (submitted) {
    return (
      <div className="Container">
        <h1>Gracias por contactarnos</h1>
      </div>
    );
  }

  return (
    <div className="Container">
      <div className='ContainerForm'>
      <div className="ContainerFormContact">
        <div className="Contact">
          <h2>Contactame</h2>

          <form onSubmit={handleSubmit}>
            <div className="ContactForm"></div>
            <label htmlFor="email">Email:</label>
            <input className="email" id="email" type="email" name="email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <label htmlFor="message">Mensaje:</label>
            <textarea className="textarea" id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              className="SubmitBoton"
              disabled={state.submitting}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div></div>
  );
}

export default Contact;

// Contacto con envio de Email por formspree hacia mi E-mail
