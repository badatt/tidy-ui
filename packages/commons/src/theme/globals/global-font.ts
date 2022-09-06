/* istanbul ignore file */
import { createGlobalStyle } from 'styled-components';
import { IGlobalFont } from '@tidy-ui/types';
import { css } from '..';

const GlobalFont = createGlobalStyle<IGlobalFont>`
  ${({ url, family }) => css`
    ${url &&
    css`
      @import url(${`'${url}'`});
    `}

    body {
      font-family: ${family ||
      `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Oxygen, Cantarell, sans-serif`};
    }
  `}
`;

export { GlobalFont };
