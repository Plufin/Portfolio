import Global from '../components/global';
import styled from 'styled-components';


function Gallery() {
  return (
    <div className="base">
      <Global />
      <Main>
        <All>
          <h2>ALL</h2>
        </All>
        <Filter>
          <h2>COMISSION</h2>
          <h2>DIGITAL</h2>
          <h2>TRADITIONAL</h2>
          <h2>WEB DESIGN</h2>
          <h2>TATTOO</h2>
        </Filter>
        <Media>
          <h2>Gallery</h2>
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
flex - direction: row;
align - items: center;
justify - content: baseline;
background - color: #47358c40;
`;

const Media = styled.div`
flex: 1;
display: flex;
flex - direction: row;
align - items: center;
background- color: #47358c40;
`;

export default Gallery;