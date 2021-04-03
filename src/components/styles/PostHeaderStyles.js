import styled from 'styled-components';

const PostHeaderStyles = styled.header`
  margin-bottom: 20px;
  h1 {
    margin-bottom: 0;
  }
  .postMeta {
    margin-top: 10px;
    font-size: 1.4rem;
    display: grid;
    grid-gap: 1rem;
    grid-auto-flow: column;
    justify-content: start;
    & > * {
      :not(:last-child):after {
        content: '×';
        margin-left: 1rem;
        color: var(--blue);
        font-weight: 600;
        font-style: normal;
      }
    }
  }
`;

export default PostHeaderStyles;
