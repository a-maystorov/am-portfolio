import '../styles/Contact/Contact.css';

const Contact = () => {
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
          <form action="#" className="contact__form" method="post">
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
            </div>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
        </div>
      </main>
    </section>
  );
};

export default Contact;
