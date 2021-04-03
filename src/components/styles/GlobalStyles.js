import { createGlobalStyle } from 'styled-components';
import font from '../../fonts/SFProDisplay-Regular.woff2';
import dirty from './Dirty';

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Fabulous50";
  src: url("../fonts/fabulous50.ttf")   format("truetype");
} 

@font-face {
  font-family: "SFProDisplay";
  src: url("../fonts/SFProDisplay-Thin.woff2") format("woff2");
  font-weight: 200;
}

@font-face {
  font-family: "SFProDisplay";
  src: url("../fonts/SFProDisplay-Light.woff2") format("woff2");
  font-weight: 300;
}

@font-face {
  font-family: "SFProDisplay";
  src: url("../fonts/SFProDisplay-Regular.woff2") format("woff2");
  font-weight: 400;
}

@font-face {
  font-family: "SFProDisplay";
  src: url("../fonts/SFProDisplay-Medium.woff2") format("woff2");
  font-weight: 500;
}

@font-face {
  font-family: "SFProDisplay";
  src: url("../fonts/SFProDisplay-Bold.woff2") format("woff2");
  font-weight: 700;
}
  :root {
    --blue: #29ABE2;
    --light: #ffffff;
    --dark: #000000;
    --lightGrey: #F2F4F9;
    --lightGray: var(--lightGrey);
    --imGoingToFaint: #fbfbfb;
    --maxWidth: 1200px;
  }
  html {
    --size: 40px;
    @media(max-width: 800px) {
      --size: 20px;
    }
    --borderSize: calc(var(--size) / 2);
    box-sizing: border-box;
    border: var(--borderSize) solid var(--dark);
    border-color: var(--dark);
    font-size: 10px;
    font-family: 'SFProDisplay', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: relative;
    color: var(--dark);
    &:after {
      box-sizing: content-box;
      display: block;
      content: '';
      height: 100%;
      width: 100%;
      position: absolute;
      top: calc(var(--borderSize) * -1);
      left: calc(var(--borderSize) * -1);
      z-index: -3;
      border: var(--borderSize) solid var(--dark);
    }
    &:before {
      box-sizing: content-box;
      display: block;
      content: '';
      height: calc(100% - var(--size));
      width: calc(100% - var(--size));
      position: absolute;
      top: calc(var(--size) * -0.5);
      left: calc(var(--size) * -0.5);
      z-index: -1;
      border: var(--size) solid transparent;
      background-size: 250px; */
    }
  }
  body {
    min-height: calc(100vh - 40px);
    font-size: 2rem;
    margin: 0px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'SFProDisplay';
    font-weight: bold;
  }
  a {
    color: var(--dark);
  }
  p, ul, ol {
    margin-top:0px;
    line-height: 1.5;
    font-weight: 300;
  }
  ul {
    list-style-type: square;
  }

  p a, li a {
    --rotate: -2deg;
    --scaleX: 1;
    /* display: inline-flex; */
    position: relative;
    &:before {
      /* display: inline-block; */
      height: 4px;
      position: absolute;
      background: var(--blue);
      content: '';
      width: 100%;
      bottom: -2px;
      transition: transform 0.1s;
    }
    &:hover {
      --scaleX: 1.03;
    }
  }

  p a:nth-child(4n+1) { --rotate: -2deg; }
  p a:nth-child(4n+2) { --rotate: 1.64deg; }
  p a:nth-child(4n+3) { --rotate: 0.6deg; }
  p a:nth-child(4n+4) { --rotate: -0.75deg; }

  p.small {
    font-size: 1.2rem;
  }

  :not(pre) > code {
    background: #f6f6f6;
    border: 1px solid rgba(0,0,0,0.05);
    padding: 0 3.5px;
  }

  pre[data-language] {
    border-radius: 0;
    padding: 3rem;
    line-height: 1.5;

  }
  pre {
    white-space: break-spaces;
  }
  code, kbd, samp {
    font-family: Consolas;
    font-weight: 300;
    font-size:18px
  }

  video {
    max-width: 100%;
  }

  .highlight {
    background-color: var(--blue);
    background-size: 500px;
    padding: 5px;
  }
  ::selection {
    background: var(--blue);
  }
  /* Scrollbar Styles */
    body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--blue) var(--dark);
  }
  body::-webkit-scrollbar-track {
    background: var(--dark);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--blue) ;
    border-radius: 6px;
    border: 3px solid var(--dark);
  }

  /* Button Styles */
  button:not(.snipcart button) {
    ${dirty}
    border: 0;
    font-weight: 900;
    padding: 1rem;
    cursor: pointer;
    --rotate: -1deg;
    transform: rotate(var(--rotate));
    &:hover {
      --rotate: 0.2deg;
      background-position: -200px;
    }
  }
`;
export default GlobalStyles;
