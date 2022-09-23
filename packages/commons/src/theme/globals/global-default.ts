/* istanbul ignore file */
import { createGlobalStyle } from 'styled-components';
import { IGlobalDefault } from '@tidy-ui/types';
import { color, css, hsla } from '..';

const GlobalDefault = createGlobalStyle<IGlobalDefault>`
  ${({ theme: { font, palette, isDark } }) => css`
    html {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: 16px;
    }

    body {
      color: ${palette.text.primary};
      min-height: 100vh;
      height: 100%;
      letter-spacing: 0.025rem;
      line-height: 1;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
    }

    img {
      height: auto;
      max-width: 100%;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    button {
      appearance: none;
      background-color: transparent;
      cursor: pointer;
      display: inline-block;
      line-height: 1;
    }

    b {
      margin: 0 1ch;
      font-weight: ${font.bold};
    }
    u {
      margin: 0 1ch;
      text-decoration: underline;
    }
    i {
      margin: 0 1ch;
      font-style: italic;
    }
    s {
      margin: 0 1ch;
      text-decoration: line-through;
    }
    code {
      margin: 0 1ch;
      font-family: ${font.mono};
      font-weight: ${font.regular};
      padding: 0 0.25em;
      border-radius: 4px;
      background-color: ${isDark ? hsla(color.yellow[800], 0.7) : hsla(color.yellow[100])};
      color: ${hsla(color.red[500])};
    }
  `}
`;

export { GlobalDefault };
