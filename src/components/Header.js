import React from "react";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './Home';
import Work from './Work';
import Contact from './Contact';
import Img from '../img/lightStock.jpg';

const Header = ({ addCredit }) => (
  <Router>
    <div>
      <NavContainer>
        <Navigation>
          <li>
            <NavLink onClick={addCredit} activeClassName="selected" to="/" exact={true}>Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/work">Work</NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/contact">Contact</NavLink>
          </li>
        </Navigation>

        <Section>
            <h1>Thomas Bradley</h1>
            <p>A passionate web developer focussed on building fast, beautiful web apps</p>
        </Section>

      </NavContainer>

      <Route exact path="/" component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

export default Header;

const NavContainer = styled.div`
  margin: auto;
  background-image: url(${Img});
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(52, 73, 93,0.4);
  height: 220px;
  color: white;

  @media only screen and (min-width: 768px) {
    height: 300px;
  }
`;

const Navigation = styled.ul`
    list-style: none;
    text-align: center;
    max-width: 30px;
    margin: auto;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;

    li {
        margin: 0 10px;
        border-bottom: solid 1px transparent;
        transition: border-bottom-color .2s ease-out;

        &:hover {
          border-bottom: 1px solid white;
        }

        a {
            font-weight: 300;
            color: white;
            text-decoration: none;
        }
    }

    @media only screen and (min-width: 768px) {
      max-width: 900px;
      justify-content: flex-end;

      li {
        margin: 0 20px;
      }
    }
`;

const Section = styled.section`
    padding: 20px;
    max-width: 900px;
    margin: auto;
    
    p {
        max-width: 400px;
        line-height: 25px;
    }
`;