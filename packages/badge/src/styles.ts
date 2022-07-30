import { keyframes } from 'styled-components';
import { css, hsla } from '@tidy-ui/theme';
import { IBadgeProps } from './types';

/**
 * Creates a blink effect
 *
 * @returns {*}
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
 */
const filledBadgeColor = css<IBadgeProps>`
  ${({ theme: { palette }, withColor }) => css`
    color: ${palette[withColor!][100]};
    background-color: ${palette[withColor!][600]};
  `}
`;

/**
 * Outline badge color and its background
 *
 */
const outlineBadgeColor = css<IBadgeProps>`
  ${({ theme: { palette, isDark }, withColor }) => css`
    color: ${isDark ? palette[withColor!][400] : palette[withColor!][600]};
    background-color: ${isDark ? hsla(palette[withColor!].shades[900], 0.3) : palette[withColor!][50]};
    border: 0.5px solid ${isDark ? palette[withColor!][600] : palette[withColor!][300]};
  `}
`;

/**
 * Badge base styles
 *
 */
const badgeBase = css<IBadgeProps>`
  ${({ isBlinking }) => css`
    position: absolute;
    display: flex;
    align-items: center;
    place-content: center;
    top: 0;
    right: 0;
    z-index: 1;
    transform: translate(60%, -60%);
    ${isBlinking &&
    css`
      animation: ${blinkingEffect} 1s linear infinite;
    `}
  `}
`;

/**
 * Standard badge styles
 *
 */
const standardBadge = css<IBadgeProps>`
  ${({ withData, isOutlined }) => css`
    &::after {
      content: ${`'${withData}'`};
      ${badgeBase}
      min-width: 1rem;
      max-width: 2rem;
      line-height: 1;
      padding: 0px 0.25rem;
      height: 1rem;
      border-radius: 0.5rem;
      font-size: 0.625rem;
      overflow: hidden;
      white-space: nowrap;
      ${isOutlined ? outlineBadgeColor : filledBadgeColor}
    }
  `}
`;

/**
 * Dot badge styles
 *
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
