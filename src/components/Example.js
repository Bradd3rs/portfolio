import React from 'react';
import styled from 'styled-components';

const Example = ({ url }) => (
    <Section>
    </Section>
 );

 export default Example;

 const Section = styled.div`
    background: red;
    border: 5px solid papayawhip;
    margin: 10px 0;
    width: 100%;
    max-width: 400px;
    height: 250px;
    opacity: .7;
    transform: translateY(0);
    transition: opacity .3s ease-in-out, transform .3s ease-out;

    &:hover {
        opacity: 1;
        transform: translateY(-3px);
    }
 `;