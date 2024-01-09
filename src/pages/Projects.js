import React from 'react';
import styled from 'styled-components';
import Global from '../components/global.js';

// Assuming you have an array of project details
const projects = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://example.com/project1',
  },
  {
    title: 'Project 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://example.com/project2',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <Container>
      <Global />
      <ProjectsTitle>My Projects</ProjectsTitle>
      <ProjectsList>
        {projects.map((project, index) => (
          <ProjectItem key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </ProjectLink>
          </ProjectItem>
        ))}
      </ProjectsList>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ProjectsTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const ProjectsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  margin-bottom: 30px;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  margin-bottom: 15px;
`;

const ProjectLink = styled.a`
  color: #007bff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default Projects;
