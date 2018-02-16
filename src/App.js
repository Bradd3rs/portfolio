import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import EasterEgg from './components/EasterEgg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credits: 0
    }
    this.handleAddCredit = this.handleAddCredit.bind(this);
  }
  handleAddCredit() {
    this.setState((prevState) => ({ credits: prevState.credits + 1 }) )
  }
  render() {
    return (
      <Content>
        <Container>
          <Header credits={this.state.credits} addCredit={this.handleAddCredit} />
        { this.state.credits >= 100 ? <EasterEgg /> : null }
        </Container>
        <Footer credits={this.state.credits} />
      </Content>
    );
  }
}

export default App;

const Content = styled.section`
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  user-select: none;

  h1 {
    font-weight: 400;
  }
`;

const Container = styled.div`

  h1 {
    font-size: 1.5em;
    font-weight: 400;
  }

  p,
  li {
    font-weight: 300;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 400;
  }

  @media only screen and (min-width: 768px) {
    h1 {
      font-size: 2em;
    }

    p,
    li {
      letter-spacing: 1px;
    }
  }
`;

