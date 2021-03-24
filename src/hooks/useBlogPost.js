// import {graphql, useStaticQuery} from 'gatsby';

// const useBlogPost = () => {
//   const data = useStaticQuery(
//     graphql`
//       query {
//         allContentfulBlogPost {
//           nodes {
//             title
//             content {
//               raw
//             }
//             contentful_id
//             slug
//             categories {
//               id
//               title
//             }
//             publicationDate(formatString: "MMMM DD, yyyy")
//             coverImage {
//               resize(width: 228) {
//                 src
//               }
//             }
//           }
//           totalCount
//         }
//       }
//     `
//   );
  
//   return data.allContentfulBlogPost.nodes.map(blogPost => ({
//     id: blogPost.contentful_id,
//     title: blogPost.title,
//     content: blogPost.content,
//     slug: blogPost.slug,
//     categories: blogPost.categories,
//     publicationDate: blogPost.publicationDate,
//     coverImage: blogPost.coverImage.resize.src,
//   }));
// }
 
// export default useBlogPost;