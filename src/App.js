import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Img from '../src/lightStock.jpg';

class App extends Component {
  render() {
    return (
      <Content>
        <Header />
      </Content>
    );
  }
}

export default App;

const Content = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Lato');
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
  background-image: url(${Img});
  background-size:cover;
  box-shadow:inset 0 0 0 2000px rgba(52, 73, 93,0.4);
  height: 300px;
  color: white;

  h1 {
    font-size: 2em;
  }

  p {
    font-weight: 300;
    letter-spacing: 2px;
  }
`;
