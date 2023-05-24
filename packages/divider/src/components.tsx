import { applyStandardOverrideStyles, css, styled } from '@tidy-ui/commons';
import { IDividerProps, IEnhancedDividerProps } from './types';

/** @internal */
const getShade = (isDark) => (isDark ? 700 : 300);

const DividerRoot = styled.hr<IDividerProps>`
  ${({ theme: { palette, isDark }, align, length, tone, shade, density, variant, margin, isVertical }) => css`
    border-color: ${palette[tone!][shade || getShade(isDark)]};
    flex-shrink: 0;
    border-style: ${variant};
    align-self: ${align};
    ${isVertical
      ? css`
          margin: 0 ${margin} !important;
          border-width: 0px ${density} 0px 0px;
          ${length &&
          css`
            height: ${length};
          `}
        `
      : css`
          margin: ${margin} 0 !important;
          border-width: 0px 0px ${density};
          ${length &&
          css`
            width: ${length};
          `}
        `}
  `}
  ${applyStandardOverrideStyles}
`;

const EnhancedDividerRoot = styled.div<IEnhancedDividerProps>`
  ${({ margin }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;
    margin: ${margin} 0 !important;
  `}
  ${applyStandardOverrideStyles}
`;

const Separator = styled.hr<IEnhancedDividerProps>`
  ${({ theme: { palette, isDark }, tone, shade, density, variant }) => css`
    border-color: ${palette[tone!][shade || getShade(isDark)]};
    border-width: 0px 0px ${density};
    border-style: ${variant};
    flex-grow: 1;
  `}
`;

const Content = styled.div<IEnhancedDividerProps>`
  ${({ justify }) => css`
    ${justify === 'center' &&
    css`
      padding: 0 8px;
    `}
    ${justify !== 'center' &&
    (justify === 'start'
      ? css`
          padding: 0 8px 0 0;
        `
      : css`
          padding: 0 0 0 8px;
        `)}
  `}
`;

export { Content, DividerRoot, EnhancedDividerRoot, Separator };
