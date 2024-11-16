import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.fonts.main};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-size: 16px;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.main};
    color: ${(props) => props.theme.colors.text};
  }
`;

export { GlobalStyle };
