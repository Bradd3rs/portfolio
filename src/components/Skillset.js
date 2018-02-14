import React from 'react';
import styled from 'styled-components';
import ReactImg from '../img/iconReact.png';
import AngularImg from '../img/iconAngular.png';
import HtmlImg from '../img/iconHtml.png';
import CssImg from '../img/iconCss.gif';

const Skillset = () => (
    <Section>
        <Content>
            <img alt="reactIcon" src={ReactImg} />
            <img alt="angularIcon" src={AngularImg} />
            <img alt="htmlIcon" src={HtmlImg} />
            <img alt="cssIcon" src={CssImg} />
        </Content>
    </Section>
 );

 export default Skillset;

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
        margin: 30px auto;
    }

    img {
        min-width: 100px;
        height: 100px;
        margin: 10px;
    }
`;
