import React, { useState } from 'react';
import Global from '../components/global';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import MovieModal from '../components/Projects/MovieModal';
import PortfolioModal from '../components/Projects/PortfolioModal';
import EsronietModal from '../components/Projects/EsronietModal';

function Projects() {
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [isEsronietModalOpen, setIsEsronietModalOpen] = useState(false);

  const openMovieModal = () => {
    setIsMovieModalOpen(true);
  };

  const closeMovieModal = () => {
    setIsMovieModalOpen(false);
  };

  const openPortfolioModal = () => {
    setIsPortfolioModalOpen(true);
  };

  const closePortfolioModal = () => {
    setIsPortfolioModalOpen(false);
  };

  const openEsronietModal = () => {
    setIsEsronietModalOpen(true);
  }

  const closeEsronietModal = () => {
    setIsEsronietModalOpen(false);
  }

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
          <Left onClick={openMovieModal}>
            <Text>
              <Top>
                <h2>Full Stack MovieApp</h2>
                <IconContainer href="https://github.com/Plufin/MovieApp">
                  <AiFillGithub />
                </IconContainer>
              </Top>
              <p>Web application that integrates React and Node.js, offering a wide selection of movies and series from an API, a user-friendly interface, and efficient search functionality. The core idea is that users can leave various reviews for movies and series, engage in discussions within groups, and explore content through news and reviews submitted by ....</p>
            </Text>
            <Thumbnail src={require('../components/Resources/Digital/hex.jpg')} alt="Hex" />
          </Left>
        </Box>
        <Box>
          <Right onClick={openPortfolioModal}>
            <Thumbnail src={require('../components/Resources/Digital/fish.jpg')} alt="Fish" />
            <Text>
              <Top>
                <h2>This Portfolio</h2>
                <IconContainer href="https://github.com/Plufin/Portfolio">
                  <AiFillGithub />
                </IconContainer>
              </Top>
              <p>This portfolio is one of my first works consentrating on frontend. I made myself a challenge to do this in a week, designing and all. It took me 7 days to design a wireframe with various color palettes, gather images and make a filtering option. I tried to consentrate on user friendliness and simple design for easy navigation. Hope you like it!</p>
            </Text>
          </Right>
        </Box>
        <Box>
          <Left onClick={openEsronietModal}>
            <Text>
              <Top>
                <h2>Hurmos</h2>
              </Top>
              <p>Art :) </p>
            </Text>
            <Thumbnail src={require('../components/Resources/Digital/hex.jpg')} alt="Hex" />
          </Left>
        </Box>
        {isMovieModalOpen && <MovieModal onClose={closeMovieModal} />}
        {isPortfolioModalOpen && <PortfolioModal onClose={closePortfolioModal} />}
        {isEsronietModalOpen && <EsronietModal onClose={closeEsronietModal} />}
      </Content>

    </div>
  );
}

const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IconContainer = styled.a`
  display: flex;
  padding: 5px;
  background-color: #47358C;
  margin-left: 20px;
  border-radius: 6px;
  color: #E2EFF2;
  font-size: 30px;

  &:hover {
    cursor: pointer;
    background-color: #FCD864;
    color: #18171C;
  }
  `;

const Header = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-top: 100px;
  max-height: 250px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    padding-left: 0px;
    width: 100%;
    padding-top: 50px;
    margin-bottom: 0px;
    
  }
`;

const Title = styled.div`
  border-bottom: 1px solid #FCD864;
  min-width: 150px;
  max-width: 350px;

  @media (max-width: 768px) {
    padding-left: 5%;
  border-bottom: 1px solid #FCD864;

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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Right = styled.div`
margin-left: 20%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: #47358C40;
  height: 300px;
  margin-bottom: 80px;

  &:hover {
    cursor: pointer;
    background: #47358C80;
  }

  @media (max-width: 768px) {
    padding: 0px;
    background: transparent;
    flex-direction: column-reverse;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
  }
`;

const Left = styled.div`
margin-right: 20%;
  flex: 1;
  display: flex;
  flex-direction: row
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: #47358C40;
  height: 300px;

  &:hover {
    cursor: pointer;
    background: #47358C80;
  }

  @media (max-width: 768px) {
    padding: 0px;
    flex-direction: column;
    margin-left: 0px;
    margin-right: 0px;
    background: transparent;
  }
`;

const Thumbnail = styled.img`
  height: 400px;
  width: 400px;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    object-fit: cover;
    border-radius: 0px;
    border-bottom: 2px solid #FCD864;
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

  @media (max-width: 768px) {
    h2 {
      color: #FCD864;
    }
  `;


export default Projects;