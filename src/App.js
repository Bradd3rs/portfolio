import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credits: 1
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
          <Header addCredit={this.handleAddCredit} />
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

  h1 {
    font-weight: 400;
  }
`;

const Container = styled.div`

  h1 {
    font-size: 1.5em;
    font-weight: 400;
  }

  p {
    font-weight: 300;
  }

  @media only screen and (min-width: 768px) {
    h1 {
      font-size: 2em;
    }

    p {
      letter-spacing: 1px;
    }
  }
`;

