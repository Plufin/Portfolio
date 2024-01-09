import React from 'react';

const Gallery = () => {
  const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    // Add more image URLs as needed
  ];

  return (
    <div>
      <h2>Image Gallery</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            style={{ margin: '10px', maxWidth: '150px', maxHeight: '150px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
