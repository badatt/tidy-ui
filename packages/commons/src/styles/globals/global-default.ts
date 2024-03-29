/* istanbul ignore file */
import { createGlobalStyle } from 'styled-components';
import { color, css, hsla, ITheme } from '../../theme';

const GlobalDefaultStyle = createGlobalStyle<ITheme>`
  ${({ theme: { font, palette, isDark } }) => css`
    *:disabled,
    *[disabled] {
      pointer-events: none;
      cursor: not-allowed;
      opacity: 0.6;
      transition: none;
    }

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
      font-weight: ${font.bold};
    }
    u,
    ins {
      text-decoration: underline;
    }
    i,
    em {
      font-style: italic;
    }
    s,
    del {
      text-decoration: line-through;
    }
    code {
      font-family: ${font.mono};
      font-weight: ${font.regular};
      padding: 0 0.2em;
      border-radius: 4px;
      border: 1px solid ${isDark ? hsla(color.slate[700]) : hsla(color.slate[300])};
      background-color: ${isDark ? hsla(color.slate[800]) : hsla(color.slate[200])};
      color: ${isDark ? hsla(color.orange[500]) : hsla(color.orange[700])};
    }
    small {
      font-size: 0.8em;
    }
    mark {
      background-color: ${isDark ? hsla(color.yellow[500]) : hsla(color.yellow[200])};
    }
    sub {
      vertical-align: sub;
      font-size: 0.8em;
    }
    sup {
      vertical-align: super;
      font-size: 0.8em;
    }
    blockquote {
      display: block;
      padding-left: 1rem;
      margin: 1rem 0;
      position: relative;
      font-style: italic;
      color: ${hsla(color.slate[500])};
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
        opacity: 0.5;
      }
      & > span {
        margin-top: 0.5em;
        display: block;
        font-size: 0.8em;
        text-align: end;
      }
    }
    abbr {
      border-bottom: 1px dotted currentColor;
    }
    address {
      display: block;
      white-space: pre;
      font-style: italic;
      font-weight: ${font.regular};
    }
    /* Table defaults */
    table {
      border-collapse: collapse;
      border: 1px solid ${isDark ? hsla(color.slate[700]) : hsla(color.slate[400])};
    }
    td,
    th {
      border: 1px solid ${isDark ? hsla(color.slate[700]) : hsla(color.slate[400])};
      padding: 10px 20px;
    }
    th {
      background-color: ${isDark ? hsla(color.gray[900]) : hsla(color.gray[300])};
    }
    td {
      text-align: center;
    }
  `}
`;

export { GlobalDefaultStyle };
