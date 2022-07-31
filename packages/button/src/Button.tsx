import React, { forwardRef } from 'react';
import { RotatingCircleIcon } from '@tidy-ui/icons';
import { css, styled } from '@tidy-ui/theme';
import { basic, hero, outlined, primary, simple, sizeStyles } from './styles';
import { IButtonProps } from './types';

/**
 * Internal root component with styles
 *
 */
const ButtonRoot = styled.button<IButtonProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  user-select: none;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  transition: all 0.3s linear;
  ${({ withSize, isDisabled, isStretched, withType, isUppercase }) => css`
    font-size: ${sizeStyles[withSize!].fontSize};
    padding: 0.3em 0.5rem;
    border-radius: 0.3em;
    line-height: 1.5em;
    ${isDisabled &&
    css`
      cursor: not-allowed;
      opacity: 0.6;
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

/**
 * Internal Icon component with styles
 *
 */
const Icon = styled(RotatingCircleIcon)<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.5em;
  width: 1.5em;
  margin-right: 0.25em;
`;

/**
 * Button component cab be used to represent CTAs in your pages, can be a good replacement
 * for default html `button`, powered by various styles (with theming) and settings
 *
 */
const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { children, isLoading, isDisabled, ...rest } = props;
  return (
    <ButtonRoot role="button" ref={ref} {...rest} isDisabled={isDisabled || isLoading}>
      {isLoading && <Icon />}
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
  withType: 'basic',
};

export { Button };
