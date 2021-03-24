import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Helmet } from 'react-helmet';
import Img from '../components/Img';
import Layout from '../components/Layout';
import H from '../components/mdxComponents/Headings';
import TipStyles from '../components/styles/TipStyles';
import Pagination from '../components/Pagination';
import { PostMetaTags } from '../components/MetaTags';

export default function ProjectsPage({
  data: { allMdx: projects },
  pageContext,
  path,
}) {
  return (
    <Layout>
      <Helmet>
        <title>{`Hot Tips — Page ${pageContext.currentPage}`}</title>
      </Helmet>
      <H>🔥 There are {projects.totalCount} Hot Tips</H>
      <p>
        Hot tips are spicy lil' nuggets related to web development and tooling
        that I share on{' '}
        <a href="https://twitter.com/wesbos">my twitter account</a>. I've logged
        them here to make them easier to find.
      </p>
      <Pagination
        currentPage={pageContext.currentPage}
        totalCount={projects.totalCount}
        pathPrefix="/projects/"
      />
      <div>
        {projects.edges.map(({ node: project }, i) => (
          <TipStyles key={`${project.frontmatter.slug}-${i}`}>
            <Link to={`/tip/${project.frontmatter.slug}`}>
              {project.frontmatter.videos &&
                project.frontmatter.videos.map(url => (
                  <video src={url} key={url} autoPlay mute="true" loop />
                ))}
              {project.frontmatter.images &&
                project.frontmatter.images.map((image, i) => (
                  <Img image={image} key={`image${i}`} />
                ))}
            </Link>
            <div className="tipContent">
              <MDXRenderer>{project.body}</MDXRenderer>
            </div>
          </TipStyles>
        ))}
      </div>
      <PostMetaTags
        post={{
          frontmatter: {
            slug: path,
            title: `🔥 Hot Projects ${
              pageContext.currentPage ? `- Page ${pageContext.currentPage}` : ''
            }`,
          },
        }}
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  query Projects($skip: Int! = 0) {
    allMdx(
      filter: { fields: { collection: { eq: "project" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            slug
            date
            tweetURL
            images {
              ...ImageFields
            }
            videos
          }
          body
        }
      }
    }
  }
`;
