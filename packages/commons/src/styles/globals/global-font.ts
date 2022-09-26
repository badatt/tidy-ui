/* istanbul ignore file */
import { createGlobalStyle } from 'styled-components';
import { css } from '../../theme';
import { IGlobalFont } from '../../theme/types';

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
