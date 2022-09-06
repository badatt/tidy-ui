import { createGlobalStyle } from 'styled-components';
import { IGlobalStyle } from '@tidy-ui/types';
import { css } from '.';

const GlobalStyle = createGlobalStyle<IGlobalStyle>`
  ${({ theme: { palette }, fontUrl, fontFamily }) => css`
    ${fontUrl
      ? css`
          @import url(${`'${fontUrl}'`});
        `
      : css`
          @import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        `}

    *,
    *:before,
    *:after {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      box-sizing: border-box;
    }

    *[hidden] {
      display: none;
    }

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
      font-family: ${fontFamily ||
      `'PT Sans', 'Helvetica Neue', Arial, 'PingFang SC', 'microsoft yahei', 'hiragino sans gb',
        '游ゴシック Medium', 'Yu Gothic Medium', YuGothicM, 游ゴシック体, YuGothic, 'ヒラギノ角ゴ Pro',
        'Hiragino Kaku Gothic Pro', 'Meiryo UI', メイリオ, Meiryom, 'PT Sans', 'Apple SD Gothic Neo', 'Malgun Gothic',
        Dotum, 'Noto Sans CJK KR', sans-serif;`};
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }

    menu,
    ol,
    ul {
      list-style: none;
    }
    blockquote,
    q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
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
  `}
`;

export { GlobalStyle };
