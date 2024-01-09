import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Global from '../components/global.js';

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
    }, 6000);

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
              <h1 style={{ color: '#FCD864', marginBottom: '30px' }}>Ervasti</h1>
            </Title>
            <Student>
              <SlidingText>{studentRoles[currentStudentIndex]}</SlidingText>
            </Student>
            <Contact>
            </Contact>
          </Intro>
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
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #47358c40;
  height: 500px;
`;

const Intro = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 60px;
  max-width: 900px;
  min-width: 350px;
`;

const Picture = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

const Profile = styled.img`
  width: 100%;
  max-width: 800px;
  min-width: 550px;
`;


const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const IconContainer = styled.span`
color: #E2EFF2;
  margin-right: 10px;
  font-size: 40px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 30px;
`;

const Student = styled.div`
  padding-bottom: 25px;
  flex: 1;
  max-width: 350px;
  `;

const SlidingText = styled.h2`
  overflow: hidden;
  animation: bounce 6s infinite;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

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