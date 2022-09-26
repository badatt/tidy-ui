/* istanbul ignore file */
import { createGlobalStyle } from 'styled-components';
import { color, css, hsla, IGlobalDefault } from '../../theme';

const GlobalDefault = createGlobalStyle<IGlobalDefault>`
  ${({ theme: { font, palette, isDark } }) => css`
    body {
      color: ${palette.text.primary};
      background: ${palette.background.default};
      min-height: 100vh;
      height: 100%;
      letter-spacing: 0.025rem;
      line-height: 1;
      font-size: 16px;
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

    /** Text styles */
    b,
    strong {
      margin: 0 1ch;
      font-weight: ${font.bold};
    }
    u,
    ins {
      margin: 0 1ch;
      text-decoration: underline;
    }
    i,
    em {
      margin: 0 1ch;
      font-style: italic;
    }
    s,
    del {
      margin: 0 1ch;
      text-decoration: line-through;
    }
    code {
      margin: 0 1ch;
      font-family: ${font.mono};
      font-weight: ${font.regular};
      padding: 0 0.2em;
      border-radius: 4px;
      border: 1px solid ${isDark ? hsla(color.slate[700]) : hsla(color.slate[300])};
      background-color: ${isDark ? hsla(color.slate[800]) : hsla(color.slate[200])};
      color: ${isDark ? hsla(color.orange[500]) : hsla(color.orange[700])};
    }
    small {
      margin: 0 1ch;
      font-size: 0.8em;
    }
    mark {
      margin: 0 1ch;
      background-color: ${isDark ? hsla(color.yellow[500]) : hsla(color.yellow[200])};
    }
    sub {
      margin-right: 1ch;
      vertical-align: sub;
      font-size: 0.8em;
    }
    sup {
      margin-right: 1ch;
      vertical-align: super;
      font-size: 0.8em;
    }
    blockquote {
      padding-left: 1rem;
      margin: 1rem 0;
      position: relative;
      &::before {
        content: '';
        background-color: currentColor;
        width: 4px;
        left: 0;
        top: 0;
        bottom: 0;
        display: block;
        position: absolute;
        border-radius: 8px;
      }
    }
    abbr {
      margin: 0 1ch;
      border-bottom: 1px dotted currentColor;
    }
    address {
      display: block;
      white-space: pre;
      font-style: italic;
      font-weight: ${font.regular};
    }
  `}
`;

export { GlobalDefault };
