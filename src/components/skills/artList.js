import React from "react";
import styled from 'styled-components';

const ArtList = () => (
  <MiniGallery>
    <Gallery src={require('../Resources/Digital/cave.jpg')} alt="Cave" />
    <Gallery src={require('../Resources/Digital/fish.jpg')} alt="Fish" />
    <Gallery src={require('../Resources/Traditional/fox.png')} alt="Fox" />
    <Gallery src={require('../Resources/Digital/hex.jpg')} alt="Hex" />
    <Gallery src={require('../Resources/Digital/knot.jpg')} alt="Knot" />
  </MiniGallery>
);

const MiniGallery = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 30px;
  overflow-x: auto;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: space-between;
  }
`;

const Gallery = styled.img`
  width: 160px;
  margin-left: 5px;
  margin-right: 5px;
  max-width: 300px;
  height: 230px;
`;

export default ArtList;