import { applyStandardOverrideStyles, css, hsla, Icon, styled } from '@tidy-ui/commons';
import { focusVisibility, hero, iconOnly, outlined, primary, simple, sizeStyles } from './styles';
import { IAnchorProps, IButtonClusterProps, IButtonGroupProps, IButtonProps, IIconButtonProps } from './types';

/**
 * Internal root component with styles
 *
 * @internal
 */
const AnchorRoot = styled.a<IAnchorProps>`
  ${({ theme: { palette, isDark }, disabled, girth, tone }) => css`
    margin: 0 0.5ch;
    display: inline-block;
    text-decoration: none;
    padding: 0.2em 0.3em;
    line-height: 1.5em;
    font-size: calc(${sizeStyles[girth!].fontSize} + 0.125rem);
    color: ${isDark ? palette[tone!][400] : palette[tone!][600]};
    ${disabled
      ? css`
          cursor: not-allowed;
          pointer-events: none;
          opacity: 0.6;
        `
      : css`
          background-image: linear-gradient(
            ${hsla(palette[tone!].shades[500], 0.7)},
            ${hsla(palette[tone!].shades[500], 0.7)}
          );
          background-size: 100% 0em;
          background-position-y: 100%;
          background-repeat: no-repeat;
          transition: background-size 0.2s ease-in-out;
          :hover,
          :active,
          :focus {
            background-size: 100% 25%;
          }
        `}
  `}
  ${applyStandardOverrideStyles}
`;

const AnchorWithIcon = styled.span<IAnchorProps>`
  display: flex;
  align-items: baseline;
  gap: 0.25ch;

  & svg,
  & span {
    height: 0.8em !important;
    width: 0.8em !important;
  }
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
  user-select: none;
  white-space: nowrap;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  transition: all 200ms linear;
  ${({ girth, disabled, isStretched, variant, icon, isUppercase }) => css`
    font-size: ${sizeStyles[girth!].fontSize};
    padding: 0.2em 0.3em;
    border-radius: 0.3em;
    line-height: 1.5em;
    ${disabled &&
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
    ${variant === 'simple' && !icon && simple}
    ${variant === 'primary' && !icon && primary}
    ${variant === 'outlined' && !icon && outlined}
    ${variant === 'hero' && !icon && hero}
    ${icon && iconOnly}
    ${focusVisibility}
  `}
  ${applyStandardOverrideStyles}
`;

/**
 * Internal root component with styles
 *
 * @internal
 */
const ButtonGroupRoot = styled.div<IButtonGroupProps>`
  display: flex;
  ${({ isVertical, isStretched, isUnified }) => css`
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
            ${isUnified &&
            css`
              border-top: 0 !important;
            `}
          }
          & > :not(:first-child):not(:last-child) {
            ${isUnified &&
            css`
              border-top: 0 !important;
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
            ${isUnified &&
            css`
              border-left: 0 !important;
            `}
          }
          & > :not(:first-child):not(:last-child) {
            ${isUnified &&
            css`
              border-right: 0 !important;
              border-left: 0 !important;
            `}
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
    }
    & > :not(:first-child):not(:last-child) {
      border-radius: 0 !important;
    }
  `}
  ${applyStandardOverrideStyles}
`;

/**
 * Internal root component with styles
 *
 * @internal
 */
const ButtonClusterRoot = styled.div<IButtonClusterProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  & * {
    box-shadow: none !important;
    &:hover {
      box-shadow: none !important;
    }
  }
  ${({ isStretched }) => css`
    ${isStretched &&
    css`
      width: 100% !important;
      & * {
        flex-grow: 1 !important;
        flex-shrink: 1 !important;
        flex-basis: 1% !important;
      }
    `}
  `}
  ${applyStandardOverrideStyles}
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
  ${({ girth, disabled, isIconOnly, variant, placement }) => css`
    font-size: ${sizeStyles[girth!].fontSize};
    ${isIconOnly
      ? css`
          padding: 0.3em;
          border-radius: 50%;
        `
      : css`
          padding: 0.2rem;
          border-radius: 0.4em;
        `}
    ${disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
    ${placement == 'right' &&
    css`
      flex-direction: row-reverse;
    `}
    ${variant === 'primary' && primary}
    ${variant === 'outlined' && outlined}
  `}
  ${applyStandardOverrideStyles}
`;

/**
 * The Wrapper component for Icon
 *
 * @internal
 */
const IconButtonIconWrapper = styled.span<Partial<IIconButtonProps>>`
  padding: 0.2em;
`;

/**
 * The Wrapper component for isIconOnly variant buttons
 *
 * @internal
 */
const IconButtonIconOnlyWrapper = styled.span<Partial<IIconButtonProps>>`
  ${({ isIconOnly }) => css`
    ${isIconOnly
      ? css`
          padding: 0.2em;
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
const IconButtonIcon = styled.span<Partial<IIconButtonProps>>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isIconOnly }) => css`
    ${isIconOnly
      ? css`
          height: 1.4em;
          width: 1.4em;
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
const IconButtonChildWrapper = styled.span<Partial<IIconButtonProps>>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  white-space: nowrap;
  user-select: none;
  ${({ placement }) => css`
    ${placement == 'right'
      ? css`
          padding-left: 0.4em;
        `
      : css`
          padding-right: 0.4em;
        `}
  `}
`;

const LoadingIcon = styled(Icon.RotatingCircle)`
  height: 1.5em;
  width: 1.5em;
  margin: 0 0.25em 0 0;
`;

export {
  AnchorRoot,
  AnchorWithIcon,
  ButtonClusterRoot,
  ButtonGroupRoot,
  ButtonRoot,
  IconButtonChildWrapper,
  IconButtonIcon,
  IconButtonIconOnlyWrapper,
  IconButtonIconWrapper,
  IconButtonRoot,
  LoadingIcon,
};
