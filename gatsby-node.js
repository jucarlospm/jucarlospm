const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

async function makePostsFromMdx({ graphql, actions }) {
  const blogPost = path.resolve('./src/templates/post.js');
  const { errors, data } = await graphql(
    `
      {
        allMdx(
          filter: { fields: { collection: { eq: "post" } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              body
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );
  if (errors) {
    console.log(errors);
    throw new Error('There was an error');
  }
  const posts = data.allMdx.edges;
  posts.forEach((post, i) => {
    const prev = posts[i - 1];
    const next = posts[i + 1];
    actions.createPage({
      path: `/blog${post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        collection: 'post',
        prev,
        next,
        pathPrefix: '/blog',
      },
    });
  });
}

async function makeProjectsFromMdx({ graphql, actions }) {
  const projectTemplate = path.resolve('./src/templates/project.js');
  const { errors, data } = await graphql(
    `
      {
        allMdx(
          filter: { fields: { collection: { eq: "project" } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              body
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );
  if (errors) {
    console.log(errors);
    throw new Error('There was an error');
  }
  const projects = data.allMdx.edges;
  projects.forEach((project, i) => {
    // figure out if there is a prev and next project
    const prev = projects[i - 1];
    const next = projects[i + 1];
    actions.createPage({
      path: `/proyecto${project.node.fields.slug}`,
      component: projectTemplate,
      context: {
        slug: project.node.fields.slug,
        prev,
        collection: 'project',
        next,
        pathPrefix: '/proyecto',
      },
    });
  });
}

async function paginate({
  graphql,
  actions,
  collection,
  pathPrefix,
  component,
}) {
  const { errors, data } = await graphql(
    `
      {
        allMdx(filter: { fields: { collection: { eq: "${collection}" } } }) {
          totalCount
        }
      }
    `
  );
  if (errors) {
    console.log(errors);
    throw new Error('There was an error');
  }
  const { totalCount } = data.allMdx;
  const pages = Math.ceil(totalCount / 10);

  Array.from({ length: pages }).forEach((_, i) => {
    // for each page, use the createPages api to dynamically create that page
    actions.createPage({
      path: `${pathPrefix}${i + 1}`,
      component,
      context: {
        skip: i * 10,
        currentPage: i + 1,
      },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([
    makePostsFromMdx({ graphql, actions }),
    makeProjectsFromMdx({ graphql, actions }),
    paginate({
      graphql,
      actions,
      collection: 'post',
      pathPrefix: '/blog/',
      component: path.resolve('./src/pages/blog.js'),
    }),
    paginate({
      graphql,
      actions,
      collection: 'project',
      pathPrefix: '/projects/',
      component: path.resolve('./src/pages/projects.js'),
    }),
  ]);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    // if my posts have a slug in the frontmatter, it means I've specified what I want it to be. Otherwise I want to create one automatically

    // This is where we add our own custom fields to each node
    const generatedSlug = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value: node.frontmatter.slug
        ? `/${node.frontmatter.slug}/`
        : generatedSlug,
    });

    // Add it to a collection
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName,
    });
  }
};

// exports.createPages = async ({ actions, graphql  }) => {
//     const { createPage } = actions
  
//     const blogPosts = await graphql(`
//         {
//           allContentfulBlogPost {
//             nodes {
//                 title
//                 contentful_id
//                 slug
//                 categories {
//                   id
//                   title
//                 }
//                 publicationDate(formatString: "MMMM DD, yyyy")
//                 coverImage {
//                   resize(width: 228) {
//                     src
//                   }
//                 }
//                 content {
//                     content
//                 }
//               }
//                 totalCount
//             }
//         }
//     `)
  
//     paginate({
//       createPage,
//       items: blogPosts.data.allContentfulBlogPost.nodes,
//       itemsPerPage: 3,
//       pathPrefix: '/blog',
//       component: path.resolve('src/templates/blog.js'),
//     });
//   };
