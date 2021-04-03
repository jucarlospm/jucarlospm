import React from "react"
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import Img from '../components/Img';

import WidgetInstagram from "../components/widgetInstagram"
import styled from 'styled-components';

const FlexboxContainer = styled.div`
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  div {
    width: 50%;
    &:first-child {
      margin-right: 20px;
    }
  }
`;

const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: 10px;
  font-family: 'Fabulous50';
  font-weight: 300;
  font-size: 80px;
`;

const Subtitle = styled.h2`
  margin-top: 20px;
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
      <FlexboxContainer>
        <Title>Hola, soy Juan Carlos...</Title>
        <Img
          image={data.jucarlospm}
          alt="Juan Carlos Peña"
        />
      </FlexboxContainer>
      <Box>
        <Subtitle>Algunos de mis proyectos...</Subtitle>
        <div>  
            <p>
              Antes de empezar me gustaría exaltar el nombre de Dios, ya que por
              él es quien soy lo que soy actualmente. Agradecer a mis padres y a
              todas las personas que han confiado en mí. Ok, ahora si comencemos…
            </p>
            <p>
              Hola, mi nombre es Juan Carlos Peña Merlano (Ya se que lo dije
              arriba, pero pos si las moscas). Soy un desarrollador web de la
              ciudad de Cartagena, Colombia.
            </p>
            <p>
              Realizar aplicaciones en entornos web y sitios webs corporativos es
              mi pasión, y deseo que tu empresa, marca o proyecto personal haga
              parte de mi legado de trabajos.
            </p>
            <p>
              Te invito a que conozcas más de mí, de mis proyectos, des un paso a
              mí blog y si es posible por que no, trabajar juntos en tu próximo
              proyecto.
            </p>
          </div>
        </Box>
      <WidgetInstagram />
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

