import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const SkillRatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 40px;
  margin-right: 40px;

  p {
    margin-bottom: 5px;
    color: #EEF1DC;
  }
`;

const StarsContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Star = styled(FaStar)`
  color: ${(props) => (props.filled ? '#FCD864' : '#EEF1DC')};
  font-size: 20px;
  margin-right: 2px; /* Add some spacing between stars */
`;

const SkillRating = ({ skill, rating }) => (
  <SkillRatingContainer>
    <p>{skill}</p>
    <StarsContainer>
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} filled={index < rating} />
      ))}
    </StarsContainer>
  </SkillRatingContainer>
);

export default SkillRating;