import React from 'react';
import styled from 'styled-components';

const Contact = () => (
    <Section>
        <Content>
            <h1>Get in touch</h1>
            <p>I am currently working full time at <a href="https://careers.betwaygroup.com/" target="_blank" rel="noopener noreferrer">Win Technologies</a> based in Camden, London. If you wish to reach out to me you will be able to do so via the listed methods.</p>
            <ul>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/thomas-s-bradley/" target="_blank" rel="noopener noreferrer">linkedin.com/in/thomas-s-bradley/</a></li>
                <li>GitHub: <a href="https://github.com/Bradd3rs/" target="_blank" rel="noopener noreferrer">github.com/Bradd3rs/</a></li>
                <li>Instagram: <a href="https://www.instagram.com/bradd3rss/" target="_blank" rel="noopener noreferrer">instagram.com/bradd3rss/</a></li>
            </ul>
        </Content>
    </Section>
 );

 export default Contact;

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

    ul {
        list-style: none;
        padding: 0;
    }

    p,
    li {
        line-height: 26px;
    }

    a {
        border-bottom: solid 1px transparent;
        transition: border-bottom-color .2s ease-out;

        &:hover {
          border-bottom: 1px solid #212121;
        }
    }
`;