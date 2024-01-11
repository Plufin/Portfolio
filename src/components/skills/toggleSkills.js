import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SkillRating from './skillRating';
import ArtList from './artList';
import { RiTeamLine } from 'react-icons/ri';
import { BsBrush } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa';

const ToggleSkills = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleToggle = (section) => {
    setSelectedSection(section === selectedSection ? null : section);
  };

  return (
    <Container>
      <Content>
        <ButtonContainer center={!selectedSection}>
          <ToggleButton onClick={() => handleToggle('art')} selected={selectedSection === 'art'}>
            <p className={selectedSection === 'art' ? 'selected' : ''}>ART</p>
            <IconContainer selected={selectedSection === 'art'}>
              <BsBrush />
            </IconContainer>
          </ToggleButton>
          <ToggleButton onClick={() => handleToggle('code')} selected={selectedSection === 'code'}>
            <p className={selectedSection === 'code' ? 'selected' : ''}>CODE</p>
            <IconContainer selected={selectedSection === 'code'}>
              <FaCode />
            </IconContainer>
          </ToggleButton>
          <ToggleButton onClick={() => handleToggle('teamwork')} selected={selectedSection === 'teamwork'}>
            <p className={selectedSection === 'teamwork' ? 'selected' : ''}>TEAM</p>
            <IconContainer selected={selectedSection === 'teamwork'}>
              <RiTeamLine />
            </IconContainer>
          </ToggleButton>
        </ButtonContainer>
        <Detail>
          {selectedSection === 'art' && <ArtContent />}
          {selectedSection === 'code' && <CodeContent />}
          {selectedSection === 'teamwork' && <TeamworkContent />}
        </Detail>
      </Content>
    </Container>
  );
};

const ArtContent = () => (
  <Art>
    <p style={{ marginBottom: '50px', alignSelf: 'flex-start' }}>Let the Work Speak For Itself ~</p>
    <ArtList />
    <Button to="/gallery">SEE ALL</Button>
  </Art>
);

const CodeContent = () => {
  const predeterminedRatings = {
    Language1: 5,
    Language2: 3,
    Language3: 4,
    Language4: 2,
  };

  return (
    <div>
      <p style={{ marginBottom: '30px', alignSelf: 'flex-start', maxWidth: '700px' }}>
        Since coding skills are subjective and ever-evolving, I've rated my skills based on my confidence ✨
      </p>
      <RatingsContainer>
        {Object.entries(predeterminedRatings).map(([skill, rating]) => (
          <SkillRating key={skill} skill={skill} rating={rating} />
        ))}
      </RatingsContainer>
    </div>
  );
};

const TeamworkContent = () => (
  <div>
    <p style={{ marginBottom: '50px' }}>Vestibulum id lacus eleifend urna pretium bibendum sollicitudin sit amet quam. Vestibulum id lacus eleifend urna pretium bibendum sollicitudin sit amet quam</p>
    <p><span style={{ color: '#FCD864' }}>Vice President</span> - Vestibulum id lacus eleifend urna pretium bibendum sollicitudin sit amet quam</p>
    <p><span style={{ color: '#FCD864' }}>Freelancer</span> - Vestibulum id lacus eleifend urna pretium bibendum sollicitudin sit amet quam</p>
    <p><span style={{ color: '#FCD864' }}>Customer Service</span> - Vestibulum id lacus eleifend urna pretium bibendum sollicitudin sit amet quam</p>
    <p><span style={{ color: '#FCD864' }}>Peacekeeper</span> - Vestibulum id lacus eleifend urna pretium bibendum sollicitudin sit amet quam</p>
  </div >
);

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 20px 0px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding-left: 0px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #47358c40;
  width: 100%;
  max-width: 900px;
  height: 100%;
  max-height: 600px;
  padding: 60px 60px 60px 60px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0px 20px 250px 20px;
    margin-left: 1%;
    margin-right: 1%;
    margin-top: 20px;
  }
  `;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
  width: 80%;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: ${({ center }) => (center ? '170px' : '0')};
  transition: margin-top 0.5s ease;

  @media (max-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
  }
`;

const Button = styled(Link)`
  padding: 10px 20px 10px 20px;
  background-color: #47358C;
  border-radius: 6px;
  text-decoration: none;
  color: #E2EFF2;

  &:hover {
    cursor: pointer;
    background-color: #000;
  }
`;


const ToggleButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  color: #E2EFF2;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;

  @media (max-width: 768px) {
    width: 48%;
  }
  
  
  &:hover {
    background-color: #47358C;
  }

  p {
    color: ${({ selected }) => (selected ? '#FCD864' : '#E2EFF2')};
    transition: color 0.3s ease-in-out;
  }

  &.selected {
    p {
      color: #FCD864;
    }
`;

const IconContainer = styled.div`
  width: 100px;
  margin-top: 8px;
  color: ${({ selected }) => (selected ? '#FCD864' : '#EEF1DC')};
  font-size: 50px;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;
const Detail = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 100%;
    flex-wrap: wrap;
    
  }
`;

const RatingsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Art = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export default ToggleSkills;