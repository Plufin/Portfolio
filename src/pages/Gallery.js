import React, { useState } from 'react';
import Global from '../components/global';
import styled from 'styled-components';
import GalleryList from '../components/Resources/galleryList';
import Modal from '../components/Resources/Modal';

function Gallery() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFilterClick = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  const filterImages = (tags) => {
    if (selectedFilters.length === 0) {
      return true;
    }
    return selectedFilters.every((filter) => tags.includes(filter));
  };

  return (
    <div className="base">
      <Global />
      <Main>
        {        /*<All>
          <h2 onClick={() => setSelectedFilters([])}>ALL</h2>
        </All>*/}
        <Filter>
          {['COMMISSION', 'DIGITAL', 'TRADITIONAL', 'WEB DESIGN', 'TATTOO'].map((filter) => (
            <h2
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={selectedFilters.includes(filter) ? 'selected' : ''}
            >
              {filter}
            </h2>
          ))}
        </Filter>
        <Media>
          <GalleryList filterImages={filterImages} openModal={openModal} />
        </Media>
      </Main>
      {isModalOpen && selectedImage && (
        <Modal onClose={closeModal}>
          <img src={selectedImage.src} alt={selectedImage.alt} style={{ width: '100%' }} />
        </Modal>
      )}
    </div>
  );
}

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Filter = styled.div`
max-height: 100px;
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;

  h2 {
    color: #E2EFF2;
    background-color: #47358c40;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 8px;
    cursor: pointer;
    padding: 10px;
    border: 2px solid transparent;
    transition: border 0.3s ease;
    

    &:hover {
      background-color: #47358C80;
    }

    &.selected {
      border-color: #BDAEFF;
    }

    @media (max-width: 1100px) {
      font-size: 22px;
    }
  }
`;

const Media = styled.div`
flex: 1;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: flex-start;
margin-top: 20px;
max-width: 95%;
padding: 20px;
`;

export default Gallery;