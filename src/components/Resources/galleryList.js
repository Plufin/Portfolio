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
    <StyledImage altText={alt}>
      <StyledImageContent src={src} alt={alt} />
    </StyledImage>
  </div>
);

const StyledImage = styled.div`
  position: relative;
  height: 400px;
  width: 400px;
  overflow: hidden;
  border-radius: 8px;
  margin: 10px;
  transition: opacity 0.3s ease-in-out;

  @media (max-width: 1100px) {
    height: 300px;
    width: 300px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.3;
  }

  &:hover::before {
    content: '${props => props.altText}';
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding: 20px;
    font-size: 20px;
    font-weight: bold;
    color: #fff; /* Text color */
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%); /* Adjust the dark color transparency */
    box-sizing: border-box;
    border-radius: 8px;
    text-align: center;
    z-index: 100; /* Increase the z-index value */
  }
`;

const StyledImageContent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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