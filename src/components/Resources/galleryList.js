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
  max-width: 100%;
  height: 230px;
  object-fit: cover;
`;

const MiniGallery = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 30px;
`;


export default GalleryList;