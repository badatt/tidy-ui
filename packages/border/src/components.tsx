import { css, styled } from '@tidy-ui/commons';
import { IBorderProps } from './types';

const BorderRoot = styled.div<IBorderProps>`
  position: relative;
  ${({ theme: { palette, layout }, h, w, padding, margin, variant, density, tone, shade, sharp }) => css`
    height: ${h};
    width: ${w};
    padding: ${padding};
    margin: ${margin};
    border-style: ${variant};
    border-width: ${density};
    border-color: ${palette[tone!][shade!]};
    border-radius: ${sharp ? '0' : layout.radius};
  `}
`;

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

const BorderContent = styled.div<IBorderProps>`
  position: absolute;
  padding: 4px;
  ${({ theme: { palette }, positioning }) => css`
    background-color: ${palette.background.default};
    ${positioning === 'top-left' && topLeft}
    ${positioning === 'top-center' && topCenter}
    ${positioning === 'top-right' && topRight}

    ${positioning === 'right-top' && rightTop}
    ${positioning === 'right-center' && rightCenter}
    ${positioning === 'right-bottom' && rightBottom}

    ${positioning === 'bottom-left' && bottomLeft}
    ${positioning === 'bottom-center' && bottomCenter}
    ${positioning === 'bottom-right' && bottomRight}

    ${positioning === 'left-top' && leftTop}
    ${positioning === 'left-center' && leftCenter}
    ${positioning === 'left-bottom' && leftBottom}
  `}
`;

export { BorderContent, BorderRoot };
