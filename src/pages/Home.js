import React, { useState, useEffect } from 'react';
import Global from '../components/global';
import styled from 'styled-components';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { AiFillGithub } from 'react-icons/ai';

function Home() {
  const studentRoles = [
    '// Software Engineer',
    '// Creative Freelancer',
    '// Project Enthusiast',
  ];

  const [currentStudentIndex, setCurrentStudentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentStudentIndex((prevIndex) => (prevIndex + 1) % studentRoles.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="base">
      <Global />
      <Main>
        <Content>
          <Intro>
            <Title>
              <h1>Paula</h1>
              <h1 style={{ color: '#FCD864' }}>Ervasti</h1>
            </Title>
            <Student>
              <SlidingText>{studentRoles[currentStudentIndex]}</SlidingText>
            </Student>
            <Contact>
              <IconContainer href="mailto:ervastipaula@gmail.com">
                <MdOutlineEmail />
              </IconContainer>
              <IconContainer href="https://www.linkedin.com/in/paula-ervasti-23b268258/">
                <CiLinkedin />
              </IconContainer>
              <IconContainer href="https://github.com/Plufin">
                <AiFillGithub />
              </IconContainer>
            </Contact>
          </Intro>
          <Picture>
            <Profile src={require('../components/Resources/profile.png')} alt="Profile" />
          </Picture>
        </Content>
      </Main>
    </div>
  );
}

const Main = styled.div`
padding-left: 10%;
flex: 1;
display: flex;
align-items: center;
padding-bottom: 100px;

  @media (max-width: 768px) {
    padding-left: 5%;
    padding-right: 5%;
    flex-direction: column;
    align-items: center;
    padding-bottom: 0px;
  }
`;

const Content = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
justify-content: flex-start;
background-color: #47358c40;
height: 500px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding-bottom: 50px;
  }
`;

const Intro = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding-left: 60px;
height: 100%;
max-width: 550px;
min-width: 350px;

  @media (max-width: 768px) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  height: 100%;
  max-width: 100%;
  text-align: center;
  align-items: center;
`;

const Picture = styled.div`
flex: 1;
display: flex;
justify-content: flex-start;

  @media (max-width: 768px) {
  justify-content: center;
  margin-top: 20px;
`;

const Profile = styled.img`
width: 100%;
max-width: 800px;

  @media (max-width: 768px) {
  max-width: 100%;
`;

const Contact = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
padding-bottom: 20px;

  @media (max-width: 768px) {
  justify-content: center;
`;

const IconContainer = styled.a`
  color: #e2eff2;
  margin-right: 10px;
  font-size: 40px;

  &:hover {
    color: #bdaeff;
    cursor: pointer;
  }
`;

const Title = styled.div`
  padding-top: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 20px;

  h1 {

    font-size: 80px;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 60px;
      justify-content: center;
    }
  }
`;

const Student = styled.div`
  padding-bottom: 25px;
  flex: 1;
  max-width: 350px;
`;

const SlidingText = styled.h2`
  overflow: hidden;
  animation: bounce 5s infinite;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  @keyframes bounce {
    0%, 25% {
      transform: translateY(0);
      opacity: 0;
      visibility: hidden;
    }
    50% {
      transform: translateY(-100%);
      opacity: 1;
      visibility: visible;
    }
    90%, 100% {
      transform: translateY(0);
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export default Home;
