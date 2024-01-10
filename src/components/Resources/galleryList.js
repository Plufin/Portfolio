import React from "react";
import styled from 'styled-components';

const GalleryList = ({ filterImages }) => (

  <MiniGallery>
    {/*DIGITAL*/}
    {/*TOP*/}
    <Gallery src={require('../Resources/Digital/dragonPeace.png')} alt="Peace" tags={['COMMISSION', 'DIGITAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Digital/alienBug.png')} alt="Alien Bug" tags={['COMMISSION', 'DIGITAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Digital/phoenix.png')} alt="Phoenix" tags={['DIGITAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Digital/predator.jpg')} alt="Predator" tags={['DIGITAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Digital/Gargoyle.png')} alt="Gargoyle" tags={['DIGITAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Digital/Wrath.png')} alt="Wrath" tags={['DIGITAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Digital/camo.jpg')} alt="Camo" tags={['COMMISSION', 'DIGITAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Digital/cheetahHeaf.png')} alt="Cheetah Profile" tags={['COMMISSION', 'DIGITAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Digital/wolverine.png')} alt="Wolverine" tags={['DIGITAL', 'COMMISSION']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Digital/fish.jpg')} alt="Fish" tags={['DIGITAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Digital/hex.jpg')} alt="Hex" tags={['COMMISSION', 'DIGITAL', 'TATTOO']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Digital/knot.jpg')} alt="Knot" tags={['DIGITAL']} filterImages={filterImages} />

    {/*MID*/}
    <Gallery src={require('../Resources/Digital/raikou.jpg')} alt="Raikou" tags={['DIGITAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Digital/Cheetah.png')} alt="Cheetah" tags={['DIGITAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Digital/craweler.jpg')} alt="Craweler" tags={['DIGITAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Digital/dog.jpg')} alt="Dog" tags={['COMMISSION', 'DIGITAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Digital/dragon.jpg')} alt="Dragon" tags={['DIGITAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Digital/future.png')} alt="Future" tags={['COMMISSION', 'DIGITAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Digital/Gargoyle.png')} alt="Gargoyle" tags={['DIGITAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Digital/Infans.png')} alt="Infans" tags={['DIGITAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Digital/ludwig.jpg')} alt="Ludwig" tags={['DIGITAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Digital/tommy.jpg')} alt="Tommy" tags={['DIGITAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Digital/vicar.jpg')} alt="Vicar" tags={['DIGITAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Digital/cave.jpg')} alt="Cave" tags={['COMMISSION', 'DIGITAL']} filterImages={filterImages} />

    <Gallery src={require('../Resources/Digital/Horse.png')} alt="Horse" tags={['DIGITAL']} filterImages={filterImages} />

    {/*TRADITIONAL*/}
    <Gallery src={require('../Resources/Traditional/fox.png')} alt="Fox" tags={['TRADITIONAL', 'COMMISSION']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Traditional/Lost.png')} alt="Lost" tags={['TRADITIONAL']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Traditional/manedWolf.png')} alt="Maned Wolf" tags={['TRADITIONAL', 'COMMISSION']} filterImages={filterImages} />
    {/*TATTOO*/}
    <Gallery src={require('../Resources/Tattoo/element2.jpg')} alt="Elements2" tags={['TATTOO', 'COMMISSION']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Tattoo/backTattoo.png')} alt="Back" tags={['TATTOO', 'COMMISSION']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Tattoo/tomiTattoo.png')} alt="Hybrid" tags={['TATTOO', 'COMMISSION']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Tattoo/element.jpg')} alt="Elements" tags={['TATTOO', 'COMMISSION']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Tattoo/Tree.jpg')} alt="Tree" tags={['TATTOO', 'COMMISSION']} filterImages={filterImages} />
    {/*SKETCH*/}
    <Gallery src={require('../Resources/Sketch/creature.png')} alt="Rock" tags={['SKETCH']} filterImages={filterImages} />
    {/*CONSEPT*/}
    <Gallery src={require('../Resources/Concept/grass.png')} alt="Grass" tags={['CONCEPT', 'COMMISSION']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Concept/headpiece.jpg')} alt="Headpiece" tags={['CONCEPT', 'COMMISSION']} filterImages={filterImages} />
    <Gallery src={require('../Resources/Concept/snake.png')} alt="Snake" tags={['CONCEPT']} filterImages={filterImages} />

    {/*WEB*/}


  </MiniGallery>
);

const Gallery = ({ src, alt, tags, filterImages }) => (
  <div data-tags={tags.join(' ')} className="gallery-item" style={{ display: filterImages(tags) ? 'block' : 'none' }}>
    <StyledImage altText={alt}>
      <StyledImageContent src={src} alt={alt} loading="lazy" />
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