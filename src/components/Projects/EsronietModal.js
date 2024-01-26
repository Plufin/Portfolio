import React from "react";
import styled from "styled-components";

const EsronietModal = ({ onClose }) => {
  return (
    <ModalWrapper>
      <Close>
        <CloseButton onClick={onClose}>X</CloseButton>
      </Close>
      <TopicImage src={require('../Resources/Web/HurmosTop.png')} alt="HurmosTop" />
      <Content>
        <h2>Summary</h2>
        <p>Hurmos is Oulu's second biggest festival and consists of two days. The daytime event is a collaboration between
          businesses, student organizations, and university's guilds. There were over 100 partners,
          each with a stand at the Oulu Linnanmaa campus. Students toured the stands and
          enjoyed activities such as a photo wall, free drinks, a spray-painting wall, and
          completed various tasks to earn an event badge. They could also pick up a wristband
          for the evening event if they had bought one. This day was managed by the Linnanmaa team.</p>
        <p>The evening event was a festival with three well-known artists performing at Oulu's
          Kuusisaari. Some companies had the opportunity to sell their products, such as food,
          drinks, and accessories. This event was managed by the Kuusisaari team.</p>
        <TopicImage src={require('../Resources/Web/hurmosMerkit.png')} alt="HurmosBadge" />
        <TopicImage src={require('../Resources/Web/AluekarttaEN.png')} alt="Alue" />
        <h2>Responsibilities</h2>
        <p>I was part of the Linnanmaa team, contributing to the planning of the day's schedule,
          particularly outdoor activities like wristband exchange points, overall badge distribution,
          and crowd control. Another primary role was serving as the graphic designer for the
          entire Hurmos event. I designed color palettes, maps, signs, backgrounds for social media
          posts, and signs for invitation-only events. I also designed overall badges, using negative space.</p>
        <h2>Challenges</h2>
        <p>I simultaneously was Osako's board memeber with responsibilities, studied getting 4-5/5 grades, and communicated
          actively with Hurmos members. This posed a real challenge to my time and stress
          management, as well as finding time for rest (or a life for that matter). There were several 12-hour days, and without
          effective teamwork, the event would not have been possible.</p>
        <p>Oh, and I picked hundreds of 40kg concrete blocks. Thought about coding a lot at that point.</p>
        <h2>Outcomes</h2>
        <p>I learned to work in teams, manage large-scale projects over an extended period, listen and provide
          instructions. In short, I managed multitasking.</p>
        <TopicImage src={require('../Resources/Web/kutsuvieras.png')} alt="Kutsuvieras" />
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
  width: 40%;
  object-fit: cover;

  @media (max-width: 1100px) {
    width: 100%;
  }
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