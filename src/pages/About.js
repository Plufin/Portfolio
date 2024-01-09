import React from 'react';
import styled from 'styled-components';
import Global from '../components/global.js';

const About = () => {
  return (
    <Container>
      <Global />
      <AboutTitle>About Me</AboutTitle>
      <AboutContent>
        <p>
          Hello! My name is [Your Name], and I am a passionate [your profession/hobbies].
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </AboutContent>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const AboutTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const AboutContent = styled.div`
  line-height: 1.6;

  p {
    margin-bottom: 15px;
  }
`;

export default About;
