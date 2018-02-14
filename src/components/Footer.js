import React from 'react';
import styled from 'styled-components';
import { FaGithubSquare, FaLinkedinSquare, FaInstagram, FaEnvelopeSquare } from 'react-icons/lib/fa'

const Footer = () => (
    <Section>
        <FooterSection>
            <h1>Contact</h1>
            <p>Please contact me via any of the following social media</p>
            <Social>
                <FaGithubSquare />
                <FaLinkedinSquare />
                <FaInstagram />
                <FaEnvelopeSquare />
            </Social>
        </FooterSection>
    </Section>
 );

 export default Footer;

 const Section = styled.section`
    background: #673AB7;
    color: white;
`;

const FooterSection = styled.footer`
    margin: auto;
    max-width: 900px;
    padding: 40px 20px;
    
    p {
        line-height: 25px;
        font-weight: 200;
        letter-spacing: 2px;
    }
`;  

const Social = styled.div`
    display: flex;
    justify-content: left;
    font-size: 40px;

    > * {
        margin: 5px;

        &:first-child {
            margin-left: 0;
        }
    }

`;