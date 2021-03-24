import React from 'react';
import Logo from '../images/logo.svg';
import {Link} from 'gatsby';
import styled, { css } from 'styled-components';

const NavStyles = styled.nav`
  border-bottom: 5px solid var(--blue);
  display: grid;
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
  background: var(--light);
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

// const Header = () => {
//   return ( 
//     // <header className="position-sticky">
//     //     <Navbar>
//     //       <Container className="d-flex justify-content-around">
//     //         <Nav className="d-none d-md-flex w-100 justify-content-around">
//     //           <Link to={'/about-me'} className="link-header-jucarlospm" activeClassName={'link-header-active-jucarlospm'}>Sobre mi</Link>
//     //           <Link to={'/projects'} className="link-header-jucarlospm" activeClassName={'link-header-active-jucarlospm'}>Proyectos</Link>
//     //         </Nav>
//     //         <div>
//     //           <Link to={'/'}><Image src={Logo} width="150px"/></Link>
//     //         </div>
//     //         <Nav className="d-none d-md-flex w-100 justify-content-around">
//     //           <Link to={'/blog'} className="link-header-jucarlospm" activeClassName={'link-header-active-jucarlospm'}>Blog</Link>
//     //           <Link to={'/contact-me'} className="link-header-jucarlospm" activeClassName={'link-header-active-jucarlospm'}>Contacto</Link>
//     //         </Nav>
//     //       </Container>
//     //     </Navbar>
//     // </header>
//     <NavUl ref={ref}>
//         <NavLi row={getRow(0)}>
//           <Link to="/courses">
//             <small className="top">free + premium</small>
//             <H as="span">Courses</H>
//             <small className="bottom hideYoSelf">x</small>
//           </Link>
//         </NavLi>
//         <NavLi row={getRow(1)}>
//           <a href="https://syntax.fm" target="_blank" rel="noreferrer noopener">
//             <small className="top">The Syntax</small>
//             <H as="span">Podcast</H>{' '}
//             <small className="bottom">Web Development</small>
//           </a>
//         </NavLi>
//         <NavLi row={getRow(2)}>
//           <Link to="/about">
//             <small className="top">more</small>
//             <H as="span">About</H>
//             <small className="bottom">me</small>
//           </Link>
//         </NavLi>

//         <NavLi row={getRow(3)}>
//           <Link
//             to="/blog"
//             className={
//               pageContext.collection === 'post' &&
//               !pageContext.slug.includes('uses')
//                 ? 'current-parent'
//                 : null
//             }
//           >
//             <small className="top">the</small>
//             <H as="span">Blog</H>
//             <small className="bottom hideYoSelf">x</small>
//           </Link>
//         </NavLi>
//         <NavLi row={getRow(4)}>
//           <Link
//             to="/tips"
//             className={
//               pageContext.collection === 'tip' ? 'current-parent' : null
//             }
//           >
//             <small className="top">🔥</small>
//             <H as="span">Tips</H>
//             <small className="bottom">real spicy</small>
//           </Link>
//         </NavLi>
//         <NavLi row={getRow(5)}>
//           <Link to="/speaking-and-training">
//             <small className="top">real life</small>
//             <H as="span">Speaking</H>{' '}
//             <small className="bottom">and training</small>
//           </Link>
//         </NavLi>
//         <NavLi row={getRow(6)}>
//           <Link to="/uses">
//             <small className="top">what font?!</small>
//             <H as="span">/uses</H>{' '}
//             <small className="bottom">what theme!?</small>
//           </Link>
//         </NavLi>
//         <NavLi row={getRow(7)}>
//           <Link to="/contact">
//             <small className="top">You want to</small>
//             <H as="span">Contact</H>
//             <small className="bottom">me</small>
//           </Link>
//         </NavLi>
//       </NavUl>
//    );
// }
 
// export default Header;