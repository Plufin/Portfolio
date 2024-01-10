import Global from '../components/global';
import styled from 'styled-components';
import ToggleSkills from '../components/skills/toggleSkills';

function Skills() {
  return (
    <div className="base">
      <Global />
      <Content>
        <ToggleSkills />
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




export default Skills;