import React from "react";
import styled from "styled-components";


const MovieModal = ({ onClose }) => {
  return (
    <ModalWrapper>
      <Close>
        <CloseButton onClick={onClose}>X</CloseButton>
      </Close>
      <TopicImage src={require('../Resources/Web/Top.png')} alt="Top" />
      <Header>
        <h1>Full Stack MovieApp</h1>
      </Header>
      <Content>
        <h2>Summary</h2>
        <p>This is a school project (15 credits), where each member of the group received a grade of 5/5.
          The group consisted of five contributors, each involved in various aspects to maximize learning,
          but mainly focusing on their designated responsibilities. In my case, I worked on the frontend and
          oversaw the performance of others in that area. App runs, check it out <a href="https://movieapp-976r.onrender.com/">here</a> or check the <a href="https://github.com/Plufin/MovieApp">GitHub</a>.</p>
        <ImageContainer>
          <SummaryImage src={require('../Resources/Web/DetailColor.png')} alt="Deatail" />
          <SummaryImage2 src={require('../Resources/Web/DetailPhone.png')} alt="Phone" />
        </ImageContainer>
        <h2>Responsibilities</h2>
        <p>In the project, my primary responsibility was the frontend. However, I participated in all other aspects, as did all members of the group.</p>
        <p><Extra>Backend:</Extra> My responsibilities included creating endpoints, a database, and testing for individual user reviews of movies and TV series. This involved utilizing and filtering data from the TMDB API.</p>
        <li>Create, Delete, Like, Categorize</li>
        <p><Extra>API:</Extra></p>
        <li>Movies (TMDB). The homepage calls and displays popular movies and series.</li>
        <li>News (Finnkino, Oulu). The latest Finnkino news is presented on both the homepage and a separate News page.</li>
        <p><Extra>Frontend:</Extra> I practically took responsibility for everything you see on the site, and I may sound overly proud here. I AM proud of my first React project! I built the navbar and header, and I drew the whole wireframe, black/white and colored. I coded the foundation and global elements for all pages, which the group members then filled with their own components (of which I am proud). In the end, I went through all pages, refining or rebuilding them entirely based on responsiveness and user-friendliness. Things that I wanted to build but didn't know how, I learned.</p>
        <ImageContainer>
          <SummaryImage src={require('../Resources/Web/Profile.png')} alt="Profile" />
          <SummaryImage2 src={require('../Resources/Web/ProfileColorPhone.png')} alt="Phone" />
        </ImageContainer>
        <p>Overall, I am proud of everyone's work. Other group members dedicated the time I spent on the frontend to ensure the backend, communication and maintenance. Without them them App would look nice but not be so functional</p>
        <h2>Challenges</h2>
        <p>The backend required learning and took a bit more time than I had hoped, but I managed to complete the tasks on time despite the challenges. To be honest, one of my main challenges was discovering a bit too late that the option in DevTools could be switched from the browser view to the mobile view. The app is responsive for a small window, but I could have checked it on the phone a little earlier. Live and learn :)</p>
        <h2>Outcomes</h2>
        <p>Overall, everyone rightfully received a grade of 5/5. I enjoy projects when there's a good team behind them, and well... even without one. I learned full-stack development and became interested in it. I noticed that my skills and comfort zone lie in the frontend, but I have such a good feeling about everything that my enthusiasm for full-stack has grown.</p>
      </Content>
      <Close>
        <CloseButtonBottom onClick={onClose}>CLOSE</CloseButtonBottom>
      </Close>
    </ModalWrapper>
  );
};

const Extra = styled.span`
  color: #BDAEFF;
`;

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
  backdrop-filter: blur(30px);
  overflow: scroll;

  @media (max-width: 1100px) {
    width: 100%;
  }

  h2 {
    border-bottom: 1px solid #FCD864;
    min-width: 150px;
    max-width: 350px;
    color: #FCD864;
    font-size: 30px;
  }

  a { 
    color: #FCD864;

    &:hover {
      color: #47358C; 
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
  object-fit: cover;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  align-items: center;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SummaryImage = styled.img`
width: 40%;
  object-fit: cover;
  height: 100%;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const SummaryImage2 = styled.img`
width: 20%;
height: 100%;
  object-fit: cover;

  @media (max-width: 1100px) {
    width: 60%;
  }
`;

const SummaryImageBottom = styled.img`
width: 50%;
  object-fit: cover;
  padding: 2%;
`;

const Images = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;


export default MovieModal;