import { IStandardProps } from '@tidy-ui/types';
import { css } from '../theme';

const createStandardStyles = css<IStandardProps>`
  ${({
    background,
    border,
    clear,
    color,
    display,
    float,
    font,
    height,
    margin,
    overflow,
    padding,
    position,
    width,
  }) => css`
    ${background &&
    css`
      background: ${background};
    `}
    ${border &&
    css`
      border: ${border};
    `}
    ${clear &&
    css`
      clear: ${clear};
    `}
    ${color &&
    css`
      color: ${color};
    `}
    ${display &&
    css`
      display: ${display};
    `}
    ${float &&
    css`
      float: ${float};
    `}
    ${font &&
    css`
      font: ${font};
    `}
    ${height &&
    css`
      height: ${height};
    `}
    ${margin &&
    css`
      margin: ${margin};
    `}
    ${overflow &&
    css`
      overflow: ${overflow};
    `}
    ${padding &&
    css`
      padding: ${padding};
    `}
    ${position &&
    css`
      position: ${position};
    `}
    ${width &&
    css`
      width: ${width};
    `}
  `}
`;

export default createStandardStyles;
