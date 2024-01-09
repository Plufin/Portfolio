import React, { useState } from 'react';
import styled from 'styled-components';
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
    <Content>
      <ButtonContainer>
        <ToggleButton onClick={() => handleToggle('art')} selected={selectedSection === 'art'}>
          <p className={selectedSection === 'art' ? 'selected' : ''}>ART</p>
          <IconContainer selected={selectedSection === 'art'}>
          </IconContainer>
        </ToggleButton>
        <ToggleButton onClick={() => handleToggle('code')} selected={selectedSection === 'code'}>
          <p className={selectedSection === 'code' ? 'selected' : ''}>CODE</p>
          <IconContainer selected={selectedSection === 'code'}>
          </IconContainer>
        </ToggleButton>
        <ToggleButton onClick={() => handleToggle('teamwork')} selected={selectedSection === 'teamwork'}>
          <p className={selectedSection === 'teamwork' ? 'selected' : ''}>TEAMWORK</p>
          <IconContainer selected={selectedSection === 'teamwork'}>
          </IconContainer>
        </ToggleButton>
      </ButtonContainer>
      <Detail>
        {selectedSection === 'art' && <ArtContent />}
        {selectedSection === 'code' && <CodeContent />}
        {selectedSection === 'teamwork' && <TeamworkContent />}
      </Detail>
    </Content>
  );
};

const ArtContent = () => (
  <Art>
    <ArtList />
    <Button to="/gallery" target="_blank" rel="noopener noreferrer">See More</Button>
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
    <RatingsContainer>
      {Object.entries(predeterminedRatings).map(([skill, rating]) => (
        <SkillRating key={skill} skill={skill} rating={rating} />
      ))}
    </RatingsContainer>
  );
};

const TeamworkContent = () => (
  <div>
    <p><span style={{ color: '#FCD864' }}>Vice President</span> - Vestibulum id lacus eleifend urna pretium bibendum sollicitudin sit amet quam</p>
    <p><span style={{ color: '#FCD864' }}>Freelancer</span> - Vestibulum id lacus eleifend urna pretium bibendum sollicitudin sit amet quam</p>
    <p><span style={{ color: '#FCD864' }}>Customer Service</span> - Vestibulum id lacus eleifend urna pretium bibendum sollicitudin sit amet quam</p>
    <p><span style={{ color: '#FCD864' }}>Peacekeeper</span> - Vestibulum id lacus eleifend urna pretium bibendum sollicitudin sit amet quam</p>
  </div>
);

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 20px 0px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
`;

const Button = styled.a`
padding: 10px 20px 10px 20px;
  background-color: #47358C;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    background-color: #000;
    text-decoration: none;
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
  }
`;

const IconContainer = styled.div`
  width: 100px;
  margin-top: 8px;
  color: ${({ selected }) => (selected ? '#FCD864' : '#EEF1DC')};
  font-size: 50px;
`;
const Detail = styled.div`
padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RatingsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Art = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ToggleSkills;