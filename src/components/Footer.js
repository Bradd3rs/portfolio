import React from 'react';
import styled from 'styled-components';
import Credits from './Credits';
import { FaGithubSquare, FaLinkedinSquare, FaInstagram, FaEnvelopeSquare} from 'react-icons/lib/fa';

const Footer = ({ credits }) => (
    <Section>
        <FooterSection>
            <h1>Contact</h1>
            <p>Please contact me via any of the following social media</p>
            <Social>
                <a href="https://github.com/Bradd3rs/" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
                <a href="https://www.linkedin.com/in/thomas-s-bradley/" target="_blank" rel="noopener noreferrer"><FaLinkedinSquare /></a>
                <a href="https://www.instagram.com/bradd3rss/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="http://www.google.com" target="_blank" rel="noopener noreferrer"><FaEnvelopeSquare /></a>
            </Social>
            { credits > 0 ? <Credits credits={credits} /> : null }
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

    a {
        color: white;
        cursor: pointer;
        text-decoration: none;
    }

    > * {
        margin: 5px;
        transform: translateY(0);
        transition: transform .3s ease-out;

        &:hover {
            transform: translateY(-3px);
        }

        &:first-child {
            margin-left: 0;
        }
    }

`;
