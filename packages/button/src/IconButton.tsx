import React, { forwardRef } from 'react';
import { css, styled } from '@tidy-ui/theme';
import { outlined, primary, sizeStyles } from './styles';
import { IIconButtonProps } from './types';

const IconButtonRoot = styled.button<IIconButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ withSize, isDisabled, isIconOnly, withType, withPlacement }) => css`
    font-size: ${sizeStyles[withSize!].fontSize};
    ${isIconOnly
      ? css`
          padding: 0.3em;
          border-radius: 50%;
        `
      : css`
          gap: ${sizeStyles[withSize!].borderRadius};
          padding: ${sizeStyles[withSize!].padding};
          border-radius: ${sizeStyles[withSize!].borderRadius};
          line-height: ${sizeStyles[withSize!].lineHeight};
        `}
    ${isDisabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
    ${withPlacement == 'right' &&
    css`
      flex-direction: row-reverse;
    `}
    ${withType === 'primary' && primary}
    ${withType === 'outlined' && outlined}
  `}
`;

const Icon = styled.i<IIconButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ withSize }) => css`
    height: ${sizeStyles[withSize!].iconSize};
    width: ${sizeStyles[withSize!].iconSize};
  `}
`;

const IconButton = forwardRef<HTMLButtonElement, IIconButtonProps>((props, ref) => {
  const { children, withIcon, ...rest } = props;
  return (
    <IconButtonRoot role="icon-button" ref={ref} {...rest}>
      {withIcon && <Icon {...rest}>{withIcon}</Icon>}
      {children}
    </IconButtonRoot>
  );
});

IconButton.defaultProps = {
  isDisabled: false,
  isIconOnly: false,
  withColor: 'major',
  withPlacement: 'left',
  withSize: 'md',
  withType: 'primary',
};
export { IconButton };
