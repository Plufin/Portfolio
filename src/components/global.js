import { createGlobalStyle } from 'styled-components';
import '@fontsource/montserrat';
import '@fontsource/oswald';


const themeDark = {
  text: '#E2EFF2',
  background: '#18171C',
  primary: '#47358C40',
  secondary: '#BDAEFF',
  accent: '#FCD864',
};
const GlobalStyle = createGlobalStyle`
  body {
    background: #18171C;
    margin-bottom: 100px;
  }

  .base {
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) { 
    height: auto;
  }
  
  h1 {
    font-size: 90px;
    font-family: Oswald;
    text-align: left;
    color: #EEF1DC;
    text-shadow: 2px 2px #212427;
  }

  h2 {
    font-size: 30px;
    font-family: Montserrat;
    text-align: left;
    color: #EEF1DC;
    text-shadow: 2px 2px #212427;
  }

  p {
    font-size: 18px;
    font-family: Montserrat;
    text-align: left;
    color: #F3F3E7;
  }
  button {
    font-family: Montserrat;
  }
  
  a {
    color: #CBCCAF;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }


  @media (min-width: 768px) {
    .content {
      flex-direction: row;
    }
  }
  @media (max-width: 768px) {
    /* Media query for smaller screens */
    h1 {
      font-size: 48px; 
    }
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 18px;
    }
  }
`;

export default GlobalStyle;