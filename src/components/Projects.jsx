import '../styles/Projects/Projects.css';
import ProjectsCarousel from './ProjectsCarousel/ProjectsCarousel';

const Projects = () => {
  return (
    <section className="Projects" id="Projects">
      <header>
        <h2>Projects</h2>
        <p>
          In this section, you will find some of the personal projects that I
          created with information about the project and the technologies used
          to build them
        </p>
      </header>
      <ProjectsCarousel />
    </section>
  );
};

export default Projects;
