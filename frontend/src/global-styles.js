import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Maven+Pro');
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700');
  ${reset}
  html, body, #root{
    width:100%;
    height:100%;
  }
  * {
    box-sizing: border-box;
  }
  *:focus{
    outline:none;
  }
  body{
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  a{
    color:inherit;
    text-decoration:none;
  }
  input,
  button{
    &.focus,
    &.active{outline:none}
  }
  h1,h2,h3,h4,h5,h6{
    font-family:'Maven Pro', sans-serif;
  }
`;

export default GlobalStyle;
