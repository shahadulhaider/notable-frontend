import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

import Button from '../components/Button';

const Nav = styled.nav`
  padding: 1em;
  background-color: #fafad2;

  @media (max-width: 700px) {
    padding-top: 64px;
  }

  @media (min-width: 700px) {
    position: fixed;
    width: 220px;
    height: 100%;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;

  a {
    text-decoration: none;
    color: #333;

    span {
      margin-right: 0.5em;
    }

    &:visited {
      color: #333;
    }

    &:hover,
    &:focus {
      color: #0077cc;
    }
  }
`;

function Navigation() {
  return (
    <Nav>
      <NavList>
        <li>
          <Link to='/'>
            <span aria-hidden='true' role='img'>
              🏠
            </span>
            Home
          </Link>
        </li>
        <li>
          <Link to='/mynotes'>
            <span aria-hidden='true' role='img'>
              📓
            </span>
            My Notes
          </Link>
        </li>
        <li>
          <Link to='/favorites'>
            <span aria-hidden='true' role='img'>
              ❤️
            </span>
            Favorites
          </Link>
        </li>
        <li>
          <Link to='/new' className='new'>
            <Button small>Create New</Button>
          </Link>
        </li>
      </NavList>
    </Nav>
  );
}

export default Navigation;
