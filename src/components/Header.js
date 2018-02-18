import React from "react";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import Home from './Home';
import Work from './Work';
import Contact from './Contact';
import Ctoss from './Ctoss';
import NotFound from './NotFound';
import Img from '../img/bannerImg.jpg';
import { FaDiamond } from 'react-icons/lib/fa';

const Header = ({ addCredit, credits }) => (
  <Router>
    <div>
      <NavContainer>
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
          { credits >= 15 ?
            <li>
              <NavLink activeClassName="selected" to="/ctoss"><FaDiamond /></NavLink>
            </li>
            :
            null
          }
        </Navigation>

        <Section>
            <h1 onClick={ credits < 10 ? addCredit : null } >Thomas Bradley</h1>
            <p>A passionate web developer focussed on building fast, beautiful web apps { credits >= 9 && credits ? 
              <FaDiamond onClick={ credits >= 10 && credits < 15  ? addCredit : null } className={`easter-egg ${ credits >= 10 ?
                'reveal' 
                : 
                null }`} /> 
              : 
              null }</p>
        </Section>

      </NavContainer>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
        { credits >= 15 ? <Route path="/ctoss" component={Ctoss} /> : null }
        <Route component={NotFound} />
      </Switch>
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

    .easter-egg {
      opacity: 0;
      transition: opacity .5s ease-out;

      &.reveal {
        opacity: 1;
      }
    }

    h1 {
      cursor: pointer;
    }
    
    p {
        max-width: 400px;
        line-height: 25px;
    }
`;