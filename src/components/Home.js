import React from 'react';
import styled from 'styled-components';
import Skillset from './Skillset';


const Home = () => (
    <Section>
        <Content>
            <h1>Hello.</h1>
            <p>Content here</p>
        </Content>
        <Skillset />
    </Section>
 );

 export default Home;

const Section = styled.section`
`;

const Content = styled.div`
    color: #212121;
    padding: 20px;
    max-width: 900px;
    margin: auto;
`;
