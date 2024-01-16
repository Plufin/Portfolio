import React from "react";
import styled from "styled-components";

const IntroModal = ({ onClose }) => {
  return (
    <ModalWrapper>
      <Close>
        <CloseButton onClick={onClose}>X</CloseButton>
      </Close>
      <TopicImage src={require('../Resources/Digital/hex.jpg')} alt="Hex" />
      <Content>
        <h1>Modal Is Under Construction!</h1>
        <h2>Who am I</h2>
        <p>Name, Age, Study Place</p>
        <h2>Hobbies</h2>
        <li>Games</li>
        <li>Motorcycle</li>
        <li>Puzzles</li>
        <li>Violin</li>
        <li>Reading</li>
        <li>Art</li>
        <li>Learning New Skills</li>
        <h2>Future Dreams</h2>
        <p>Stable and challenging job</p>
        <h2>Favourite Quotes</h2>
        <li>“The only way to do great work is to love what you do.” – Steve Jobs</li>
        <li>“If you are not willing to risk the usual, you will have to settle for the ordinary.” – Jim Rohn</li>
        <li>“All our dreams can come true if we have the courage to pursue them.” – Walt Disney</li>
        <li>“Success is walking from failure to failure with no loss of enthusiasm.” – Winston Churchill</li>
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

const Text = styled.div`
width: 90%;
  padding: 20px;
  padding-top: 0px;
  color: #fff;
  font-size: 20px;
  line-height: 1.5;
  overflow: y-scroll;
`;


export default IntroModal;