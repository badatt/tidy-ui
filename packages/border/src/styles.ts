import { css } from '@tidy-ui/commons';
import { IBorderProps } from './types';

const topLeft = css<IBorderProps>`
  ${({ align }) => css`
    top: 0;
    left: 0;
    transform: translate(50%, calc(-${align}px));
  `}
`;

const topCenter = css<IBorderProps>`
  ${({ align }) => css`
    top: 0;
    left: 50%;
    transform: translate(-50%, calc(-${align}px));
  `}
`;

const topRight = css<IBorderProps>`
  ${({ align }) => css`
    top: 0;
    right: 0;
    transform: translate(-50%, calc(-${align}px));
  `}
`;

// ------------------------

const rightTop = css<IBorderProps>`
  ${({ align }) => css`
    right: 0;
    top: 0;
    transform: rotate(90deg) translate(50%, calc(-50% - ${align}px));
  `}
`;

const rightCenter = css<IBorderProps>`
  ${({ align }) => css`
    right: 0;
    top: 50%;
    transform: rotate(90deg) translate(-25%, calc(-50% - ${align}px));
  `}
`;

const rightBottom = css<IBorderProps>`
  ${({ align }) => css`
    right: 0;
    bottom: 0;
    transform: rotate(90deg) translate(-50%, calc(-50% - ${align}px));
  `}
`;

// ------------------------

const bottomLeft = css<IBorderProps>`
  ${({ align }) => css`
    left: 0;
    bottom: 0;
    transform: translate(50%, calc(${align}px));
  `}
`;

const bottomCenter = css<IBorderProps>`
  ${({ align }) => css`
    left: 50%;
    bottom: 0;
    transform: translate(-50%, calc(${align}px));
  `}
`;

const bottomRight = css<IBorderProps>`
  ${({ align }) => css`
    right: 0;
    bottom: 0;
    transform: translate(-50%, calc(${align}px));
  `}
`;

// ------------------------

const leftTop = css<IBorderProps>`
  ${({ align }) => css`
    left: 0;
    top: 0;
    transform: rotate(270deg) translate(-50%, calc(-50% - ${align}px));
  `}
`;

const leftCenter = css<IBorderProps>`
  ${({ align }) => css`
    left: 0;
    top: 50%;
    transform: rotate(270deg) translate(25%, calc(-50% - ${align}px));
  `}
`;

const leftBottom = css<IBorderProps>`
  ${({ align }) => css`
    left: 0;
    bottom: 0;
    transform: rotate(270deg) translate(50%, calc(-50% - ${align}px));
  `}
`;

/** @internal */
const borderColor = css<IBorderProps>`
  ${({ theme: { isDark, palette }, tone }) => css`
    border-color: ${isDark ? palette[tone!][700] : palette[tone!][400]};
  `}
`;

export {
  borderColor,
  bottomCenter,
  bottomLeft,
  bottomRight,
  leftBottom,
  leftCenter,
  leftTop,
  rightBottom,
  rightCenter,
  rightTop,
  topCenter,
  topLeft,
  topRight,
};
