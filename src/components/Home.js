import React from 'react';
import styled from 'styled-components';
import Skillset from './Skillset';

const Home = () => (
    <Section>
        <Content>
            <h1>Hello</h1>
            <p>Here you'll find my personal web app. This is my playground and also where I show off just some of the awesome stuff I have been involved with. Take a look around, click on stuff and try to unlock all the easter eggs!</p>
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

    @media only screen and (min-width: 768px) {
        margin: 25px auto 0;
    }

    h1 {
        color: #1E88E5;
    }

    p {
        line-height: 21px;
    }
`;
