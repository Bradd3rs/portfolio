import React from 'react';
import styled from 'styled-components';
import { FaDiamond } from 'react-icons/lib/fa';


const EasterEgg = () => (
    <Section>
        <Content>
            <h1>Congratulations!</h1>
            <p>You unlocked the first secret by earning 10 diamonds! <FaDiamond /></p>
            </Content>
    </Section>
 );

 export default EasterEgg;

const Section = styled.section`
`;

const Content = styled.div`
    color: #212121;
    padding: 20px;
    max-width: 900px;
    margin: auto;
    text-align: right;

    p {
        line-height: 21px;
    }
`;
