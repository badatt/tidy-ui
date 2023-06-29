import { keyframes } from 'styled-components';
import { color, css, hsla, ITheme } from '@tidy-ui/commons';
import { IAvatarBadgeProps, IAvatarProps } from './types';

/**
 * Size styles
 *
 * @internal
 */
const sizeStyles = {
  lg: {
    fontSize: '4rem',
  },
  md: {
    fontSize: '3rem',
  },
  sm: {
    fontSize: '2rem',
  },
  xl: {
    fontSize: '6rem',
  },
  xs: {
    fontSize: '1.5rem',
  },
  xxl: {
    fontSize: '8rem',
  },
  xxs: {
    fontSize: '1rem',
  },
};

const fontSize = css<IAvatarProps>`
  ${({ girth }) => css`
    font-size: ${sizeStyles[girth!].fontSize};
    height: ${sizeStyles[girth!].fontSize};
    width: ${sizeStyles[girth!].fontSize};
  `}
`;

const avatarIcon = css<IAvatarProps>`
  ${fontSize}
  ${({ theme: { isDark } }) => css`
    background-color: ${isDark ? hsla(color.slate[600]) : hsla(color.slate[400])};
    color: ${isDark ? hsla(color.slate[400]) : hsla(color.slate[200])};

    svg {
      height: 0.8em;
      width: 0.8em;
    }
  `}
`;

const avatarImage = css<IAvatarProps>`
  ${fontSize}
`;

const avatarText = css<IAvatarProps>`
  ${fontSize}
  span {
    font-size: 0.5em;
  }
`;

const accentStyle = css<IAvatarProps>`
  border-width: 0.2em;
  border-style: solid;
  ${({ accent }) => css`
    border-color: ${accent};
  `}
`;
const badgeStyles = css<IAvatarBadgeProps & Pick<IAvatarProps, 'girth'>>`
  position: absolute;
  bottom: 0;
  right: 0;
  ${({ theme: { palette }, accent, girth, tone }) => css`
    font-size: ${sizeStyles[girth!].fontSize};
    height: 0.4em;
    width: 0.4em;
    border-radius: 50%;
    border-color: ${palette.background.default};
    border-style: solid;
    border-width: 0.05em;
    ${tone &&
    css`
      background-color: ${tone};
    `}
    ${accent &&
    css`
      border-color: ${accent};
    `}
  `}
`;

/**
 * Creates a blink effect
 *
 * @internal
 */
const frameAnimation = (props: ITheme) => {
  return keyframes`
    from {
      background-color: ${props.theme.isDark ? hsla(color.gray[700]) : hsla(color.gray[300])};
    }
    to {
      background-color: ${props.theme.isDark ? hsla(color.gray[700], 0.2) : hsla(color.gray[200], 0.6)};
    }
  `;
};

export { accentStyle, avatarIcon, avatarImage, avatarText, badgeStyles, frameAnimation };
