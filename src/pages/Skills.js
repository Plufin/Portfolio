import React from 'react';
import styled from 'styled-components';
import Global from '../components/global.js';

// Assuming you have an array of skills
const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'HTML',
  'CSS',
  'Styled Components',
  // Add more skills as needed
];

const Skills = () => {
  return (
    <Container>
      <Global />
      <SkillsTitle>My Skills</SkillsTitle>
      <SkillsList>
        {skills.map((skill, index) => (
          <SkillItem key={index}>{skill}</SkillItem>
        ))}
      </SkillsList>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const SkillsTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SkillItem = styled.li`
  background-color: #007bff;
  color: #ffffff;
  padding: 8px 16px;
  margin: 8px;
  border-radius: 5px;
`;

export default Skills;
