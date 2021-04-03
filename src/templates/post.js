import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import YouTube from 'react-youtube';
import Layout from '../components/Layout';
import Img from '../components/Img';
import H from '../components/mdxComponents/Headings';
import ContentNav from '../components/ContentNav';
import PostHeaderStyles from '../components/styles/PostHeaderStyles';
import { PostMetaTags } from '../components/MetaTags';
import styled from 'styled-components';

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
      fileAbsolutePath
      frontmatter {
        title
        slug
        date(formatString: "MMMM DD, YYYY")
        image {
          ...ImageFields
        }
        category
      }
      body
    }
  }
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 20px;
  background: #fff;
  margin: 0 auto;
`;

function PostTemplate({ data: { mdx: post }, scope, pageContext }) {
  if (!post) {
    return <p>No Post Found? This should be a 404</p>;
  }

  return (
    <Layout>
      
      <Img image={post.frontmatter.image} alt={post.frontmatter.title} />
      <PostGrid>
        <PostHeaderStyles>
          <PostMetaTags post={post} />
          <H>{post.frontmatter.title}</H>
          <div className="postMeta">
            <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
            <span>{post.frontmatter.category.join(', ')}</span>
          </div>
        </PostHeaderStyles>
        <MDXRenderer
          scope={{
            YouTube,
            ...scope,
          }}
        >
          {post.body}
        </MDXRenderer>
      </PostGrid>
      <ContentNav
        pathPrefix={pageContext.pathPrefix}
        prev={pageContext.prev}
        next={pageContext.next}
      />      
    </Layout>
  );
}

export default PostTemplate;
