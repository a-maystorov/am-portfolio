import Carousel from 'react-elastic-carousel';
import './styles.css';

const projects = [
  {
    id: 1,
    image:
      'https://github.com/SirDev97/SirDev97/blob/master/Projects/product-feedback-project.jpg?raw=true',
    description:
      'This project is a product feedback app where users can create, edit and delete suggestions for new features, ideas, etc.',
    live: 'https://sirdev97.github.io/product-feedback-app/',
    code: 'https://github.com/SirDev97/product-feedback-app',
  },

  {
    id: 2,
    image:
      'https://github.com/SirDev97/SirDev97/blob/master/Projects/clock-app-project.jpg?raw=true',
    description:
      'This project is a clock app that utilizes three different APIs to show the users current time, region, timezone, day of the week/year and generate a random programming quote on click.',
    live: 'https://sirdev97.github.io/clock-app/',
    code: 'https://github.com/SirDev97/clock-app',
  },

  {
    id: 3,
    image:
      'https://github.com/SirDev97/SirDev97/blob/master/Projects/rpsls-project.jpg?raw=true',
    description:
      'Rock Paper Scissors Lizard Spock is an enhancement of the original game we all know. In this iteration, you are playing against the house(computer), trying to reach the highest score you can. Have fun.',
    live: 'https://sirdev97.github.io/rock-paper-scissors-lizard-spock/',
    code: 'https://github.com/SirDev97/rock-paper-scissors-lizard-spock',
  },

  {
    id: 4,
    image:
      'https://github.com/SirDev97/SirDev97/blob/master/Projects/speedify-project.jpg?raw=true',
    description:
      'Speedify is a landing page build with high performance, best practices, accessibility, and SEO in mind. The website is fully responsive on all screen sizes.',
    live: 'https://sirdev97.github.io/speedify/',
    code: 'https://github.com/SirDev97/speedify',
  },
];

const ProjectsCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel itemsToShow={1}>
        {projects.map((project) => (
          <div key={project.id} className="project">
            <header>
              <img src={project.image} alt="project" />
            </header>
            <main>
              <p className="project-details">{project.description}</p>
            </main>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectsCarousel;
