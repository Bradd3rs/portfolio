import React from 'react';
import styled from 'styled-components';
import Example from './Example';
import BwgImg from '../img/bwg.png';
import BwcImg from '../img/bwc.png';

const Work = () => (
    <Section>
        <Content>
            <h1>Some things I've done</h1>
            <p>Here are just some examples of projects I have worked on, some commercial and some just for fun!</p>
        </Content>
        <Examples>
            <Example url="https://careers.betwaygroup.com/" bgImage={BwgImg} />
            <Example url="https://casino.betway.com/lobby/" bgImage={BwcImg} />
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

    h1 {
        color: #1E88E5;
    }   

    p {
        line-height: 21px;
    }
`;

const Examples = styled.div`
    max-width: 900px;
    margin: auto;
    display: flex;
    flex-flow: wrap;
    justify-content: space-evenly;
    margin-bottom: 20px;
`;