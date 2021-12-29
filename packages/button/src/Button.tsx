import React from 'react';
import { styled, css } from '@tidy-ui/theme';
import { RotatingCircleIcon } from '@tidy-ui/icons';
import { sizeStyles } from './style';
import { IButtonProps } from './types';

const basic = css<IButtonProps>`
  ${({ theme, kind }) => css`
    color: ${theme.palette[kind || 'neutral'].main};
    background-color: #e2e8f0;
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
  `}
`;

const filled = css<IButtonProps>`
  ${({ theme, kind }) => css`
    color: ${theme.palette[kind || 'neutral'].contrastText};
    background-color: ${theme.palette[kind || 'neutral'].main};
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      ${theme.palette[kind || 'neutral'].light} 0px 10px 15px -3px,
      ${theme.palette[kind || 'neutral'].light} 0px 4px 6px -4px;
  `}
`;

const outlined = css<IButtonProps>`
  ${({ theme, kind }) => css`
    color: ${theme.palette[kind || 'neutral'].main};
    background-color: transparent;
    border: 1px solid ${theme.palette[kind || 'neutral'].light};
  `}
`;

const hero = css<IButtonProps>`
  ${({ theme, kind }) => css`
    padding: 1rem 1.5rem;
    border-radius: 0.75rem;
    font-size: 3rem;
    line-height: 2.125rem;
    color: ${theme.palette[kind || 'neutral'].contrastText};
    background-color: ${theme.palette[kind || 'neutral'].main};
    border: 1px solid transparent;
    width: 100%;
    text-align: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      ${theme.palette[kind || 'neutral'].light} 0px 10px 15px -3px,
      ${theme.palette[kind || 'neutral'].light} 0px 4px 6px -4px;
  `}
`;

const ButtonRoot = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ size, disabled, fullWidth, appearance, uppercase }) => css`
    padding: ${sizeStyles[size || 'md'].padding};
    border-radius: ${sizeStyles[size || 'md'].borderRadius};
    font-size: ${sizeStyles[size || 'md'].fontSize};
    line-height: ${sizeStyles[size || 'md'].lineHeight};
    ${disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
    ${fullWidth &&
    css`
      width: 100%;
      text-align: center;
      justify-content: center;
    `}
    ${uppercase &&
    css`
      text-transform: uppercase;
    `}
    ${appearance === 'basic' && basic}
    ${appearance === 'filled' && filled}
    ${appearance === 'outlined' && outlined}
    ${appearance === 'hero' && hero}
  `}
`;

const Icon = styled.i<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ size, text }) => css`
    height: ${sizeStyles[size || 'md'].iconSize};
    width: ${sizeStyles[size || 'md'].iconSize};
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
  const { children, loading, icon, text, disabled, ...rest } = props;
  return (
    <ButtonRoot role="button" ref={ref} {...rest} disabled={disabled || loading}>
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
  disabled: false,
  loading: false,
  text: '',
  fullWidth: false,
  uppercase: false,
};

export { Button };