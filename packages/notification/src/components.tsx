import { applyStandardOverrideStyles, color, createFontStyle, css, hsla, styled } from '@tidy-ui/commons';
import { IPalette } from '@tidy-ui/types';
import { filledContent, filledLabel, outlinedContent, outlinedLabel } from './styles';
import { INotificationProps } from './types';

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
const CloseButton = styled.span<INotificationProps>`
  position: absolute;
  right: 0;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  visibility: hidden;
  padding: 4px;
  border-radius: 50%;
  background-color: ${hsla(color.slate[700], 0.1)};
  ${({ theme: { palette, isDark }, tone, isFilled }) => css`
    ${isFilled
      ? css`
          color: ${palette[tone!][50]};
        `
      : css`
          color: ${closeButtonColor(isDark, palette, tone!)};
        `}
  `}
  &:hover {
    background-color: ${hsla(color.slate[700], 0.2)};
  }
`;

/** @internal */
const NotificationRoot = styled.div<INotificationProps>`
  width: fit-content;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  ${({ theme: { layout }, isSharp, isFilled }) => css`
    border-radius: ${!isSharp && layout.radius};
    ${isFilled ? filledContent : outlinedContent}
  `}
  &:hover ${CloseButton} {
    visibility: visible;
  }
  ${applyStandardOverrideStyles}
`;

/** @internal */
interface ILableAllowed {
  /**
   * If `true`, leaves left margin for icon
   */
  isLabelAllowed?: boolean;
}

/**
 * NotificationContent component
 *
 * @internal
 */
const NotificationContent = styled.div<INotificationProps & ILableAllowed>`
  width: fit-content;
  ${createFontStyle()}
  ${({ hasLabel, isLabelAllowed }) => css`
    ${isLabelAllowed &&
    css`
      margin-left: ${hasLabel ? '2rem' : 0};
    `}
  `}
`;

/**
 * Notification widget label component
 *
 * @internal
 */
const NotificationLabel = styled.div<INotificationProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  text-transform: capitalize;
  ${createFontStyle('h6')}
  svg {
    height: 1.5rem;
    width: 1.5rem;
  }
  ${({ isFilled }) => css`
    ${isFilled ? filledLabel : outlinedLabel}
  `}
`;

const NotificationHeader = styled.div<INotificationProps>`
  display: flex;
  position: relative;
`;

export { CloseButton, NotificationContent, NotificationHeader, NotificationLabel, NotificationRoot };
