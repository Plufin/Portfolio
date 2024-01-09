import React from 'react';
import styled from 'styled-components';
import Global from '../components/global.js';

const Contact = () => {
  return (
    <Container>
      <Global />
      <ContactTitle>Contact Me</ContactTitle>
      <ContactInfo>
        <p>Email: example@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Main Street, Cityville, State, 12345</p>
      </ContactInfo>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ContactTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const ContactInfo = styled.div`
  line-height: 1.6;

  p {
    margin-bottom: 15px;
  }
`;

export default Contact;
