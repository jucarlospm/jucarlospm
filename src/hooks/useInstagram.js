import { graphql, useStaticQuery } from "gatsby"

const useInstagram = () => {
  const datos = useStaticQuery(
    graphql`
      {
        allInstaNode(limit: 12, sort: {fields: timestamp, order: DESC}) {
          nodes {
            localFile {
              childImageSharp {
                fixed(height: 240, width: 240, quality: 100) {
                  src
                }
              }
            }
          }
        }
      }
    `
  )

  return datos.allInstaNode.nodes.map(instagram => ({
    src: instagram.localFile.childImageSharp.fixed.src,
  }))
}

export default useInstagram
