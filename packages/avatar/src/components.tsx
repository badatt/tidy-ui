import React from 'react';
import { applyStandardOverrideStyles, css, styled, TGirth, useColor } from '@tidy-ui/commons';
import { accentStyle, avatarIcon, avatarImage, avatarText, badgeStyles } from './styles';
import { IAvatarBadgeProps, IAvatarGroupProps, IAvatarProps } from './types';

const AvatarRoot = styled.div<IAvatarProps>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  ${({ accent }) => css`
    ${accent && accentStyle}
  `}
  ${applyStandardOverrideStyles}
`;

const AvatarWrap = styled.div<IAvatarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-width: 0.15em;
  border-style: solid;
  border-color: transparent;
`;

const AvatarIcon = styled.span<IAvatarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  ${avatarIcon}
`;

const AvatarImage = styled.img<IAvatarProps>`
  object-fit: cover;
  border-radius: 50%;
  ${avatarImage}
`;

/** @internal */
interface IAvatarNameProps {
  /** @internal */
  girth?: TGirth;
  /** @internal */
  name: string;
}

const AvatarNameText = styled.span<IAvatarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  border-radius: 50%;
  ${avatarText}
  ${applyStandardOverrideStyles}
`;

/** @internal */
const AvatarName = (props: IAvatarNameProps) => {
  const { name, girth } = props;

  const { contrastColor, mainColor } = useColor({ text: name });

  const initials = React.useMemo(() => {
    const splitName = name.split(' ');
    if (splitName.length == 1) return splitName[0].charAt(0).toUpperCase();
    return `${splitName[0].charAt(0)}${splitName[splitName.length - 1].charAt(0)}`.toUpperCase();
  }, [name]);

  return (
    <AvatarNameText {...{ background: mainColor, color: contrastColor, girth }}>
      <span>{initials}</span>
    </AvatarNameText>
  );
};

const AvatarBadgeRoot = styled.div<IAvatarBadgeProps>`
  ${badgeStyles}
`;

const AvatarGroupRoot = styled.div<IAvatarGroupProps>`
  display: flex;
  flex-direction: row-reverse;

  & :not(:last-child) {
    margin-left: -0.8em;
  }

  & div > div {
    border-color: ${(props) => props.theme.palette.background.default};
  }
  ${applyStandardOverrideStyles}
`;

export { AvatarBadgeRoot, AvatarGroupRoot, AvatarIcon, AvatarImage, AvatarName, AvatarRoot, AvatarWrap };
