import '../styles/Projects/Projects.css';
import ProjectsCarousel from './ProjectsCarousel/ProjectsCarousel';

const Projects = () => {
  return (
    <section className="Projects" id="Projects">
      <header>
        <h2>Projects</h2>
        <p>
          In this section, you will find some of the personal projects that I
          created with a preview image for the project, links to the repository
          and live website, along with the tools used to build them
        </p>
      </header>
      <ProjectsCarousel />
      <footer>
        <div className="tilt">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"></path>
          </svg>
        </div>
      </footer>
    </section>
  );
};

export default Projects;
