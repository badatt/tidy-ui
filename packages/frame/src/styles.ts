import { css } from '@tidy-ui/commons';
import { IFrameProps } from './types';

const circleStyle = css<IFrameProps>`
  border-radius: 50%;
  ${({ size }) => css`
    height: ${size};
    width: ${size};
  `}
`;

const textStyle = css<IFrameProps>`
  height: 1em;
`;

const rectangleStyle = css<IFrameProps>`
  ${({ theme: { layout }, isSharp }) => css`
    ${!isSharp &&
    css`
      border-radius: ${layout.radius};
    `}
  `}
`;

export { circleStyle, rectangleStyle, textStyle };
