import React from 'react';
import Logo from '../images/logo.svg';
import {Link} from 'gatsby';
import styled, { css } from 'styled-components';

const NavStyles = styled.nav`
  border-bottom: 5px solid var(--blue);
  display: grid;
  background: var(--light);
  h1 {
    display: grid;
    justify-items: center;
    margin-bottom: -4rem;
    z-index: 2;
  }
  @media (max-width: 550px) {
    ul {
      padding: 2.5rem 1rem 0;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      a > span {
        display: block;
        padding: 1rem 0;
      }
      span.grit {
        margin: 0;
      }
      a:hover {
        span:before {
          display: none;
        }
      }
    }
  }
`;

const NavUl = styled.ul`
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
  @media (max-width: 550px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
`;

const NavLi = styled.li`
  display: grid;
  align-items: start;
  align-content: center;
  grid-gap: 2rem;
  margin: 1rem;
  .hideYoSelf {
    visibility: hidden;
  }
  ${(props) =>
    props.row >= 2 &&
    css`
      margin: 0;
      & > *,
      span {
        transform: scale(0.55);
      }
    `}
  a {
    &:before {
      height: 0px;
    }
    font-size: 3.5rem;
    font-family: 'Fabulous50';
    color: var(--dark);
    text-decoration: none;
    line-height: 1;
    &[aria-current='page'],
    &.current-parent {
      .grit {
        text-decoration: underline;
        text-decoration-color: var(--blue);
      }
    }
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    margin: 0;
    text-align: center;
    /* This gets rid of the X */
    &:after {
      display: none;
    }
    a {
      &:before {
        display: none;
      }
    }
    & > *,
    span {
      transform: scale(1);
      font-size: 1.7rem;
    }
    span.grit {
      padding: 0;
    }
  }
`;

export default function Header() {
  return (
    <NavStyles>
      <NavUl>
        <NavLi>
          <Link to={'/about-me'} activeClassName={'link-header-active-jucarlospm'}>
            Sobre mi
          </Link>
        </NavLi>
        <NavLi >
          <Link to={'/projects'} activeClassName={'link-header-active-jucarlospm'}>
            Proyectos
          </Link>
        </NavLi>
        <NavLi >
          <Link to="/">
            <img
              width="200"
              src={Logo}
              alt="Juan Carlos Peña"
            />
          </Link>
        </NavLi>
        <NavLi>
          <Link to={'/blog'} activeClassName={'link-header-active-jucarlospm'}>
            Blog
          </Link>
        </NavLi>
        <NavLi >
          <Link to={'/contact-me'} activeClassName={'link-header-active-jucarlospm'}>
            Contacto
          </Link>
        </NavLi>
      </NavUl>
    </NavStyles>
  );
}