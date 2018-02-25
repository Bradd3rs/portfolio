import React from 'react';
import styled from 'styled-components';

const CoinToss = () => (
    <Section>
        <Content>
            Coin toss!
        </Content>
    </Section>
 );

 export default CoinToss;

const Section = styled.section`
`;

const Content = styled.div`
    max-width: 900px;
    margin: 0 auto 20px;
    display: flex;
    justify-content: space-evenly;
    flex-flow: wrap;

    @media only screen and (min-width: 768px) {
        justify-content: space-between;
        margin: 30px auto 50px;;

        img {
            max-height: 110px;
            margin: 10px;
        }
    }
`;
