import React from 'react';
import { styled, css } from '@tidy-ui/theme';
import { RotatingCircleIcon } from '@tidy-ui/icons';
import { sizeStyles } from './style';
import { IButtonProps } from './types';

const simple = css<IButtonProps>`
  ${({ theme: { palette, isDark }, color }) => css`
    color: ${isDark ? palette[color!][400] : palette[color!][600]};
    background-color: transparent;
    border: none;
    &:hover {
      background-color: ${isDark ? palette[color!][900] : palette[color!][100]};
    }
  `}
`;

const basic = css<IButtonProps>`
  ${({ theme: { palette, isDark }, color }) => css`
    color: ${isDark ? palette[color!][400] : palette[color!][600]};
    background-color: ${isDark ? palette[color!][900] : palette[color!][100]};
    border: 1px solid transparent;
    ${!isDark &&
    css`
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        ${palette[color!][200]} 0px 10px 15px -3px, ${palette[color!][200]} 0px 4px 6px -4px;
    `}
    ${isDark &&
    css`
      opacity: 0.8;
    `}
    &:hover {
      background-color: ${isDark ? palette[color!][800] : palette[color!][200]};
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        ${isDark ? palette[color!][600] : palette[color!][300]} 0px 10px 15px -3px,
        ${isDark ? palette[color!][600] : palette[color!][300]} 0px 4px 6px -4px;
      opacity: 1;
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
    background-color: ${isDark ? palette[color!][900] : palette[color!][50]};
    border: 1px solid ${isDark ? palette[color!][600] : palette[color!][300]};
    ${isDark &&
    css`
      opacity: 0.8;
    `}
    &:hover {
      background-color: ${isDark ? palette[color!][800] : palette[color!][100]};
      opacity: 1;
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
  text: '',
  size: 'md',
  stretch: false,
  uppercase: false,
};

export { Button };
