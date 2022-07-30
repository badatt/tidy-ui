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
          padding: 0;
          border-radius: 0.4em;
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

const IconWrapper = styled.span<IIconButtonProps>`
  padding: 0.4em;
`;

const IconOnlyWrapper = styled.span<IIconButtonProps>`
  ${({ isIconOnly }) => css`
    ${isIconOnly
      ? css`
          padding: 0.4em;
        `
      : css`
          padding: 0.4em 0.6em;
        `}
  `}
`;

const Icon = styled.i<IIconButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isIconOnly }) => css`
    ${isIconOnly
      ? css`
          height: 1.8em;
          width: 1.8em;
        `
      : css`
          height: 1.2em;
          width: 1.2em;
        `}
  `}
`;

const ChildWrapper = styled.span<IIconButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  white-space: nowrap;
  user-select: none;
  ${({ withPlacement }) => css`
    ${withPlacement == 'right'
      ? css`
          padding-left: 0.4em;
        `
      : css`
          padding-right: 0.4em;
        `}
  `}
`;

const IconButton = forwardRef<HTMLButtonElement, IIconButtonProps>((props, ref) => {
  const { children, withIcon } = props;
  return (
    <IconButtonRoot role="icon-button" ref={ref} {...props}>
      {children ? (
        <IconWrapper {...props}>
          <Icon {...props}>{withIcon}</Icon>
        </IconWrapper>
      ) : (
        <IconOnlyWrapper {...props}>
          <Icon {...props}>{withIcon}</Icon>
        </IconOnlyWrapper>
      )}
      {children && <ChildWrapper {...props}>{children}</ChildWrapper>}
    </IconButtonRoot>
  );
});

IconButton.defaultProps = {
  isDisabled: false,
  isIconOnly: false,
  withColor: 'neutral',
  withPlacement: 'left',
  withSize: 'md',
  withType: 'primary',
};
export { IconButton };
