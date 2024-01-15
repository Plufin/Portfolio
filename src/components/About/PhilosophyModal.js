import React from "react";
import styled from "styled-components";

const PhilosophyModal = ({ onClose }) => {
  return (
    <ModalWrapper>
      <Close>
        <CloseButton onClick={onClose}>X</CloseButton>
      </Close>
      <TopicImage src={require('../Resources/Digital/knot.jpg')} alt="Knot" />
      <h2>PhilosophyModal Is Under Construction.</h2>
      <h2>Thank you for your patience!</h2>
      <Text>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a tincidunt nisi, et dapibus mi. Nunc posuere sapien sed ultricies scelerisque. Duis convallis ornare diam vitae euismod. Cras massa leo, volutpat maximus sagittis euismod, ultrices nec enim. Nunc sit amet ullamcorper massa. Pellentesque blandit velit mi, et ultrices est efficitur quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est enim, sodales vel magna at, blandit imperdiet velit.</p>
        <p>Maecenas pharetra, ex sed convallis convallis, diam ex sollicitudin sem, sit amet auctor justo tortor vel orci. In in ornare nunc, vitae lacinia turpis. Vivamus in velit lacus. Vestibulum lobortis eros est, vel placerat lorem aliquet eget. Donec luctus, nulla vitae pellentesque egestas, tellus nisl fringilla diam, a blandit sapien arcu sed turpis. Vivamus eleifend ligula tempor lacus suscipit sodales. Mauris condimentum malesuada ligula, eu luctus lacus accumsan nec. Phasellus ante nulla, dapibus id quam vel, luctus viverra leo. Cras facilisis, ipsum id dignissim tempus, lacus est consequat eros, at pulvinar nisl orci congue ipsum.</p>
        <p>Proin ullamcorper, mi sed dapibus porta, sem nisi rhoncus ex, vitae sollicitudin urna mi eu orci. Aliquam tempor pharetra nulla et suscipit. Sed id cursus ligula, eu laoreet diam. Suspendisse quis mauris eu magna blandit tempor facilisis sed orci. Aliquam erat volutpat. Nullam condimentum diam sed velit pharetra vehicula. Etiam finibus placerat risus in placerat. Curabitur vehicula lacus ut purus viverra, et accumsan sapien ornare. Aliquam aliquet mauris sed enim auctor, sit amet maximus nibh pharetra. Curabitur finibus magna eros, id feugiat sapien tristique sed. Nulla facilisi. Nam facilisis lectus eget ante mattis semper. Aliquam leo eros, bibendum sit amet nibh at, convallis efficitur ante. Etiam tristique maximus turpis sit amet congue. Ut velit sapien, molestie in nunc quis, consectetur gravida magna. Sed aliquet odio a neque convallis imperdiet.</p>
        <p>Curabitur et velit non urna auctor vehicula vitae quis velit. Donec ipsum mauris, eleifend vel luctus vehicula, sagittis eget dui. Curabitur feugiat semper risus, at ultricies orci scelerisque in. Praesent a mauris porttitor, dapibus magna et, interdum enim. Suspendisse id tincidunt orci. Ut suscipit vel augue gravida faucibus. Pellentesque ornare ullamcorper turpis, sit amet rutrum mauris imperdiet auctor. Vestibulum elementum varius orci nec vulputate. Integer vulputate consectetur lectus quis congue. Cras sit amet hendrerit augue. Phasellus a faucibus mi. Donec leo leo, suscipit eget massa quis, elementum sodales nunc. Fusce malesuada tincidunt sem in vulputate. Nulla facilisi. Quisque lacinia molestie hendrerit. Suspendisse pulvinar et elit quis fringilla.</p>
      </Text>
      <Close>
        <CloseButtonBottom onClick={onClose}>CLOSE</CloseButtonBottom>
      </Close>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  width: 90%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #00000090;
  padding: 20px;
  padding-top: 300px;
  padding-bottom: 300px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  overflow: scroll;

  h2 {
    padding-left: 20px;
    color: #FCD864;
    font-size: 30px;
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #fff;
`;

const CloseButtonBottom = styled.button`
  background: #47358C;
  border: none;
  font-size: 25px;
  cursor: pointer;
  color: #FCD864;
  padding: 10px;
  border-radius: 8px;

  &:hover {
    background: #FCD864;
    color: #18171C;
  }
`;

const Close = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const TopicImage = styled.img`
  width: 100%;
  height: 30%;
  object-fit: cover;
`;

const Text = styled.div`
width: 90%;
  padding: 20px;
  padding-top: 0px;
  color: #fff;
  font-size: 20px;
  line-height: 1.5;
  overflow: y-scroll;
`;


export default PhilosophyModal;