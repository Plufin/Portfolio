import React, { useState } from 'react';
import Global from '../components/global';
import styled from 'styled-components';
import GalleryList from '../components/Resources/galleryList';
import Modal from '../components/Resources/Modal';

function Gallery() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

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
        <ToggleFiltersButton onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? 'Hide Filters' : 'Filters'}
        </ToggleFiltersButton>
        {showFilters && (
          <Filter>
            {['COMMISSION', 'DIGITAL', 'TRADITIONAL', 'WEB', 'TATTOO'].map((filter) => (
              <h2
                key={filter}
                onClick={() => handleFilterClick(filter)}
                className={selectedFilters.includes(filter) ? 'selected' : ''}
              >
                {filter}
              </h2>
            ))}
          </Filter>
        )}
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

const ToggleFiltersButton = styled.button`
align-self: center;
width: 200px;
margin: 20px;
color: #E2EFF2;
  background-color: #47358c30;
  border: 2px solid transparent;
  border-radius: 8px;
  color: #E2EFF2;
  font-family: Montserrat;
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
  transition: border 0.3s ease;
`;

const Filter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;


  h2 {
    font-size: 20px;
    color: #E2EFF2;
    background-color: #47358c40;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 8px;
    cursor: pointer;
    padding: 10px;
    border: 2px solid transparent;
    transition: border 0.3s ease;
    max-height: 25px;
    

    &:hover {
      background-color: #47358C80;
    }

    &.selected {
      border-color: #BDAEFF;
    }
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;


const Media = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  max-width: 95%;
  padding: 20px;
`;

export default Gallery;
