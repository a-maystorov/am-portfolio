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
    </section>
  );
};

export default Projects;
