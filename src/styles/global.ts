import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: var(--white);
    color: var(--secondary);
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
  }

  :root {
    --primary: #3D94F6;
    --secondary: #000000;
    --white: #ffffff;
  }
`;
