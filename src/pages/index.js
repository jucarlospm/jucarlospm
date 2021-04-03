import React from "react"
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import Img from '../components/Img';

import WidgetInstagram from "../components/widgetInstagram"
import styled from 'styled-components';
import { PostMetaTags } from '../components/MetaTags';
import { Helmet } from 'react-helmet';

const FlexboxContainer = styled.div`
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  padding: 20px;
  div {
    width: 70%;
    &:first-child {
      margin: auto 0;
      margin-right: 20px;
    }
    &:last-child {
      width: 30%;
    }
  }
`;

const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: 10px;
  line-height: 9rem;
  font-weight: 800;
  font-size: 7rem;

  span {
    background: -webkit-linear-gradient( -70deg,rgb(179 240 249),rgb(41 171 226));
    background-image: -webkit-linear-gradient( -70deg,rgb(179 240 249),rgb(41 171 226));
  }
`;

const Subtitle = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'SFProDisplay', sans-serif;
  font-weight: 700 !important;
  font-weight: 300;
  font-size: 32px;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 20px 0px;
  padding: 20px;
  background: #fff;
`;

export default function HomePage({ data, path }) {
  return (
    <Layout>
      <PostMetaTags
        post={{
          frontmatter: {
            slug: path,
            title: 'Juan Carlos Peña',
          },
        }}
      />
      <Helmet
        htmlAttributes={{ lang: 'es' }}
        title="Juan Carlos Peña - Desarrollador Full Stack"
      />
      <FlexboxContainer>
        <div>
          <Title>Hola, soy <br/><span>Juan Carlos Peña</span></Title>
          <Subtitle>y soy un Desarrollador Full-Stack</Subtitle>
        </div>
        <Img
            image={data.jucarlospm}
            alt='Juan Carlos Peña'
          />
      </FlexboxContainer>
      <Box>
        <Subtitle>Hablemos un poco de mi...</Subtitle>
        <div>  
            <p>
              Hola, mi nombre es Juan Carlos Peña Merlano (ya se que lo dije
              arriba, pero pos si las moscas). Soy un desarrollador web full stack de la
              ciudad de Cartagena, Colombia.
            </p>
            <p>
              Todo lo que tenga <code>codigo</code> de por medio es mi pasión, aplicaciones en entornos 
              web, sitios webs corporativos, hasta un jueguito de triqui (tres en raya)
              disfruto hacer. Mi mayor deseo que tu empresa, marca o proyecto personal 
              haga parte de mi legado de trabajos.
            </p>
            <p>
              Te invito a que conozcas más de mí, de mis proyectos, des un paso a
              mí blog y si es posible por que no, trabajar juntos en tu próximo
              proyecto.
            </p>
          </div>
        </Box>
      {/* <WidgetInstagram /> */}
    </Layout>
  )
}

// this is silly
export const query = graphql`
  query {
    jucarlospm: file(relativePath: { eq: "juan-carlos-peña.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

