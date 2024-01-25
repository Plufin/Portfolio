import React, { useState } from 'react';
import Global from '../components/global';
import styled from 'styled-components';
import IntroModal from '../components/About/IntroModal';
import BackgroundModal from '../components/About/BackgroundModal';
import PhilosophyModal from '../components/About/PhilosophyModal';
import PassionModal from '../components/About/PassionModal';

function About() {
  const [isIntroModalOpen, setIsIntroModalOpen] = useState(false);
  const [isBackgroundModalOpen, setIsBackgroundModalOpen] = useState(false);
  const [isPhilosophyModalOpen, setIsPhilosophyModalOpen] = useState(false);
  const [isPassionModalOpen, setIsPassionModalOpen] = useState(false);


  const openIntroModal = () => {
    setIsIntroModalOpen(true);
  };

  const closeIntroModal = () => {
    setIsIntroModalOpen(false);
  };

  const openBackgroundModal = () => {
    setIsBackgroundModalOpen(true);
  };

  const closeBackgroundModal = () => {
    setIsBackgroundModalOpen(false);
  };

  const openPhilosophyModal = () => {
    setIsPhilosophyModalOpen(true);
  };

  const closePhilosophyModal = () => {
    setIsPhilosophyModalOpen(false);
  };

  const openPassionModal = () => {
    setIsPassionModalOpen(true);
  };

  const closePassionModal = () => {
    setIsPassionModalOpen(false);
  };

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
            <ThumbnailProfile src={require('../components/Resources/Random/Profile.jpg')} alt="Hex" />
            <Text>
              <h2>Introduction</h2>
              <p>Hello! My name is Paula Ervasti and I am currently pursuing a degree in software engineering (2nd year) at Oulu
                University of Applied Sciences and dedicated to evolving as a <Extra>full-stack </Extra>
                developer. I value user-friendliness,
                aesthetics, and efficiency in applications and as a result, I enjoy exploring materials related to psychology and
                UI/UX during my leisure time. {/*<Rest onClick={openIntroModal}>Read More...</Rest>*/} More at the bottom of the page!</p>
            </Text>
          </Right>
          <BottomRight />
        </Box>
        <Box>
          <Left>
            <Text>
              <h2>Professional Background</h2>
              <p>
                Roles as a Sales Representative and Freelance 2D Artist, I've learned communication, creativity, and attention to detail. Serving two years in the Student Union OSAKO,
                currently as Vice Chairwoman, has strengthened my teamwork and leadership. <Rest onClick={openBackgroundModal}>Read More...</Rest>
              </p>
              <CV>
                <CvButton onClick={() => window.open(require('../components/Resources/Random/CV_PaulaErvasti.png'))}>CV</CvButton>
                <p>(And feel free to save it) :)</p>
              </CV>
            </Text>
            <ThumbnailPeace src={require('../components/Resources/Digital/dragonPeace.png')} alt="Peace" />
          </Left>
          <BottomLeft />
        </Box>
        <Box>
          <Right >
            <ThumbnailTwo src={require('../components/Resources/Digital/knot.jpg')} alt="Knot" />
            <TextTwo>
              <h2>Work Philosophy</h2>
              <WorkPhilosophyList>
                <li><strong style={{ color: '#BDAEFF' }}>Execute or Delegate:</strong> I take pride in trust. So if I promise, I do</li>
                <li><strong style={{ color: '#BDAEFF' }}>Enjoy Challenges:</strong> Challenges lay the groundwork for teaching others in the future. If you are willing to learn from them</li>
                <li><strong style={{ color: '#BDAEFF' }}>Thinking & Teamwork:</strong> Learn to give and receive constructive critisism. You are an individual teamplayer</li>
                <li><strong style={{ color: '#BDAEFF' }}>Strive for Optimal Outcomes:</strong> And be prepared for immediate compromises</li>
                <li><strong style={{ color: '#BDAEFF' }}>Strategic Execution:</strong> Plan, Implement, Supervise, Monitor, Report.</li>
                { /*<p><Rest onClick={openPhilosophyModal}> Read More...</Rest></p>*/}
              </WorkPhilosophyList>
            </TextTwo>
          </Right>
          <BottomRightTwo />
        </Box>
        <Box>
          <LeftTwo>
            <TextTree>
              <h2>Passions and Interests</h2>
              <p>I love psychology, art and experiences. Brain teasers, projects and learning. No wonder I like to dive deep into everything new and learn!</p>
              <p>I tend to enjoy more than anything jumping into a project, let it be a simple puzzle or a wide full-stack project. As long as I have the opportunity to build something from the ground up and witness the entire creation taking shape out of nothing, I'm in my element. It's a process I love to repeat, over and over again. <strong style={{ color: '#FCD864' }}>★</strong></p>
              {/*<p><Rest onClick={openPassionModal}>Read More...</Rest></p>*/}
            </TextTree>
            <ThumbnailTree src={require('../components/Resources/Digital/cave.jpg')} alt="Cave" />
          </LeftTwo>
          <BottomLeftTwo />
        </Box>
        {isIntroModalOpen && <IntroModal onClose={closeIntroModal} />}
        {isBackgroundModalOpen && <BackgroundModal onClose={closeBackgroundModal} />}
        {isPhilosophyModalOpen && <PhilosophyModal onClose={closePhilosophyModal} />}
        {isPassionModalOpen && <PassionModal onClose={closePassionModal} />}
      </Content>
    </div >
  );
}

