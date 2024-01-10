import React, { useEffect, useRef } from 'react';
import Global from '../components/global';
import NavBar from '../components/NavBar';
import styled from 'styled-components';

function Projects() {
  return (
    <div className="base">
      <Global />
      <Header>
        <Title>
          <h2>SELECTED DEV</h2>
          <h2>& ART PROJECTS</h2>
        </Title>
      </Header>
      <Content>
        <Box>
          <Left>
            <Text>
              <h2>TEXT 1</h2>
              <p>Donec ac felis accumsan, ultrices augue sit amet, vestibulum sapien. Donec in est non dolor dignissim luctus sit amet at turpis. Aliquam lacinia, magna vitae accumsan ultricies, mauris velit fringilla felis, sed cursus nisi nisi sit amet turpis. Nulla convallis orci a tincidunt elementum. Sed posuere mattis laoreet. </p>
            </Text>
            <Thumbnail src={require('../components/Resources/Digital/hex.jpg')} alt="Hex" />

          </Left>
        </Box>
        <Box>
          <Right>

            <Thumbnail src={require('../components/Resources/Digital/fish.jpg')} alt="Fish" />
            <Text>
              <h2>TEXT 2</h2>
              <p>Ut laoreet est et massa posuere scelerisque. Cras dui velit, interdum a nulla eget, fringilla elementum risus. Nulla est lectus, cursus nec vestibulum a, porta id tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc fermentum at nibh id pharetra. Phasellus vitae tellus dui.</p>
            </Text>
          </Right>
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
  padding-top: 100px;
  max-height: 250px;
  margin-bottom: 80px;
`;

const Title = styled.div`
  border-bottom: 1px solid #FCD864;
  min-width: 150px;
  max-width: 350px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`;

const Right = styled.div`
margin-left: 20%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px; /* Adjust padding as needed */
  background: #47358C40;
  height: 300px;
  margin-bottom: 80px;
`;

const Left = styled.div`
margin-right: 20%;
  flex: 1;
  display: flex;
  flex-direction: row
  justify-content: center;
  align-items: center;
  padding: 30px; /* Adjust padding as needed */
  background: #47358C40;
  height: 300px;
`;

const Thumbnail = styled.img`
  height: 400px;
  width: 400px;
  object-fit: cover;
  border-radius: 10px;
`;

const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5%;
  margin-right: 5%;

  h2 {
    font-size: 30px;
    font-family: Montserrat;
    text-align: left;
    color: #FCD864;
  }
  `;


export default Projects;