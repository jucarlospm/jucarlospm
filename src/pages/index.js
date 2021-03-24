import React from "react"
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import Img from '../components/Img';

// import ListadoProyectos from "../components/listadoProyectos"
import WidgetInstagram from "../components/widgetInstagram"

export default function HomePage({ data, path }) {
  return (
    <Layout>
      <div>
        <div>
          <h1>Hola, soy Juan Carlos</h1>
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
        <div>
          <img
            image={data.jucarlospm}
            alt="Wes Bos sits at a table in the direct sunlight pretending to be on his computer"
          />
        </div>
      </div>
      {/* <ListadoProyectos /> */}
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