const Header = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-top: 50px;
  max-height: 250px;
  margin-bottom: 150px;

  @media (max-width: 768px) {
    width: 100%;
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
  margin-bottom: 100px;

  h2 {
    color: #FCD864;
  }

  @media (max-width: 768px) {
    margin-bottom: 150px;
`;

const Bottom = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  height: 70px;
  background-color: #47358C40;
  border: 100px 0px 0px 0px #FCD864; 
  box-shadow: 0 4px 2px -2px #FCD864;
  z-index: -10;

  @media (max-width: 768px) {
    background-color: #47358C00;
    box-shadow: 0 4px 2px -2px #FCD86400;
    
`;

const Left = styled.div`
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
    max-height: 100%;
  }
`;

const LeftTwo = styled(Left)`
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
  max-height: 100%;
}
`;



const BottomLeft = styled(Bottom)`
  margin-right: 7%;

  @media (max-width: 1050px) {
    background-color: #47358C00;
    box-shadow: 0 4px 2px -2px #FCD86400;
  }
  
`;

const BottomRight = styled(Bottom)`
  margin-left: 7%;

  @media (max-width: 1050px) {
    background-color: #47358C00;
    box-shadow: 0 4px 2px -2px #FCD86400;
  }
`;

const BottomRightTwo = styled(Bottom)`
  margin-top: 200px;
  margin-left: 7%;

  @media (max-width: 1150px) {
    background-color: #47358C00;
    box-shadow: 0 4px 2px -2px #FCD86400;
  }
`;

const BottomLeftTwo = styled(Bottom)`
  margin-top: 200px;
  margin-right: 7%;

  @media (max-width: 1150px) {
    background-color: #47358C00;
    box-shadow: 0 4px 2px -2px #FCD86400;
  }
`;



const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  max-height: 300px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    padding-top: 50px;
  }
`;

const Thumbnail = styled.img`
  margin: 20px;
  padding-top: 0px;
  width: 100%;
  max-width: 400px;
  min-width: 150px;

  @media (max-width: 768px) {
    max-height: 300px;
    min-width: 100%;
    object-fit: cover;
    border-radius: 0px;
    border-bottom: 2px solid #FCD864;
  }
`;

const ThumbnailProfile = styled(Thumbnail)`
margin: 20px;
padding-top: 0px;
width: 100%;
max-width: 400px;
min-width: 150px;

@media (max-width: 768px) {
  max-height: 300px;
  min-width: 100%;
  object-fit: cover;
  border-radius: 0px;
  object-position: top;

  border-bottom: 2px solid #FCD864;
}
`;

const ThumbnailPeace = styled(Thumbnail)`
height: 400px;
width: 400px;
object-fit: cover;
border-radius: 10px;
object-position: top;

@media (max-width: 768px) {
  object-position: center;
  width: 100%;
  object-fit: cover;
  border-radius: 0px;
  border-bottom: 2px solid #FCD864;
}
`;

const ThumbnailTwo = styled(Thumbnail)`
  margin: 20px;
  padding-top: 0px;
  width: 100%;
  max-width: 400px;
  min-width: 150px;

  @media (max-width: 768px) {
    max-height: 300px;
    min-width: 100%;
    object-fit: cover;
    border-radius: 0px;
    border-bottom: 2px solid #FCD864;
  }
`;

const ThumbnailTree = styled(Thumbnail)`
margin: 20px;
padding-top: 0px;
width: 100%;
max-width: 400px;
min-width: 150px;

@media (max-width: 768px) {
  max-height: 300px;
  min-width: 100%;
  object-fit: cover;
  border-radius: 0px;
  border-bottom: 2px solid #FCD864;
}
`;


const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 700px;
  min-width: 150px;

    @media (max-width: 768px) {
      font-size: 25px;
    align-items: flex-start;
    padding-top: 0px;
  }
`;

const TextTwo = styled(Text)`
flex: 1;
display: flex;
flex-direction: column;
justify-content: flex-start;
padding-top: 20px;
padding-left: 20px;
padding-right: 20px;
max-width: 700px;
min-width: 150px;

  @media (max-width: 768px) {
    font-size: 25px;
  align-items: flex-start;
  max-height: 430px;
  padding-bottom: 300px;
}
`;

const TextTree = styled(Text)`
flex: 1;
display: flex;
flex-direction: column;
justify-content: flex-start;
padding-top: 20px;
padding-left: 20px;
padding-right: 20px;
max-width: 700px;
min-width: 150px;

  @media (max-width: 768px) {
    font-size: 25px;
  align-items: flex-start;
  max-height: 430px;
  padding-bottom: 100px;
}
`;


const Extra = styled.span`
  color: #FCD864;
  font-weight: 500;
`;

const Rest = styled.span`
  color: #BDAEFF;
  font-weight: 500;

  &:hover {
    color: #FCD864;
    cursor: pointer;
  }
`;

const CvButton = styled.a`
  margin-right: 20px;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: #47358C;
  font-size: 20px;
  transition: all 0.3s ease-in-out;

  p {
    margin: 0px;
    font-weight: 500;
    color: #241D4F;

    &:hover {
      color: #47358C;
      text-decoration: none;
    }
  }

  &:hover {
    background-color: #FCD864;
    color: #47358C;
    text-decoration: none;
  }

  @media (max-width: 1050px) {
    p {
      font-size: 18px;
    }
  }
`;

const CV = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const WorkPhilosophyList = styled.ul`
`;


export default About;