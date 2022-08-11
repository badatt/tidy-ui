import React from 'react';
import { CheckCircleIcon, DangerousIcon, InfoIcon, WarningIcon } from '@tidy-ui/commons';
import { css, styled } from '@tidy-ui/commons';
import { IPalette } from '@tidy-ui/types';
import { filledContent, filledLabel, outlinedContent, outlinedLabel } from './styles';
import { IMessageProps } from './types';

/**
 * MessageLabel icon
 *
 * @internal
 * @param {IMessageProps} p
 */
const MessageLabelIcon = (p: IMessageProps) => {
  switch (p.withColor) {
    case 'info':
      return <InfoIcon />;
    case 'success':
      return <CheckCircleIcon />;
    case 'warning':
      return <WarningIcon />;
    case 'danger':
      return <DangerousIcon />;
    default:
      return null;
  }
};

/**
 * Internal Message root component
 *
 * @internal
 */
const MessageRoot = styled.div<IMessageProps>`
  ${({ isStretched }) => css`
    margin-bottom: 1rem;
    width: ${isStretched ? '100%' : 'fit-content'};
    position: relative;
  `}
`;

/**
 * Close button color
 *
 * @param {boolean} isDark isDark check
 * @param {IPalette} palette theme palette
 * @param {string} color color string
 * @returns {any} color
 */
const closeButtonColor = (isDark: boolean, palette: IPalette, color: string) => {
  return isDark ? palette[color][400] : palette[color][600];
};

/**
 * CloseButton component
 *
 * @internal
 */
const CloseButton = styled.i<IMessageProps>`
  ${({ theme: { palette, isDark }, withColor, isOutlined }) => css`
    height: 1rem;
    width: 1rem;
    position: absolute;
    color: ${palette[withColor!][50]};
    cursor: pointer;
    ${isOutlined
      ? css`
          top: 26px;
          right: 2px;
          color: ${closeButtonColor(isDark, palette, withColor!)};
        `
      : css`
          top: 24px;
          right: 2px;
          color: ${palette[withColor!][50]};
        `}
  `}
`;

/**
 * Message widget label component
 *
 * @internal
 */
const MessageLabel = styled.div<IMessageProps>`
  ${({ theme: { layout, typography }, isSharp, isOutlined }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    border-top-left-radius: ${!isSharp && layout.radius};
    border-top-right-radius: ${!isSharp && layout.radius};
    width: fit-content;
    padding: 0.25rem 1rem;
    font-size: 0.625rem;
    text-transform: uppercase;
    font-weight: ${typography.fontWeightBold};
    ${isOutlined ? outlinedLabel : filledLabel}
    svg {
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
  ${({ theme: { layout }, isSharp, isStretched, withoutLabel, isOutlined }) => css`
    padding: 0.75rem 1rem;
    border-radius: ${!isSharp && layout.radius};
    ${!withoutLabel &&
    css`
      border-top-left-radius: 0;
    `}
    width: ${isStretched ? '100%' : 'fit-content'};
    ${isOutlined ? outlinedContent : filledContent}
  `}
`;

/**
 * Message header component
 *
 * @internal
 */
const Header = styled.div<IMessageProps>`
  ${({ theme: { typography } }) => css`
    font-size: ${typography.h6.fontSize};
    margin-bottom: 0.25rem;
  `}
`;

export { CloseButton, Header, MessageContent, MessageLabel, MessageLabelIcon, MessageRoot };
