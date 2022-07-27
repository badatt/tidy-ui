import { keyframes } from 'styled-components';
import { css } from '@tidy-ui/theme';
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
 * Badge color and its background
 *
 */
const badgeColor = css<IBadgeProps>`
  ${({ theme: { palette }, withColor }) => css`
    color: ${palette[withColor!][100]};
    background-color: ${palette[withColor!][600]};
  `}
`;

/**
 * Badge base styles
 *
 */
const badgeBase = css<IBadgeProps>`
  ${({ isBlink }) => css`
    position: absolute;
    display: flex;
    align-items: center;
    place-content: center;
    top: 0;
    right: 0;
    z-index: 1;
    transform: scale(1) translate(50%, -50%);
    transform-origin: 100% 0%;
    ${isBlink &&
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
  ${({ withData }) => css`
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
      ${badgeColor}
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
    ${badgeColor}
  }
`;

export { dotBadge, standardBadge };
