import { applyStandardOverrideStyles, css, styled } from '@tidy-ui/commons';
import {
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
} from './styles';
import { IBorderProps } from './types';

const BorderContent = styled.div<Pick<IBorderProps, 'positioning' | 'align'>>`
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

const BorderRoot = styled.div<IBorderProps>`
  position: relative;
  ${({ theme: { palette, layout }, variant, density, tone, shade, isSharp }) => css`
    border-style: ${variant};
    border-width: ${density};

    border-radius: ${isSharp ? '0' : layout.radius};
    ${shade
      ? css`
          border-color: ${palette[tone!][shade]};
        `
      : borderColor}
  `}
  ${applyStandardOverrideStyles}
`;

export { BorderContent, BorderRoot };
