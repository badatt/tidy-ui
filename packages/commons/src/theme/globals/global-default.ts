/* istanbul ignore file */
import { createGlobalStyle } from 'styled-components';
import { IGlobalDefault } from '@tidy-ui/types';
import { css } from '..';

const GlobalDefault = createGlobalStyle<IGlobalDefault>`
  ${({ theme: { font, palette } }) => css`
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
      font-weight: ${font.bold};
    }
    u {
      text-decoration: underline;
    }
    i {
      font-style: italic;
    }
    s {
      text-decoration: line-through;
    }
  `}
`;

export { GlobalDefault };
