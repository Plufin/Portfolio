import React from "react";
import styled from 'styled-components';

const GalleryList = ({ filterImages }) => (
  <MiniGallery>
    <Gallery src={require('../Resources/cave.jpg')} alt="Cave" tags={['COMMISSION', 'DIGITAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/fish.jpg')} alt="Fish" tags={['DIGITAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/fox.png')} alt="Fox" tags={['TATTOO', 'COMMISSION']} filterImages={filterImages} />
    <Gallery src={require('../Resources/hex.jpg')} alt="Hex" tags={['COMMISSION', 'TRADITIONAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/knot.jpg')} alt="Knot" tags={['WEB DESIGN']} filterImages={filterImages} />
  </MiniGallery>
);

const Gallery = ({ src, alt, tags, filterImages }) => (
  <div data-tags={tags.join(' ')} className="gallery-item" style={{ display: filterImages(tags) ? 'block' : 'none' }}>
    <StyledImage src={src} alt={alt} />
  </div>
);

const StyledImage = styled.img`
height: 400px;
width: 400px;
object-fit: cover;
  max-width: 100%;
  border-radius: 8px;
  object-fit: cover;
  margin: 10px;

  @media (max-width: 1100px) {
    height: 300px;
width: 300px;
  }
`;

const MiniGallery = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  width: 100%;
flex-wrap: wrap;
align-items: flex-start;
`;


export default GalleryList;