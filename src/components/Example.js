import React from 'react';
import styled from 'styled-components';

class Example extends React.Component {
    render() {
        const Section = styled.a`
            background-image: url(${this.props.bgImage});
            border: 1px solid #f1f1f1;
            background-size: cover;
            margin: 1px 0;
            width: 49%;
            max-width: 400px;
            height: 170px;
            transform: translateY(0);
            box-shadow: 0 10px 20px rgba(0,0,0,0), 0 6px 6px rgba(0,0,0,0);
            transition: transform .3s ease-out, box-shadow .3s ease-out;
        
            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
            }

            @media only screen and (min-width: 768px) {
                height: 250px;
                margin: 10px 0;
            }
        `;
        return (
            <Section href={this.props.url} target="_blank">
            </Section>
        );
    }
}

 export default Example;