import {graphql, useStaticQuery} from 'gatsby';

const useTecnologias = () => {
  // const datos = useStaticQuery(
  //   graphql`
  //   {
  //     allStrapiTecnologias {
  //       nodes {
  //         nombre
  //         seniority
  //         id
  //         logo {
  //           publicURL
  //         }
  //       }
  //     }
  //   }     
  //   `
  // );
  // console.log(datos);
  // return datos.allStrapiTecnologias.nodes.map(tecnologia => ({
  //   nombre: tecnologia.nombre,
  //   id: tecnologia.id,
  //   seniority: tecnologia.seniority,
  //   logo: tecnologia.logo.publicURL,
  // }));
}
 
export default useTecnologias;