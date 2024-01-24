import React from "react";
import styled from 'styled-components';

const getImageInfo = (folder, imageName, altText) => ({
  src: require(`../Resources/${folder}/${imageName}`),
  alt: altText,
});

const GalleryList = ({ filterImages, openModal }) => (
  <MiniGallery>
    {/*DIGITAL*/}
    {/*TOP*/}
    <Gallery src={require('../Resources/Digital/dragonPeace.png')} alt="Peace" tags={['COMMISSION', 'DIGITAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'dragonPeace.png'))} />
    <Gallery src={require('../Resources/Digital/alienBug.png')} alt="Alien Bug" tags={['COMMISSION', 'DIGITAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'alienBug.png'))} />
    <Gallery src={require('../Resources/Digital/phoenix.png')} alt="Phoenix" tags={['DIGITAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'phoenix.png'))} />
    <Gallery src={require('../Resources/Digital/predator.jpg')} alt="Predator" tags={['DIGITAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'predator.jpg'))} />
    <Gallery src={require('../Resources/Digital/Gargoyle.png')} alt="Gargoyle" tags={['DIGITAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'Gargoyle.png'))} />
    <Gallery src={require('../Resources/Digital/Wrath.png')} alt="Wrath" tags={['DIGITAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'Wrath.png'))} />
    <Gallery src={require('../Resources/Digital/camo.jpg')} alt="Camo" tags={['COMMISSION', 'DIGITAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'camo.jpg'))} />
    <Gallery src={require('../Resources/Digital/cheetahHeaf.png')} alt="Cheetah Profile" tags={['COMMISSION', 'DIGITAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'cheetahHeaf.png'))} />
    <Gallery src={require('../Resources/Digital/wolverine.png')} alt="Wolverine" tags={['DIGITAL', 'COMMISSION']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'wolverine.png'))} />
    <Gallery src={require('../Resources/Digital/fish.jpg')} alt="Fish" tags={['DIGITAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'fish.jpg'))} />
    <Gallery src={require('../Resources/Digital/hex.jpg')} alt="Hex" tags={['COMMISSION', 'DIGITAL', 'TATTOO']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'hex.jpg'))} />
    <Gallery src={require('../Resources/Digital/knot.jpg')} alt="Knot" tags={['DIGITAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'knot.jpg'))} />

    {/*MID*/}
    <Gallery src={require('../Resources/Digital/raikou.jpg')} alt="Raikou" tags={['DIGITAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'raikou.jpg'))} />
    <Gallery src={require('../Resources/Digital/Cheetah.png')} alt="Cheetah" tags={['DIGITAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'Cheetah.png'))} />
    <Gallery src={require('../Resources/Digital/craweler.jpg')} alt="Craweler" tags={['DIGITAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'craweler.jpg'))} />
    <Gallery src={require('../Resources/Digital/dog.jpg')} alt="Dog" tags={['COMMISSION', 'DIGITAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'dog.jpg'))} />
    <Gallery src={require('../Resources/Digital/dragon.jpg')} alt="Dragon" tags={['DIGITAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'dragon.jpg'))} />
    <Gallery src={require('../Resources/Digital/future.png')} alt="Future" tags={['COMMISSION', 'DIGITAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'future.png'))} />
    <Gallery src={require('../Resources/Digital/Gargoyle.png')} alt="Gargoyle" tags={['DIGITAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'Gargoyle.png'))} />
    <Gallery src={require('../Resources/Digital/Infans.png')} alt="Infans" tags={['DIGITAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'Infans.png'))} />
    <Gallery src={require('../Resources/Digital/ludwig.jpg')} alt="Ludwig" tags={['DIGITAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'ludwig.jpg'))} />
    <Gallery src={require('../Resources/Digital/tommy.jpg')} alt="Tommy" tags={['DIGITAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'tommy.jpg'))} />
    <Gallery src={require('../Resources/Digital/vicar.jpg')} alt="Vicar" tags={['DIGITAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'vicar.jpg'))} />
    <Gallery src={require('../Resources/Digital/cave.jpg')} alt="Cave" tags={['COMMISSION', 'DIGITAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'cave.jpg'))} />

    <Gallery src={require('../Resources/Digital/Horse.png')} alt="Horse" tags={['DIGITAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Digital', 'Horse.png'))} />

    {/*TRADITIONAL*/}
    <Gallery src={require('../Resources/Traditional/fox.png')} alt="Fox" tags={['TRADITIONAL', 'COMMISSION']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Traditional', 'fox.png'))} />
    <Gallery src={require('../Resources/Traditional/Lost.png')} alt="Lost" tags={['TRADITIONAL']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Traditional', 'Lost.png'))} />
    <Gallery src={require('../Resources/Traditional/manedWolf.png')} alt="Maned Wolf" tags={['TRADITIONAL', 'COMMISSION']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Traditional', 'manedWolf.png'))} />
    {/*TATTOO*/}
    <Gallery src={require('../Resources/Tattoo/element2.jpg')} alt="Elements2" tags={['TATTOO', 'COMMISSION']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Tattoo', 'element2.jpg'))} />
    <Gallery src={require('../Resources/Tattoo/backTattoo.png')} alt="Back" tags={['TATTOO', 'COMMISSION']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Tattoo', 'backTattoo.png'))} />
    <Gallery src={require('../Resources/Tattoo/tomiTattoo.png')} alt="Hybrid" tags={['TATTOO', 'COMMISSION']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Tattoo', 'tomiTattoo.png'))} />
    <Gallery src={require('../Resources/Tattoo/element.jpg')} alt="Elements" tags={['TATTOO', 'COMMISSION']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Tattoo', 'element.jpg'))} />
    <Gallery src={require('../Resources/Tattoo/Tree.jpg')} alt="Tree" tags={['TATTOO', 'COMMISSION']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Tattoo', 'Tree.jpg'))} />
    {/*SKETCH*/}
    <Gallery src={require('../Resources/Sketch/creature.png')} alt="Rock" tags={['SKETCH']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Sketch', 'creature.png'))} />
    {/*CONSEPT*/}
    <Gallery src={require('../Resources/Concept/grass.png')} alt="Grass" tags={['CONCEPT', 'COMMISSION']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Concept', 'grass.png'))} />
    <Gallery src={require('../Resources/Concept/headpiece.jpg')} alt="Headpiece" tags={['CONCEPT', 'COMMISSION']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Concept', 'headpiece.jpg'))} />
    <Gallery src={require('../Resources/Concept/snake.png')} alt="Snake" tags={['CONCEPT']} filterImages={filterImages} openModal={() => openModal(getImageInfo('Concept', 'snake.png'))} />

    {/*WEB*/}


  </MiniGallery>
);

const Gallery = ({ src, alt, tags, filterImages, openModal }) => (
  <div data-tags={tags.join(' ')} className="gallery-item" style={{ display: filterImages(tags) ? 'block' : 'none' }} onClick={openModal}>
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
    color: #fff;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
    box-sizing: border-box;
    border-radius: 8px;
    text-align: center;
    z-index: 100;
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
  align-items: flex-start;
  width: 100%;
flex-wrap: wrap;
align-items: flex-start;

`;


export default GalleryList;