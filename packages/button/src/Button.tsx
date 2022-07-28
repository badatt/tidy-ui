import React from 'react';
import { RotatingCircleIcon } from '@tidy-ui/icons';
import { css, hsla, styled } from '@tidy-ui/theme';
import { sizeStyles } from './styles';
import { IButtonProps } from './types';

const simple = css<IButtonProps>`
  ${({ theme: { palette, isDark }, withColor }) => css`
    color: ${isDark ? palette[withColor!][400] : palette[withColor!][600]};
    background-color: transparent;
    border: none;
    &:hover {
      background-color: ${isDark ? hsla(palette[withColor!].shades[900], 0.4) : palette[withColor!][100]};
    }
  `}
`;

const basic = css<IButtonProps>`
  ${({ theme: { palette, isDark }, withColor }) => css`
    color: ${isDark ? palette[withColor!][400] : palette[withColor!][600]};
    background-color: ${isDark ? hsla(palette[withColor!].shades[900], 0.3) : palette[withColor!][200]};
    border: 1px solid transparent;
    &:hover {
      background-color: ${isDark ? hsla(palette[withColor!].shades[900], 0.4) : palette[withColor!][200]};
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        ${isDark ? hsla(palette[withColor!].shades[900], 0.7) : palette[withColor!][300]} 0px 10px 15px -3px,
        ${isDark ? hsla(palette[withColor!].shades[900], 0.7) : palette[withColor!][300]} 0px 4px 6px -4px;
    }
  `}
`;

const primary = css<IButtonProps>`
  ${({ theme: { palette, isDark }, withColor }) => css`
    color: ${palette[withColor!][100]};
    background-color: ${palette[withColor!][600]};
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      ${isDark ? palette[withColor!][800] : palette[withColor!][200]} 0px 10px 15px -3px,
      ${isDark ? palette[withColor!][800] : palette[withColor!][200]} 0px 4px 6px -4px;
    &:hover {
      background-color: ${palette[withColor!][700]};
    }
  `}
`;

const outlined = css<IButtonProps>`
  ${({ theme: { palette, isDark }, withColor }) => css`
    color: ${isDark ? palette[withColor!][400] : palette[withColor!][600]};
    background-color: ${isDark ? hsla(palette[withColor!].shades[900], 0.3) : palette[withColor!][50]};
    border: 1px solid ${isDark ? palette[withColor!][600] : palette[withColor!][300]};
    &:hover {
      background-color: ${isDark ? hsla(palette[withColor!].shades[900], 0.5) : palette[withColor!][100]};
    }
  `}
`;

const hero = css<IButtonProps>`
  ${({ theme: { palette, isDark }, withColor }) => css`
    padding: 1rem 1.5rem;
    border-radius: 0.75rem;
    font-size: 3rem;
    line-height: 2.125rem;
    color: ${palette[withColor!][100]};
    background-color: ${palette[withColor!][600]};
    border: 1px solid transparent;
    width: 100%;
    text-align: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      ${isDark ? palette[withColor!][800] : palette[withColor!][200]} 0px 10px 15px -3px,
      ${isDark ? palette[withColor!][800] : palette[withColor!][200]} 0px 4px 6px -4px;
  `}
`;

const ButtonRoot = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ withSize, disabled, isStretched, withType, isUppercase }) => css`
    padding: ${sizeStyles[withSize!].padding};
    border-radius: ${sizeStyles[withSize!].borderRadius};
    font-size: ${sizeStyles[withSize!].fontSize};
    line-height: ${sizeStyles[withSize!].lineHeight};
    ${disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
    ${isStretched &&
    css`
      width: 100%;
      text-align: center;
      justify-content: center;
    `}
    ${isUppercase &&
    css`
      text-transform: uppercase;
    `}
    ${withType === 'simple' && simple}
    ${withType === 'basic' && basic}
    ${withType === 'primary' && primary}
    ${withType === 'outlined' && outlined}
    ${withType === 'hero' && hero}
  `}
`;

const Icon = styled.i<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ withSize, withText }) => css`
    height: ${sizeStyles[withSize!].iconSize};
    width: ${sizeStyles[withSize!].iconSize};
    ${withText === ''
      ? css`
          margin-right: 0em;
        `
      : css`
          margin-right: 0.25em;
        `};
  `}
`;

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { children, isLoading, withIcon, withText, isDisabled, ...rest } = props;
  return (
    <ButtonRoot role="button" ref={ref} {...rest} isDisabled={isDisabled || isLoading}>
      {withIcon && <Icon {...props}>{withIcon}</Icon>}
      {isLoading && (
        <Icon {...props}>
          <RotatingCircleIcon />
        </Icon>
      )}
      {withText}
      {children}
    </ButtonRoot>
  );
});

Button.defaultProps = {
  isDisabled: false,
  isLoading: false,
  isStretched: false,
  isUppercase: false,
  withColor: 'major',
  withSize: 'md',
  withText: '',
  withType: 'simple',
};

export { Button };
