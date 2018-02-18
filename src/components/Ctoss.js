import React from 'react';
import styled from 'styled-components';

class Ctoss extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tom: 0,
            sam: 0,
            jc: 0,
            felix: 0
        }
        this.handleTom = this.handleTom.bind(this);
        this.handleSam = this.handleSam.bind(this);
        this.handleJc = this.handleJc.bind(this);
        this.handleFelix = this.handleFelix.bind(this);
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('scores');
            const scores = JSON.parse(json);

            if (scores) {
                this.setState(() => (scores));
            }
        } catch (e) {
            // Do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        const json = JSON.stringify(this.state);
        localStorage.setItem('scores', json);
    }
    handleTom() {
        this.setState((prevState) => ({ tom: prevState.tom + 1 }));
    }
    handleSam() {
        this.setState((prevState) => ({ sam: prevState.sam + 1 }));
    }
    handleJc() {
        this.setState((prevState) => ({ jc: prevState.jc + 1 }));
    }
    handleFelix() {
        this.setState((prevState) => ({ felix: prevState.felix + 1 }));
    }
    render() {
        return (
            <Section>
                <Content>
                    <Container>
                        <ScoreBlock>
                            <h2>Tom</h2>
                            <p>{this.state.tom}</p>
                            <button onClick={this.handleTom} type="button">Winner</button>
                        </ScoreBlock>
                        <ScoreBlock>
                            <h2>Sam</h2>
                            <p>{this.state.sam}</p>
                            <button onClick={this.handleSam} type="button">Winner</button>
                        </ScoreBlock>
                        <ScoreBlock>
                            <h2>JC</h2>
                            <p>{this.state.jc}</p>
                            <button onClick={this.handleJc} type="button">Winner</button>
                        </ScoreBlock>
                        <ScoreBlock>
                            <h2>Felix</h2>
                            <p>{this.state.felix}</p>
                            <button onClick={this.handleFelix} type="button">Winner</button>
                        </ScoreBlock>
                    </Container>
                </Content>
            </Section>
         );
    }
} 

 export default Ctoss;

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

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
const ScoreBlock = styled.div`
    text-align: center;

    h2 {
        font-weight: 300;
    }

    button {
        color: white;
        background: #0D47A1;
        padding: 10px 10px;
        margin: 0 5px;
        border: none;
        border-radius: 3px;
        outline: none;
        transform: translateY(0);
        box-shadow: 0 10px 20px rgba(0,0,0,0), 0 6px 6px rgba(0,0,0,0);
        transition: transform .2s ease-out, box-shadow .2s ease-out;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        }

        &:active {
            transform: translateY(0);
            box-shadow: 0 10px 20px rgba(0,0,0,0), 0 6px 6px rgba(0,0,0,0);
        }

        @media only screen and (min-width: 768px) {
            padding: 10px 15px;
        }
    }
`;


