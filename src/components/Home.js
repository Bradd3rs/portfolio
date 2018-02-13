import React from 'react';
import styled from 'styled-components';

const Home = () => (
    <Section>
        <h1>Thomas Bradley</h1>
        <p>A passionate web developer focussed on building fast, beautiful web apps.</p>
    </Section>
 );

 export default Home;

const Section = styled.section`
    padding: 20px;
    
    p {
        max-width: 400px;
        line-height: 25px;
    }
`;