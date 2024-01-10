import React, { useEffect, useRef } from 'react';
import Global from '../components/global';
import styled from 'styled-components';

function About() {
  return (
    <div className="base">
      <Global />
      <Header>
        <Title>
          <h2>SUMMARY</h2>
          <h2>OF THIS SECTION</h2>
        </Title>
      </Header>
      <Content>
        <Box>
          <Right>
            <Thumbnail src={require('../components/Resources/Digital/hex.jpg')} alt="Hex" />
            <Text>
              <h2>Introduction</h2>
              <p>Hello there! I'm [Your Name], a passionate software developer with a love for turning lines of code into meaningful solutions. My journey in the world of technology has been both exciting and rewarding, and I'm thrilled to share a bit of my story with you.</p>
            </Text>
          </Right>
          <BottomRight />
        </Box>
        <Box>
          <Left>
            <Text>
              <h2>Professional Background</h2>
              <p>I hold a [Your Degree] in [Your Field] and have gained valuable experience working in [Your Previous Companies or Projects]. From designing efficient algorithms to collaborating on cross-functional teams, my professional journey has equipped me with a robust skill set in [Key Technologies/Languages].</p>
            </Text>
            <Thumbnail src={require('../components/Resources/Digital/fish.jpg')} alt="Fish" />
          </Left>
          <BottomLeft />
        </Box>
        <Box>
          <Right>
            <Thumbnail src={require('../components/Resources/Digital/knot.jpg')} alt="Knot" />
            <Text>
              <h2>Work Philosophy</h2>
              <p>In my approach to software development, I believe in the power of collaboration, continuous learning, and a touch of creativity. My philosophy is rooted in writing clean, scalable code while fostering a positive team environment. I'm driven by the thrill of solving complex problems and delivering solutions that make a real impact.</p>
            </Text>
          </Right>
          <BottomRight />
        </Box>
        <Box>
          <Left>
            <Text>
              <h2>Passions and Interests</h2>
              <p>Beyond the lines of code, you'll find me exploring my passions and interests. Whether it's diving into the latest tech trends, contributing to open-source projects, or enjoying the great outdoors, I believe in maintaining a balance between work and life. Let's chat about [One or Two Specific Interests] over a cup of coffee!</p>
            </Text>
            <Thumbnail src={require('../components/Resources/Digital/cave.jpg')} alt="Cave" />
          </Left>
          <BottomLeft />
        </Box>
      </Content>
    </div>
  );
}

const Header = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-top: 50px;
  max-height: 250px;

  @media (max-width: 768px) {
    padding-left: 0px;
  }
`;

const Title = styled.div`
  border-bottom: 1px solid #FCD864;
  min-width: 150px;
  max-width: 350px;

  @media (max-width: 768px) {
    margin-bottom: 150px;
    padding-left: 5%;
    border-bottom: 1px solid #FCD864;
    max-width: 100%;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: visible;
  justify-content: center;
`;

const Bottom = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  height: 70px;
  background-color: #47358C40;
  border: 100px 0px 0px 0px #FCD864; 
  box-shadow: 0 4px 2px -2px #FCD864;

  @media (max-width: 768px) {
    background-color: #47358C00;
    box-shadow: 0 4px 2px -2px #FCD86400;
`;

const Left = styled.div`
  margin-top: 150px;
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  max-height: 300px;
  overflow: visible;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 150px;
  }
`;

const BottomLeft = styled(Bottom)`
  margin-right: 7%;
`;

const BottomRight = styled(Bottom)`
  margin-left: 7%;
`;

const Right = styled.div`
  margin-top: 150px;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  max-height: 300px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 150px;
  }
`;

const Thumbnail = styled.img`
  margin: 20px;
  padding-top: 0px;
  z-index: 10;
  width: 100%;
  max-width: 400px;
  min-width: 150px;

  @media (max-width: 768px) {
    margin: 5%;
    height: 400px;
    width: 400px;
    object-fit: cover;
    border-radius: 8px;
    border-bottom: 2px solid #FCD864;
  }
`;

const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 700px;
  min-width: 150px;

  h2 {
    color: #FCD864;
    font-size: 30px;
    font-weight: 400;
    padding-bottom: 20px;
  }

  @media (max-width: 768px) {
    align-items: flex-start;

    p {
      text-align: justify;
    }
  }
`;

export default About;
