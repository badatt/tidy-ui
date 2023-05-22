import { keyframes } from 'styled-components';
import { css, hsla } from '@tidy-ui/commons';
import { IBadgeProps } from './types';

/**
 * Creates a blink effect
 *
 * @internal
 */
const blinkingEffect = () => {
  return keyframes`
    50% {
      opacity: 0;
    }
  `;
};

/**
 * Filed badge color and its background
 *
 * @internal
 */
const filledBadgeColor = css<IBadgeProps>`
  ${({ theme: { palette }, tone }) => css`
    color: ${palette[tone!][50]};
    background-color: ${palette[tone!][700]};
  `}
`;

/**
 * Outline badge color and its background
 *
 * @internal
 */
const outlineBadgeColor = css<IBadgeProps>`
  ${({ theme: { palette, isDark }, tone }) => css`
    color: ${isDark ? palette[tone!][300] : palette[tone!][800]};
    background-color: ${isDark ? hsla(palette[tone!].shades[900], 0.3) : palette[tone!][100]};
    border: 0.5px solid ${palette[tone!][600]};
  `}
`;

/**
 * Badge base styles
 *
 * @internal
 */
const badgeBase = css<IBadgeProps>`
  ${({ isBlink }) => css`
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    right: 0;
    z-index: 1;
    transform: translate(70%, -70%);
    ${isBlink &&
    css`
      animation: ${blinkingEffect} 1s linear infinite;
    `}
  `}
`;

/**
 * Standard badge styles
 *
 * @internal
 */
const standardBadge = css<IBadgeProps>`
  ${({ content, isOutlined }) => css`
    &::after {
      content: ${`'${content}'`};
      ${badgeBase}
      min-width: fit-content;
      max-width: 2rem;
      padding: 0px 0.25rem;
      height: 1rem;
      border-radius: 0.5rem;
      font-size: 0.625rem;
      overflow: hidden;
      white-space: pre;
      ${isOutlined ? outlineBadgeColor : filledBadgeColor}
    }
  `}
`;

/**
 * Dot badge styles
 *
 * @internal
 */
const dotBadge = css<IBadgeProps>`
  &::after {
    content: '';
    ${badgeBase}
    min-width: 0.5rem;
    padding: 0px;
    height: 0.5rem;
    border-radius: 0.25rem;
    ${filledBadgeColor}
  }
`;

export { dotBadge, standardBadge };
