import { css } from 'styled-components';

const dirty = css`
  --rotate: -1deg;
  --scale: 1;
  background: var(--blue);
  background-size: 550px;
  transform: rotate(var(--rotate)) scale(var(--scale));
  &:after {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: 550px;
    pointer-events: none;
  }
`;

export default dirty;
