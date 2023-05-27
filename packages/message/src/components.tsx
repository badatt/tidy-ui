import { applyStandardOverrideStyles, createFontStyle, css, IPalette, styled } from '@tidy-ui/commons';
import { filledContent, filledLabel, outlinedContent, outlinedLabel } from './styles';
import { IMessageProps } from './types';

/**
 * Internal Message root component
 *
 * @internal
 */
const MessageRoot = styled.div<IMessageProps>`
  ${applyStandardOverrideStyles}
`;

/**
 * Close button color
 *
 * @param {boolean} isDark isDark check
 * @param {IPalette} palette theme palette
 * @param {string} color color string
 * @returns {string} color in hsla
 */
const closeButtonColor = (isDark: boolean, palette: IPalette, color: string): string => {
  return isDark ? palette[color][400] : palette[color][600];
};

/**
 * CloseButton component
 *
 * @internal
 */
const CloseButton = styled.span<IMessageProps>`
  ${({ theme: { palette, isDark }, tone, isFilled }) => css`
    height: 1rem;
    width: 1rem;
    min-width: 1rem;
    display: none;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 2px;
    ${isFilled
      ? css`
          color: ${palette[tone!][50]};
        `
      : css`
          color: ${closeButtonColor(isDark, palette, tone!)};
        `}
  `}
`;

/**
 * Message widget label component
 *
 * @internal
 */
const MessageLabel = styled.div<IMessageProps>`
  ${({ theme: { font, layout }, isSharp, isFilled }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    border-top-left-radius: ${!isSharp && layout.radius};
    border-top-right-radius: ${!isSharp && layout.radius};
    width: fit-content;
    padding: 0.25rem 1rem;
    font-size: 0.625rem;
    font-weight: ${font.bold};
    text-transform: uppercase;
    ${isFilled ? filledLabel : outlinedLabel}
    * {
      height: 0.75rem;
      width: 0.75rem;
    }
  `}
`;

/**
 * MessageContent component
 *
 * @internal
 */
const MessageContent = styled.div<IMessageProps>`
  position: relative;
  ${createFontStyle()}
  ${({ theme: { layout }, isSharp, isStretched, hasLabel, isFilled }) => css`
    padding: 0.75rem 1rem;
    border-radius: ${!isSharp && layout.radius};
    ${hasLabel &&
    css`
      border-top-left-radius: 0;
    `}
    width: ${isStretched ? '100%' : 'fit-content'};
    ${isFilled ? filledContent : outlinedContent}
  `}
  &:hover ${CloseButton} {
    display: block;
  }
`;

export { CloseButton, MessageContent, MessageLabel, MessageRoot };
