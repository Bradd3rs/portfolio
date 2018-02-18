import React from 'react';
import styled from 'styled-components';

const NotFound = () => (
    <Section>
        <Content>
            <h1>404 - Page not found :(</h1>
            <p>The page you were looking for does not exist! Oops...!</p>
        </Content>
    </Section>
 );

 export default NotFound;

const Section = styled.section`
`;

const Content = styled.div`
    color: #212121;
    padding: 20px;
    max-width: 900px;
    margin: auto;

    @media only screen and (min-width: 768px) {
        margin: 25px auto;
    }

    h1 {
        color: #1E88E5;
    }

    p {
        line-height: 21px;
    }
`;
