import React from "react";
import styled from "styled-components";

const MovieModal = ({ onClose }) => {
  return (
    <ModalWrapper>
      <Close>
        <CloseButton onClick={onClose}>X</CloseButton>
      </Close>
      <TopicImage src={require('../Resources/Web/detailColor.png')} alt="Top" />
      <Header>
        <h2>MovieApp Modal Is Under Construction.</h2>
        <h2>Thank you for your patience!</h2>
      </Header>
      <Container>
        <Text>
          <p>Web application <a href="https://movieapp-976r.onrender.com/">(Open App)</a> that integrates React and Node.js, offering a wide selection of movies and series from an API,
            a user-friendly interface, and efficient search functionality. The core idea is that users can leave various reviews for movies and series,
            engage in discussions within groups, and explore content through news and reviews submitted by users.</p>
        </Text>
        <Images>
          <Image src={require('../Resources/Web/Profile.png')} alt="Profile" />
          <Image src={require('../Resources/Web/Profile.png')} alt="Profile" />
        </Images>
      </Container>
      <Close>
        <CloseButtonBottom onClick={onClose}>CLOSE</CloseButtonBottom>
      </Close>
    </ModalWrapper>
  );
};

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
`;

const Container = styled.div`
padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;


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
  backdrop-filter: blur(10px);
  overflow: scroll;

  h2 {
    padding-left: 20px;
    color: #FCD864;
    font-size: 30px;
  }
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
  width: 100%;
  height: 30%;
  object-fit: cover;
`;

const Image = styled.img`
  width: 40%;
  object-fit: cover;
  border-radius: 10px;
`;

const Images = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

const Text = styled.div`
  padding-top: 0px;
  font-size: 20px;
  line-height: 1.5;
  overflow: y-scroll;
  background: #18171C90;
  border-radius: 10px;
  backdrop-filter: blur(5px);
`;


export default MovieModal;