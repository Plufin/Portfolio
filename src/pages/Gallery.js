import React from 'react';
import styled from 'styled-components';
import Global from '../components/global.js';

// Assuming you have an array of image URLs
const imageUrls = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
  // Add more image URLs as needed
];

const Gallery = () => {
  return (
    <Container>
      <Global />
      <GalleryTitle>My Gallery</GalleryTitle>
      <ImageGrid>
        {imageUrls.map((imageUrl, index) => (
          <Image key={index} src={imageUrl} alt={`Image ${index + 1}`} />
        ))}
      </ImageGrid>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const GalleryTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  cursor: pointer;

  /* Add additional styles as needed */
`;

export default Gallery;
