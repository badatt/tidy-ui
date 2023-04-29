import { color, css, hsla } from '@tidy-ui/commons';
import { IInputElementProps, IInputGroupProps, ITextInputProps } from './types';

/**
 * @internal
 */
const getBorderColor = (isDark: boolean): number => (isDark ? 600 : 300);

const sizeScale = {
  lg: 1.2,
  md: 1,
  sm: 0.9,
  xl: 1.4,
  xs: 0.85,
  xxl: 1.6,
  xxs: 0.75,
};

const commonStyles = css<ITextInputProps>`
  min-width: 0px;
  outline: transparent solid 2px;
  outline-offset: 2px;
  position: relative;
  appearance: none;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-duration: 200ms;
  border-width: 1px;
  border-image: initial;
  background: inherit;
  color: inherit;

  ${({ disabled, stretched, sz, w }) => css`
    width: ${stretched ? '100%' : w || 'inherit'};
    height: calc(2.5em * ${sizeScale[sz!]});
    font-size: calc(1rem * ${sizeScale[sz!]});
    line-height: calc(1.5 * ${sizeScale[sz!]});
    ${disabled &&
    css`
      pointer-events: none;
      cursor: not-allowed;
      opacity: 0.6;
      transition: none;
    `}
    ::placeholder {
      color: ${hsla(color.slate[500])};
      opacity: 1;
    }

    :-ms-input-placeholder {
      color: ${hsla(color.slate[500])};
    }

    ::-ms-input-placeholder {
      color: ${hsla(color.slate[500])};
    }
  `}
`;

const outlined = css<ITextInputProps>`
  ${commonStyles}
  border-style: solid;

  ${({ theme: { palette, isDark }, status, sz }) => css`
    border-radius: calc(0.375rem * ${sizeScale[sz!]});
    padding-inline-start: calc(1rem * ${sizeScale[sz!]});
    padding-inline-end: calc(1rem * ${sizeScale[sz!]});
    border-color: ${status ? palette[status][getBorderColor(isDark)] : hsla(color.slate[getBorderColor(isDark)])};
    :hover {
      border-color: ${status ? palette[status][500] : hsla(color.slate[400])};
    }
    :focus-visible {
      z-index: 1;
      border-color: ${status ? palette[status][500] : palette['info'][500]};
      box-shadow: ${status ? palette[status][500] : palette['info'][500]} 0px 0px 0px 1px;
    }
  `}
`;

const filled = css<ITextInputProps>`
  ${commonStyles}
  border-style: solid;
  border-color: transparent;

  ${({ theme: { palette, isDark }, status, sz }) => css`
    border-radius: calc(0.375rem * ${sizeScale[sz!]});
    padding-inline-start: calc(1rem * ${sizeScale[sz!]});
    padding-inline-end: calc(1rem * ${sizeScale[sz!]});
    background-color: ${isDark ? hsla(color.slate[700]) : hsla(color.slate[300])};
    :hover {
      background-color: ${isDark ? hsla(color.slate[600]) : hsla(color.slate[200])};
    }
    :focus-visible {
      background-color: transparent;
      z-index: 1;
      border-color: ${status ? palette[status][500] : palette['info'][500]};
      box-shadow: ${status ? palette[status][500] : palette['info'][500]} 0px 0px 0px 1px;
    }
  `}
`;

const underline = css<ITextInputProps>`
  ${commonStyles}
  border-bottom: 1px;
  border-bottom-style: solid;

  ${({ theme: { palette, isDark }, status }) => css`
    border-color: ${status ? palette[status][getBorderColor(isDark)] : hsla(color.slate[getBorderColor(isDark)])};
    :hover {
      border-color: ${status ? palette[status][500] : hsla(color.slate[500])};
    }
    :focus-visible {
      z-index: 1;
      border-color: ${status ? palette[status][500] : palette['info'][500]};
      box-shadow: ${status ? palette[status][500] : palette['info'][500]} 0px 1px 0px 0px;
    }
  `}
`;

const simple = css<ITextInputProps>`
  ${commonStyles}
`;

const inputGroupFrill = css<IInputGroupProps>`
  width: 100%;
  display: flex;
  position: relative;
  isolation: isolate;

  & > :first-child,
  & > :first-child input {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
  & > :first-child {
    border-right: 0 !important;
  }
  & > :last-child,
  & > :last-child input {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
  }
  & > :last-child {
    border-left: 0 !important;
  }
  & > :not(:first-child):not(:last-child),
  & > :not(:first-child):not(:last-child) input {
    border-radius: 0 !important;
  }
`;

const inputElementFrill = css<IInputElementProps>`
  ${outlined}
  display: flex;
  align-items: center;
  pointer-events: none;
  width: auto;
  white-space: nowrap;
  flex: 0 0 auto;
  ${({ theme: { isDark, typography } }) => css`
    background-color: ${isDark ? hsla(color.slate[700]) : hsla(color.slate[200])};
    color: ${isDark ? hsla(color.slate[400]) : hsla(color.slate[600])};
    font-weight: ${typography.h6.fontWeight};
  `}
`;

const inputGroupBlend = css<IInputGroupProps>`
  width: 100%;
  display: flex;
  position: relative;
  isolation: isolate;

  & > :first-child {
    left: 0;
  }

  & > :last-child {
    right: 0;
  }

  ${({ sz }) => css`
    & input {
      padding-inline-start: calc(2.5em * ${sizeScale[sz!]});
      padding-inline-end: calc(2.5em * ${sizeScale[sz!]});
    }
    & > div:first-child > input {
      padding-inline-start: calc(1rem * ${sizeScale[sz!]});
    }
    & > div:last-child > input {
      padding-inline-end: calc(1rem * ${sizeScale[sz!]});
    }
  `}
`;

const inputElementBlend = css<IInputElementProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  ${({ theme: { isDark, typography }, clickable, sz }) => css`
    font-size: calc(1rem * ${sizeScale[sz!]});
    height: calc(2.5em * ${sizeScale[sz!]});
    width: calc(2.5em * ${sizeScale[sz!]});
    font-size: calc(1rem * ${sizeScale[sz!]});
    line-height: calc(1.5 * ${sizeScale[sz!]});
    color: ${isDark ? hsla(color.slate[600]) : hsla(color.slate[400])};
    font-weight: ${typography.h6.fontWeight};
    ${clickable
      ? css`
          cursor: pointer;
        `
      : css`
          pointer-events: none;
        `}
  `}
`;

export { filled, inputElementBlend, inputElementFrill, inputGroupBlend, inputGroupFrill, outlined, simple, underline };
