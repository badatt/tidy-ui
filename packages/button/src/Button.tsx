import React from 'react';
import { css, hsla, styled } from '@tidy-ui/theme';
import { RotatingCircleIcon } from '@tidy-ui/icons';
import { sizeStyles } from './style';
import { IButtonProps } from './types';

const simple = css<IButtonProps>`
  ${({ theme: { palette, isDark }, color }) => css`
    color: ${isDark ? palette[color!][400] : palette[color!][600]};
    background-color: transparent;
    border: none;
    &:hover {
      background-color: ${isDark ? hsla(palette[color!].shades[900], 0.4) : palette[color!][100]};
    }
  `}
`;

const basic = css<IButtonProps>`
  ${({ theme: { palette, isDark }, color }) => css`
    color: ${isDark ? palette[color!][400] : palette[color!][600]};
    background-color: ${isDark ? hsla(palette[color!].shades[900], 0.3) : palette[color!][200]};
    border: 1px solid transparent;
    &:hover {
      background-color: ${isDark ? hsla(palette[color!].shades[900], 0.4) : palette[color!][200]};
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        ${isDark ? hsla(palette[color!].shades[900], 0.7) : palette[color!][300]} 0px 10px 15px -3px,
        ${isDark ? hsla(palette[color!].shades[900], 0.7) : palette[color!][300]} 0px 4px 6px -4px;
    }
  `}
`;

const primary = css<IButtonProps>`
  ${({ theme: { palette, isDark }, color }) => css`
    color: ${palette[color!][100]};
    background-color: ${palette[color!][600]};
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      ${isDark ? palette[color!][800] : palette[color!][200]} 0px 10px 15px -3px,
      ${isDark ? palette[color!][800] : palette[color!][200]} 0px 4px 6px -4px;
    &:hover {
      background-color: ${palette[color!][700]};
    }
  `}
`;

const outlined = css<IButtonProps>`
  ${({ theme: { palette, isDark }, color }) => css`
    color: ${isDark ? palette[color!][400] : palette[color!][600]};
    background-color: ${isDark ? hsla(palette[color!].shades[900], 0.3) : palette[color!][50]};
    border: 1px solid ${isDark ? palette[color!][600] : palette[color!][300]};
    &:hover {
      background-color: ${isDark ? hsla(palette[color!].shades[900], 0.5) : palette[color!][100]};
    }
  `}
`;

const hero = css<IButtonProps>`
  ${({ theme: { palette, isDark }, color }) => css`
    padding: 1rem 1.5rem;
    border-radius: 0.75rem;
    font-size: 3rem;
    line-height: 2.125rem;
    color: ${palette[color!][100]};
    background-color: ${palette[color!][600]};
    border: 1px solid transparent;
    width: 100%;
    text-align: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      ${isDark ? palette[color!][800] : palette[color!][200]} 0px 10px 15px -3px,
      ${isDark ? palette[color!][800] : palette[color!][200]} 0px 4px 6px -4px;
  `}
`;

const ButtonRoot = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ size, disabled, stretch, appearance, uppercase }) => css`
    padding: ${sizeStyles[size!].padding};
    border-radius: ${sizeStyles[size!].borderRadius};
    font-size: ${sizeStyles[size!].fontSize};
    line-height: ${sizeStyles[size!].lineHeight};
    ${disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
    ${stretch &&
    css`
      width: 100%;
      text-align: center;
      justify-content: center;
    `}
    ${uppercase &&
    css`
      text-transform: uppercase;
    `}
    ${appearance === 'simple' && simple}
    ${appearance === 'basic' && basic}
    ${appearance === 'primary' && primary}
    ${appearance === 'outlined' && outlined}
    ${appearance === 'hero' && hero}
  `}
`;

const Icon = styled.i<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ size, text }) => css`
    height: ${sizeStyles[size!].iconSize};
    width: ${sizeStyles[size!].iconSize};
    ${text === ''
      ? css`
          margin-right: 0em;
        `
      : css`
          margin-right: 0.25em;
        `};
  `}
`;

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { children, loading, icon, text, disable, ...rest } = props;
  return (
    <ButtonRoot role="button" ref={ref} {...rest} disabled={disable || loading}>
      {icon && <Icon {...props}>{icon}</Icon>}
      {loading && (
        <Icon {...props}>
          <RotatingCircleIcon />
        </Icon>
      )}
      {text}
      {children}
    </ButtonRoot>
  );
});

Button.defaultProps = {
  appearance: 'simple',
  color: 'major',
  disable: false,
  loading: false,
  size: 'md',
  stretch: false,
  text: '',
  uppercase: false,
};

export { Button };
