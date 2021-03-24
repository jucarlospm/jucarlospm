import React from 'react';
import { graphql } from 'gatsby';

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      frontmatter {
        title
        slug
        tweetURL
        date(formatString: "MMMM DD, YYYY")
        images {
            ...ImageFields
        }
        videos
      }
      body
    }
  }
`;

export default function ProjectTemplate({ data: { mdx: tip }, pageContext }) {
  return (
    <>
      <h1>Hola</h1>
    </>
  );
}
