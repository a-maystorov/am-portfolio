import '../styles/About/About.css';

const About = () => {
  return (
    <section className="About" id="About">
      <header>
        <h2>About me</h2>
        <p>
          In this section, you will find more information about me, what I do,
          and my current skills in terms of programming and technology
        </p>
      </header>
      <main>
        <article className="about__personal-profile">
          <h3>Get to know me!</h3>
          <p>
            Hello, my name is Alkin Maystorov. I am a <strong>Front-End</strong>{' '}
            focused <strong>Web Developer</strong>, knowledgeable in backend
            technologies and services such as <strong>Node</strong> and{' '}
            <strong>Firebase</strong>. I love building <strong>Websites</strong>{' '}
            and <strong>Web Applications</strong> using contrasting web
            technologies and solving problems for different niches and
            industries using the power of technology. Check out some of my work
            in the <strong>Projects</strong> section.
          </p>
          <p>
            <strong>Clean code</strong> and the room for never-ending{' '}
            <strong>improvement</strong> excite me and keep me wanting to learn
            more. I aim to find a role as an junior web dev and work together
            with a team that I can get along with to grow the company name.
          </p>
          <p>
            I would love to hear from you, whether it's a project,{' '}
            <strong>job</strong> opportunity, or just a chat. All of my projects
            can be found on my Github, and feel free to <strong>contact</strong>{' '}
            me.
          </p>
          <a href="#Contact" className="btn-contact">
            Contact
          </a>
        </article>
        <article className="about__skills">
          <h3>My Skills</h3>
          <div className="skills">
            <span className="skills__skill">HTML</span>
            <span className="skills__skill">CSS</span>
            <span className="skills__skill">JavaScript</span>
            <span className="skills__skill">React</span>
            <span className="skills__skill">SASS</span>
            <span className="skills__skill">GIT</span>
            <span className="skills__skill">Github</span>
            <span className="skills__skill">Responsive Design</span>
            <span className="skills__skill">Figma</span>
            <span className="skills__skill">Node Basics</span>
            <span className="skills__skill">Express Basics</span>
            <span className="skills__skill">MongoDB Basics</span>
            <span className="skills__skill">Firebase Basics</span>
            <span className="skills__skill">TDD Basics</span>
            <span className="skills__skill">TypeScript Basics</span>
          </div>
        </article>
      </main>
      <footer>
        <div className="triangle">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M1200 0L0 0 892.25 114.72 1200 0z"
              className="shape-fill"></path>
          </svg>
        </div>
      </footer>
    </section>
  );
};

export default About;
