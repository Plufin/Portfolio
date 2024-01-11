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
        <Header>
          <Title>
            <h2>GET IN TOUCH</h2>
          </Title>
        </Header>
        <Text>
          <p>
            Pellentesque tortor augue, euismod in hendrerit interdum, tempor non sem. Fusce varius ut mi ut tristique. Aliquam ac ornare metus. Sed odio purus, fringilla eget lorem vitae, convallis aliquet neque.
          </p>
        </Text>
        <Info>
          <InfoItem>
            <LinkContainer href="mailto:ervastipaula@gmail.com">
              <IconContainer>
                <MdOutlineEmail />
              </IconContainer>
              <p>Email</p>
            </LinkContainer>
          </InfoItem>
          <InfoItem>
            <LinkContainer href="https://www.linkedin.com/in/paula-ervasti-23b268258/">
              <IconContainer>
                <CiLinkedin />
              </IconContainer>
              <p>LinkedIn</p>
            </LinkContainer>
          </InfoItem>
          <InfoItem>
            <LinkContainer href="https://github.com/Plufin">
              <IconContainer>
                <AiFillGithub />
              </IconContainer>
              <p>GitHub</p>
            </LinkContainer>
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
  padding-top: 100px;

  @media (max-width: 768px) {
    padding-top: 50px;
`;

const Header = styled.div`
  margin-bottom: 40px;
  padding-left: 15%;
  padding-right: 40%;

  @media (max-width: 768px) {
    padding-left: 0px;
    width: 100%;
    border-bottom: 1px solid #FCD864;
  }
`;

const Title = styled.div`
  border-bottom: 1px solid #FCD864;
  min-width: 150px;
  max-width: 350px;

  @media (max-width: 768px) {
    padding-left: 5%;

  }
`;

const Info = styled.div`
padding-left: 15%;
padding-right: 40%;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

const Text = styled.div`
padding-left: 15%;
padding-right: 40%;
  padding-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: baseline;

  @media (max-width: 768px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

const InfoItem = styled.div`
margin-bottom: 20px;
`;

const LinkContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  text-decoration: none;
  `;

const IconContainer = styled.span`
color: #E2EFF2;
margin-right: 20px;
font-size: 40px;
align-self: center;

  &:hover {
  color: #FCD864;
}
`;

export default Contact;
