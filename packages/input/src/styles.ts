import { color, css, hsla } from '@tidy-ui/commons';
import { IInputElementProps, IInputGroupProps, ITextInputProps } from './types';

/**
 * @internal
 */
const getBorderColor = (isDark: boolean): number => (isDark ? 600 : 300);

const sizeScale = {
  lg: 1.5,
  md: 1,
  sm: 0.85,
  xl: 2,
  xs: 0.7,
  xxl: 2.5,
  xxs: 0.5,
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

  ${({ isStretched, girth, width }) => css`
    width: ${isStretched ? '100%' : width ?? 'inherit'};
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    font-size: calc(1rem * ${sizeScale[girth!]});
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

  ${({ theme: { palette, isDark }, status }) => css`
    border-radius: 0.375em;
    padding-inline-start: 0.5em;
    padding-inline-end: 0.5em;
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

  ${({ theme: { palette, isDark }, status }) => css`
    border-radius: 0.375em;
    padding-inline-start: 0.5em;
    padding-inline-end: 0.5em;
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

  ${({ girth }) => css`
    & input {
      padding-inline-start: calc(2.5em * ${sizeScale[girth!]});
      padding-inline-end: calc(2.5em * ${sizeScale[girth!]});
    }
    & > div:first-child > input {
      padding-inline-start: calc(1rem * ${sizeScale[girth!]});
    }
    & > div:last-child > input {
      padding-inline-end: calc(1rem * ${sizeScale[girth!]});
    }
  `}
`;

const inputElementBlend = css<IInputElementProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  ${({ theme: { isDark, typography }, isClickable, girth }) => css`
    font-size: calc(1rem * ${sizeScale[girth!]});
    height: calc(2.5em * ${sizeScale[girth!]});
    width: calc(2.5em * ${sizeScale[girth!]});
    font-size: calc(1rem * ${sizeScale[girth!]});
    line-height: calc(1.5 * ${sizeScale[girth!]});
    color: ${isDark ? hsla(color.slate[600]) : hsla(color.slate[400])};
    font-weight: ${typography.h6.fontWeight};
    ${isClickable
      ? css`
          cursor: pointer;
        `
      : css`
          pointer-events: none;
        `}
  `}
`;

export { filled, inputElementBlend, inputElementFrill, inputGroupBlend, inputGroupFrill, outlined, simple, underline };
