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
            <Thumbnail src={require('../components/Resources/hex.jpg')} alt="Hex" />
            <Text>
              <h2>TEXT 1</h2>
              <p>Donec ac felis accumsan, ultrices augue sit amet, vestibulum sapien. Donec in est non dolor dignissim luctus sit amet at turpis. Aliquam lacinia, magna vitae accumsan ultricies, mauris velit fringilla felis, sed cursus nisi nisi sit amet turpis. Nulla convallis orci a tincidunt elementum. Sed posuere mattis laoreet. </p>
            </Text>
          </Right>
          <BottomRight />
        </Box>
        <Box>
          <Left>
            <Text>
              <h2>TEXT 2</h2>
              <p>Ut laoreet est et massa posuere scelerisque. Cras dui velit, interdum a nulla eget, fringilla elementum risus. Nulla est lectus, cursus nec vestibulum a, porta id tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc fermentum at nibh id pharetra. Phasellus vitae tellus dui.</p>
            </Text>
            <Thumbnail src={require('../components/Resources/fish.jpg')} alt="Fish" />
          </Left>
          <BottomLeft />
        </Box>
        <Box>
          <Right>
            <Thumbnail src={require('../components/Resources/knot.jpg')} alt="Knot" />
            <Text>
              <h2>TEXT 3</h2>
              <p>Cras dui velit, interdum a nulla eget, fringilla elementum risus. Nulla est lectus, cursus nec vestibulum a, porta id tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc fermentum at nibh id pharetra. Phasellus vitae tellus dui.</p>
            </Text>
          </Right>
          <BottomRight />
        </Box>
        <Box>
          <Left>
            <Text>
              <h2>TEXT 4</h2>
              <p>Nulla est lectus, cursus nec vestibulum a.</p>
            </Text>
            <Thumbnail src={require('../components/Resources/cave.jpg')} alt="Cave" />
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
  padding-top: 100px;
  max-height: 250px;
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
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow:visible;
  justify-content: center;
  `;

const Bottom = styled.div`
margin-top: 100px;
margin-bottom:100px;
height: 70px;
background-color: #47358C40;
border: 100px 0px 0px 0px #FCD864; 
  box-shadow: 0 4px 2px -2px #FCD864;
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
`;

const Thumbnail = styled.img`
margin-right: 20px;
padding-top: 40px;
z-index: 10;
  width: 100%;
  max-width: 400px;
  min-width: 150px;
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
`;

export default About;