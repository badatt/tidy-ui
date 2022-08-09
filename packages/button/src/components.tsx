import { LaunchIcon, RotatingCircleIcon } from '@tidy-ui/icons';
import { css, styled } from '@tidy-ui/theme';
import { basic, hero, outlined, primary, simple, sizeStyles } from './styles';
import { IAnchorProps, IButtonGroupProps, IButtonProps, IButtonToolbarProps, IIconButtonProps } from './types';

/**
 * Internal root component with styles
 *
 * @internal
 */
const AnchorRoot = styled.a<IAnchorProps>`
  ${({ theme: { palette, isDark }, isDisabled }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${isDark ? palette['major'][400] : palette['major'][600]};
    ${isDisabled &&
    css`
      cursor: not-allowed;
      pointer-events: none;
      opacity: 0.6;
    `}
    &:hover {
      text-decoration: underline;
    }
  `};
`;

/**
 * Internal Icon component with styles
 *
 * @internal
 */
const AnchorIcon = styled(LaunchIcon)<IAnchorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1em;
  width: 1em;
`;

/**
 * Internal root component with styles
 *
 * @internal
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
  //transition: all 200ms linear;
  ${({ withSize, isDisabled, isStretched, withType, isUppercase }) => css`
    font-size: ${sizeStyles[withSize!].fontSize};
    padding: 0.3em 0.5rem;
    border-radius: 0.3em;
    line-height: 1.5em;
    ${isDisabled &&
    css`
      cursor: not-allowed;
      opacity: 0.6;
      transition: none;
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
 * Internal Button's Icon component with styles
 *
 * @internal
 */
const ButtonIcon = styled(RotatingCircleIcon)<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.5em;
  width: 1.5em;
  margin-right: 0.25em;
`;

/**
 * Internal root component with styles
 *
 * @internal
 */
const ButtonGroupRoot = styled.div<IButtonGroupProps>`
  display: flex;
  ${({ isVertical, isDisabled, isStretched, isUnified }) => css`
    ${isVertical
      ? css`
          flex-direction: column;
          & > :first-child {
            border-bottom-left-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
            ${isUnified &&
            css`
              border-bottom: 0 !important;
            `}
          }
          & > :last-child {
            border-top-left-radius: 0 !important;
            border-top-right-radius: 0 !important;
            border-top: 0 !important;
          }
          & > :not(:first-child):not(:last-child) {
            border-top: 0 !important;
            ${isUnified &&
            css`
              border-bottom: 0 !important;
            `}
          }
        `
      : css`
          & > :first-child {
            border-top-right-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
            ${isUnified &&
            css`
              border-right: 0 !important;
            `}
          }
          & > :last-child {
            border-top-left-radius: 0 !important;
            border-bottom-left-radius: 0 !important;
            border-left: 0 !important;
          }
          & > :not(:first-child):not(:last-child) {
            ${isUnified &&
            css`
              border-right: 0 !important;
            `}
            border-left: 0 !important;
          }
        `}
    ${isDisabled &&
    css`
      cursor: not-allowed !important;
      opacity: 0.6 !important;
      & * {
        cursor: not-allowed !important;
        box-shadow: none !important;
        &:hover {
          box-shadow: none !important;
        }
      }
    `}
    ${isStretched &&
    css`
      width: 100% !important;
      & * {
        flex-grow: 1 !important;
        flex-shrink: 1 !important;
        flex-basis: 1% !important;
      }
    `}
    & * {
      box-shadow: none !important;
      opacity: 1 !important;
    }
    & > :not(:first-child):not(:last-child) {
      border-radius: 0 !important;
    }
  `}
`;

/**
 * Internal root component with styles
 *
 * @internal
 */
const ButtonToolbarRoot = styled.div<IButtonToolbarProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  & * {
    box-shadow: none !important;
    &:hover {
      box-shadow: none !important;
    }
  }
  ${({ isDisabled }) => css`
    ${isDisabled &&
    css`
      cursor: not-allowed !important;
      opacity: 0.6 !important;
      & * {
        cursor: not-allowed !important;
      }
    `}
  `}
`;

/**
 * Internal root component with styles
 *
 * @internal
 */
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

/**
 * The Wrapper component for Icon
 *
 * @internal
 */
const IconButtonIconWrapper = styled.span<IIconButtonProps>`
  padding: 0.4em;
`;

/**
 * The Wrapper component for IconOnly type buttons
 *
 * @internal
 */
const IconButtonIconOnlyWrapper = styled.span<IIconButtonProps>`
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

/**
 * Internal Icon with styles
 *
 * @internal
 */
const IconButtonIcon = styled.i<IIconButtonProps>`
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

/**
 * Internal component for children other than Icon
 *
 * @internal
 */
const IconButtonChildWrapper = styled.span<IIconButtonProps>`
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

export {
  AnchorIcon,
  AnchorRoot,
  ButtonGroupRoot,
  ButtonIcon,
  ButtonRoot,
  ButtonToolbarRoot,
  IconButtonChildWrapper,
  IconButtonIcon,
  IconButtonIconOnlyWrapper,
  IconButtonIconWrapper,
  IconButtonRoot,
};
