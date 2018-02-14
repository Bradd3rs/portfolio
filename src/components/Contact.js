import React from 'react';
import styled from 'styled-components';

const Contact = () => (
    <Section>
        <Content>
            <h1>Contact</h1>
            <p>Content here</p>
        </Content>
    </Section>
 );

 export default Contact;

const Section = styled.section`
`;

const Content = styled.div`
    color: #212121;
    padding: 20px;
    max-width: 900px;
    margin: auto;
`;