import { useForm, ValidationError } from '@formspree/react';
import '../styles/Contact/Contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm('xnqwzozw');
  if (state.succeeded) {
    return <p className="submit-success">Thank you for your submission!</p>;
  }

  return (
    <section className="Contact" id="Contact">
      <header>
        <h2>Contact</h2>
        <p>
          Feel free to contact me by submitting the form below, and I will get
          back to you as soon as possible
        </p>
      </header>
      <main>
        <div className="contact__form-container">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-field">
              <label htmlFor="name" className="contact__form-label">
                Name
              </label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                className="contact__form-input"
                name="name"
                id="name"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            <div className="contact__form-field">
              <label htmlFor="email" className="contact__form-label">
                Email
              </label>
              <input
                required
                placeholder="Enter Your Email"
                type="email"
                className="contact__form-input"
                name="email"
                id="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="contact__form-field">
              <label htmlFor="message" className="contact__form-label">
                Message
              </label>
              <textarea
                cols="30"
                rows="10"
                required
                placeholder="Enter Your Message"
                type="text"
                className="contact__form-input"
                name="message"
                id="message"
                spellCheck="false"></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              className="btn-submit"
              disabled={state.submitting}>
              Submit
            </button>
          </form>
        </div>
      </main>
    </section>
  );
};

export default Contact;
