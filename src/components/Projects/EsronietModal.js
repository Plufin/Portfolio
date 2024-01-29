import React from "react";
import styled from "styled-components";

const EsronietModal = ({ onClose }) => {
  return (
    <ModalWrapper>
      <Close>
        <CloseButton onClick={onClose}>X</CloseButton>
      </Close>
      <Content>
        <h1>Esroniet Domain of Lost Unity</h1>
        <h2>Summary</h2>
        <Text>
          <p>Esroniet: Domain of Lost Unity is a modding team focused on crafting a new realm within the TES:V Skyrim engine. My part began when I was
            approached in ArtStation by an art director to volunteer as a concept artist. We worked through Trello
            for design needs and Discord for communication.</p>
        </Text>
        <Container>
          <Gallery src={require('../Resources/Concept/conseptBird.jpg')} alt="Birds" />
        </Container>
        <h2>Responsibilities</h2>
        <Text>
          <p>Taking on the role of a concept artist, I created mockups of both vague and specific descriptions from Trello. Sometimes it was simple modification of cheetah's pattern, a whole new creature based on it's environment or from my own ideas like the bird designs up above.
            The process involved sharing designs in our dedicated Discord channel, where feedback from art directors and other
            designers reviewed each concept. This cycle continued until the designs reached completion. Trager (down below), the slothlike lizard was started with random sketches and was polished step by step.</p>
        </Text>
        <Container>
          <Gallery src={require('../Resources/Concept/slothconsept.jpg')} alt="Trager Start" />
          <Gallery src={require('../Resources/Concept/slothConsept5.jpg')} alt="Trager Body" />
          <Gallery src={require('../Resources/Concept/slothConsept3.jpg')} alt="Trager Color" />
        </Container>
        <h2>Outcome</h2>
        <Text>
          <p>I had never worked as a "real" concept artist so the pressure was on. I learned the team's communication dynamics and the criteria for
            design reviews so work became less confusing after a while. Alongside practising my skills, I also learned to use Trello at some degree.
            The overall experience was excellent and I got to feel like my art mattered.
            However, due to personal projects and a full-time job, I had to step away from the project. Overall a 5/5
            experience, would gladly repeat.</p>
        </Text>
        <ContainerBottom>
          <GalleryBottom src={require('../Resources/Concept/Trager.png')} alt="Trager" />
        </ContainerBottom>
      </Content>
      <Close>
        <CloseButtonBottom onClick={onClose}>CLOSE</CloseButtonBottom>
      </Close>

    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  width: 90%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #00000090;
  padding: 20px;
  padding-top: 300px;
  padding-bottom: 300px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  overflow: scroll;

  h2 {
    border-bottom: 1px solid #FCD864;
    min-width: 150px;
    max-width: 350px;
    color: #FCD864;
    font-size: 30px;
  }
`;

const Text = styled.div`
  max-width: 1500px;
  `;

const Content = styled.div`
  padding: 20px;
  `;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #fff;
`;

const CloseButtonBottom = styled.button`
  background: #47358C;
  border: none;
  font-size: 25px;
  cursor: pointer;
  color: #FCD864;
  padding: 10px;
  border-radius: 8px;

  &:hover {
    
    background: #FCD864;
    color: #18171C;
  }
`;

const Close = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const TopicImage = styled.img`
  width: 40%;
  object-fit: cover;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 1100px) {
    width: 100%;
    align-items: center;
    flex-direction: column;
  }
`;

const ContainerBottom = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 1100px) {
  width: 100%;
  align-items: center;
  flex-direction: column;
}
`;


const Gallery = styled.img`
  width: 40%;
  object-fit: cover;
  margin: 10px;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const GalleryBottom = styled.img`
  width: 100%;
  object-fit: cover;
  margin: 10px;
  `;

const WideImage = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;


export default EsronietModal;