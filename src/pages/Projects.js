import React from 'react';

const Projects = () => {
  const projectsList = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      githubLink: 'https://github.com/yourusername/project1',
      liveDemoLink: 'https://yourusername.github.io/project1',
    },
    {
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      githubLink: 'https://github.com/yourusername/project2',
      liveDemoLink: 'https://yourusername.github.io/project2',
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h2>My Projects</h2>
      {projectsList.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>
            GitHub: <a href={project.githubLink} target="_blank" rel="noopener noreferrer">{project.githubLink}</a>
          </p>
          <p>
            Live Demo: <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">{project.liveDemoLink}</a>
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Projects;