import Global from '../components/global';
import styled from 'styled-components';
import ToggleSkills from '../components/skills/toggleSkills';

function Skills() {
  return (
    <div className="base">
      <Global />
      <Content>
        <Container>
          <ToggleSkills />
        </Container>
      </Content>
    </div>
  );
}

const Content = styled.div`
display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  align-content: center;
  `;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #47358c40;
  width: 100%;
  max-width: 900px;
  height: 100%;
  max-height: 600px;
  padding: 60px 60px 60px 60px;
  `;


export default Skills;