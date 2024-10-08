import { createGlobalStyle } from "styled-components";
import { Outlet } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    user-select:none;
    color: rgb(29,29,31);
    background-color: white;
    color: white;
    line-height: 1.2;
    overflow-x: hidden;
    font-family: 'Noto Sans KR', sans-serif;
  }
  p{
    line-height: 1.6;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a{
    text-decoration:none;
    &:link{
      color:rgb(29,29,31);
    }
    &:visited{
      color:rgb(29,29,31);
    }
  }
  *{
    box-sizing: border-box;
  }
  html {
    font-size: 14px;
  }
  input {
    border:none;
    outline:none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;
