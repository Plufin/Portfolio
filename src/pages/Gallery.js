import React, { useState } from 'react';
import Global from '../components/global';
import styled from 'styled-components';
import GalleryList from '../components/Resources/galleryList';

function Gallery() {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterClick = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
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
        <All>
          <h2 onClick={() => setSelectedFilters([])}>ALL</h2>
        </All>
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
          <h2>Gallery</h2>
          <GalleryList filterImages={filterImages} />
        </Media>
      </Main>
    </div>
  );
}

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const All = styled.div`
background - color: #47358c40;
`;

const Filter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #47358c40;

  h2 {
    cursor: pointer;
    padding: 10px; /* Add padding for better clickability */
    border: 2px solid transparent; /* Add border for clearer distinction */
    transition: border 0.3s ease; /* Add transition for smooth visual feedback */

    &.selected {
      border-color: #fff; /* Change border color for selected filters */
    }
  }
`;

const Media = styled.div`
flex: 1;
display: flex;
flex - direction: row;
align - items: center;
background- color: #47358c40;
`;

export default Gallery;