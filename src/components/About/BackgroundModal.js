import React from "react";
import styled from "styled-components";

const BackgroundModal = ({ onClose }) => {
  return (
    <ModalWrapper>
      <Close>
        <CloseButton onClick={onClose}>X</CloseButton>
      </Close>
      <TopicImage src={require('../Resources/Digital/fish.jpg')} alt="Fish" />
      <Content>
        <p>This won't be short and sweet sorry! But I suggest you to read <Extra>Osako-part</Extra> at least.</p>
        <p>
          Simply stating that I've been in a certain job doesn't convey enough about what I've learned and contributed in that position. </p>
        <h2>OSAKO (Vice Chair)</h2>
        <p>(Student Union of Oulu University of Applied Sciences)</p>
        <p>I was a board member for a year but rose to the position of Vice-Chair, where I currently act as a supervisor (alongside the chairwoman) for five full-time employees and three board members.</p>
        <li> <Extra>Leadership</Extra> – I hold a supervisor position as Vice-Chair. My responsibility is to stay informed about everything and act as a communicative link between the board, employees, and the chairperson. We work closely with the chairperson; they handle the paperwork, and I oversee the staff's activities. Together, we monitor the overall impact of everything.</li>
        <li><Extra>Teamwork & Communication</Extra> – I am in constant collaboration with my subordinates and other board members. I need to understand the workload of different individuals and stay informed about what each person is currently working on, all while managing my own tasks. As my team consists of 5 employees and 5 board members, I must always have a grasp of the big picture.</li>
        <li><Extra>Time Management</Extra> – I study full-time alongside all of this, yet I have risen to a leadership position in the board and have received a grade of 5 in each of my 15-credit projects, as in many other courses. This is not possible without effective time management.</li>
        <li><Extra>Problem Solving</Extra> – Osako's activities involve constant change and handling new situations. Nothing is straightforward. My actions affect the livelihood of five full-time employees, so I can't make decisions offhandedly; I justify my opinions with a long-term perspective.</li>
        <h2>Freelancer</h2>
        <p>In short, I worked as a freelancer in digital and traditional art. I had a sohrt interviews with clients and ask them to show a few example images, which they describe. Similar to agile methods in coding, I practice active communication with clients in my art and adapt the work as needed without the need for radical changes.</p>
        <h2>Lidl</h2>
        <li><Extra>Team Leader</Extra> - I was often the right-hand and took the duties of a shift leader if asked. My manager asked why I didn't apply for a shift leader position, but I was pursuing medical studies at the time, so I felt it was better for the company to train someone who intended to stay.</li>
        <li><Extra>Baking Station</Extra> – I was in charge of Lidl's bakery section, managing inventory as needed and ensuring the general cleanliness and maintenance of the area. I also trained new bakers.</li>
        <li><Extra>Cashier</Extra> – Speed and customer service.</li>
        <li><Extra>Mentor</Extra> – I served as a mentor for three new employees, guiding and training them when necessary.</li>
        <h2>TeleMarketing</h2>
        <li><Extra>Communicating</Extra> – I'm not the strongest talker, BUT I can speak to customers by putting myself in their shoes.</li>
        <li> <Extra>Listening</Extra> – This is why I can communicate. People feel heard and understood.</li>
        <li><Extra>Problem Solving</Extra> – I often come up with solutions to people's problems that they didn't realize existed. Good sides of imagination.</li>
      </Content>
      <Close>
        <CloseButtonBottom onClick={onClose}>CLOSE</CloseButtonBottom>
      </Close>
    </ModalWrapper>
  );
};

const Extra = styled.span`
  color: #BDAEFF;
  font-weight: bold;
`;


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
  backdrop-filter: blur(20px);
  overflow: scroll;

  h2 {
    border-bottom: 1px solid #FCD864;
    min-width: 150px;
    max-width: 350px;
    color: #FCD864;
    font-size: 30px;
  }

  li {
    line-height: 1.5;
    margin-bottom: 10px;
  }
`;

const Content = styled.div`
  padding: 20px;
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


export default BackgroundModal;