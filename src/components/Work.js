import React from 'react';
import styled from 'styled-components';
import Example from './Example';

const Work = () => (
    <Section>
        <Content>
            <h1>Some things I've done.</h1>
            <p>Here are just some examples of projects I have worked on</p>
        </Content>
        <Examples>
            <Example />
            <Example />
            <Example />
            <Example />
        </Examples>
    </Section>
 );

 export default Work;

const Section = styled.section`
`;

const Content = styled.div`
    color: #212121;
    padding: 20px;
    max-width: 900px;
    margin: auto;
`;

const Examples = styled.div`
    max-width: 900px;
    margin: auto;
    display: flex;
    flex-flow: wrap;
    justify-content: space-evenly;
    margin-bottom: 20px;
`;