import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Content>
        <Container>
          <Header />
        </Container>
        <Footer />
      </Content>
    );
  }
}

export default App;

const Content = styled.section`
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
`;

const Container = styled.div`

  h1 {
    font-size: 2em;
    font-weight: 400;
  }

  p {
    font-weight: 300;
    letter-spacing: 1px;
  }
`;
