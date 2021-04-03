import React from "react"
import Logo from "../images/logo.svg"
import { Link } from "gatsby"
import styled from 'styled-components';

const FooterStyle = styled.footer`
  ul {
    list-style: none;
    padding-left: 0;
  }
  background-color: #fff;
  line-height: 1.5;
  border-top: 5px solid var(--blue);
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterMain = styled.section`
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  padding: 1.25rem 1.875rem;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (min-width: 29.8125rem /* 477px */) {
    justify-content: space-evenly;
  }

  @media only screen and (min-width: 77.5rem /* 1240px */) {
    justify-content: space-evenly;
  }
`;

const FooterItem = styled.div`
  padding: 1.25rem;
  min-width: 12.5rem;
  h2 {
    margin-top: 0px;
    margin-bottom: 10px;
  }
  ul{
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const FooterCredits = styled.section`
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (min-width: 29.8125rem /* 477px */) {
    justify-content: space-evenly;
  }

  @media only screen and (min-width: 77.5rem /* 1240px */) {
    justify-content: space-evenly;
  }
`;

const FooterSocial = styled.section`
  padding: 0 1.875rem 1.25rem;
  ul {
    display: flex;
    justify-content: center;
    border-top: 1px #777 solid;
    padding-top: 1.25rem;
    li {
      margin: 0.5rem;
      font-size: 1.25rem;
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <FooterMain>
        <FooterItem>
          <Link to="/">
            <img
              width="250"
              src={Logo}
              alt="Juan Carlos Peña"
            />
          </Link>
        </FooterItem>
        <FooterItem>
          <h2>Resources</h2>
          <ul>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">eBooks</a></li>
            <li><a href="#">Webinars</a></li>
          </ul>
        </FooterItem>
        <FooterItem>
          <h2>Contact</h2>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Sales</a></li>
            <li><a href="#">Advertise</a></li>
          </ul>
        </FooterItem>
        <FooterItem>
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter to get our latest news.</p>
          <form>
            <input type="email" name="email" placeholder="Enter email address"/>
            <input type="submit" value="Subscribe"/>
          </form>
        </FooterItem>
      </FooterMain>
      <FooterCredits>
        <h6>Otro</h6>
      </FooterCredits>

      {/* <FooterSocial>
        <ul class="ft-social-list">
          <li><a href="#"><i class="fab fa-facebook"></i></a></li>
          <li><a href="#"><i class="fab fa-twitter"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          <li><a href="#"><i class="fab fa-github"></i></a></li>
          <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
          <li><a href="#"><i class="fab fa-youtube"></i></a></li>
        </ul>
      </FooterSocial> */}

    </FooterStyle>
  )
}

export default Footer
