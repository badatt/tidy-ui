import React from 'react';
import { applyStandardOverrideStyles, color, css, hsla, styled } from '@tidy-ui/commons';
import { IAvatarProps } from './types';

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

const AvatarRoot = styled.div<IAvatarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  ${({ theme: { isDark }, girth }) => css`
    font-size: ${sizeStyles[girth!].fontSize};
    height: ${sizeStyles[girth!].fontSize};
    width: ${sizeStyles[girth!].fontSize};
    background-color: ${isDark ? hsla(color.slate[600]) : hsla(color.slate[400])};
  `}
  color: white;
  ${applyStandardOverrideStyles}
`;

const AvatarIcon = styled.span<IAvatarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.8em;
  width: 0.8em;
`;

const AvatarImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
`;

/** @internal */
interface IAvatarNameProps {
  /** @internal */
  name: string;
}

const AvatarNameText = styled.span<IAvatarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.6em;
  vertical-align: middle;
`;

/** @internal */
const AvatarName = (props: IAvatarNameProps) => {
  const { name } = props;
  const initials = React.useMemo(() => {
    return name
      .split(' ')
      .map((n) => n.charAt(0))
      .join('');
  }, [name]);
  return <AvatarNameText>{initials}</AvatarNameText>;
};

export { AvatarIcon, AvatarImage, AvatarName, AvatarRoot };
