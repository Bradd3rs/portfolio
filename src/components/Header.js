import React from "react";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './Home';
import Work from './Work';
import Contact from './Contact';

const Header = () => (
  <Router>
    <div>
      <Navigation>
        <li>
          <NavLink activeClassName="selected" to="/" exact={true}>Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/work">Work</NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/contact">Contact</NavLink>
        </li>
      </Navigation>

      <Route exact path="/" component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

export default Header;

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
      max-width: none;
      justify-content: flex-end;

      li {
        margin: 0 20px;
      }
    }
`;