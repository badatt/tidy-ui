import { css } from '@tidy-ui/commons';
import { IBreadcrumbItemProps } from './types';

const activeItemStyle = css<IBreadcrumbItemProps>`
  ${({ theme: { font, palette, isDark } }) => css`
    font-weight: ${font.medium};
    text-decoration: none;
    cursor: auto;
    pointer-events: none;
    opacity: 0.6;
    color: ${isDark ? palette.neutral[400] : palette.neutral[800]};
  `}
`;

const inactiveItemStyle = css<IBreadcrumbItemProps>`
  cursor: pointer;
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-size: 0% 0.1em;
  background-position-y: 100%;
  background-position-x: 0%;
  background-repeat: no-repeat;
  transition: background-size 0.2s ease-in-out;
  &:hover,
  &:focus {
    background-size: 100% 0.1em;
  }
  ${({ theme: { font } }) => css`
    font-weight: ${font.regular};
  `}
`;

export { activeItemStyle, inactiveItemStyle };
