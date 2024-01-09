import Global from '../components/global';
import styled from 'styled-components';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { AiFillGithub } from 'react-icons/ai';

function Contact() {
  return (
    <div className="base">
      <Global />
      <Content>
        <Title>
          <h2>GET IN TOUCH</h2>
        </Title>
        <p>Pellentesque tortor augue, euismod in hendrerit interdum, tempor non sem. Fusce varius ut mi ut tristique. Aliquam ac ornare metus. Sed odio purus, fringilla eget lorem vitae, convallis aliquet neque. </p>
        <Info>
          <InfoItem>
            <IconContainer>
              <MdOutlineEmail />
            </IconContainer>
            <p>Email</p>
          </InfoItem>
          <InfoItem>
            <IconContainer>
              <CiLinkedin />
            </IconContainer>
            <p>LinkedIn</p>
          </InfoItem>
          <InfoItem>
            <IconContainer>
              <AiFillGithub />
            </IconContainer>
            <p>GitHub</p>
          </InfoItem>
        </Info>
      </Content>
    </div>
  );
}

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 15%;
  padding-right: 40%;
  padding-top: 100px;
`;


const Title = styled.div`
  border-bottom: 1px solid #FCD864;
  min-width: 150px;
  max-width: 350px;
  margin-bottom: 40px;
`;

const Info = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 15px;
`;

const IconContainer = styled.span`
  color: #E2EFF2;
  margin-right: 20px;
  font-size: 40px;
`;

export default Contact;