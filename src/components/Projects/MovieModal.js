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
        <h1>MovieApp Modal Is Under Construction.</h1>
      </Header>
      <Content>
        <h2>Summary</h2>
        <p>In shoert, what did I do</p>
        <h2>Responsibilities</h2>
        <p>What would be miserable without me?</p>
        <p>List Art, List Physical</p>
        <h2>Challenges</h2>
        <p>What did I have to overcome?</p>
        <h2>Outcomes</h2>
        <p>What did I achieve?</p>
      </Content>
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