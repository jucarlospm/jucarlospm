import {graphql, useStaticQuery} from 'gatsby';

const useProyectos = () => {
  // const datos = useStaticQuery(
  //   graphql`
  //     query {
  //       allStrapiProyectos {
  //         nodes {
  //           id
  //           portada {
  //             publicURL
  //           }
  //           titulo
  //           descripcionCorta
  //         }
  //       }
  //     }
  //   `
  // );
  
  // return datos.allStrapiProyectos.nodes.map(proyecto => ({
  //   titulo: proyecto.titulo,
  //   id: proyecto.id,
  //   descripcionCorta: proyecto.descripcionCorta,
  //   portada: proyecto.portada.publicURL,
  // }));
}
 
export default useProyectos;