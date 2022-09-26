import { css, IPalette, styled, TTone } from '@tidy-ui/commons';
import { filledStyle, outlinedStyle, sizeStyles } from './styles';
import { IChipProps } from './types';

const ChipRoot = styled.div<IChipProps>`
  display: flex;
  align-items: center;
  gap: 0.2em;
  line-height: 1em;
  user-select: none;
  vertical-align: middle;
  width: fit-content;
  ${({ icon, size, outlined, disabled, clickable, placement }) => css`
    font-size: ${sizeStyles[size!].fontSize};
    flex-direction: ${placement === 'right' ? 'row-reverse' : 'row'};
    ${placement === 'right' &&
    css`
      padding-right: 0.3em;
      padding-left: 0.5em;
    `}
    ${placement === 'left' &&
    css`
      padding-right: 0.5em;
      padding-left: 0.3em;
    `}
    ${icon
      ? css`
          padding-top: 0.3em;
          padding-bottom: 0.3em;
          border-radius: 1.5em;
        `
      : css`
          padding: 0.5em 0.8em;
          border-radius: 1.5em;
        `}
    ${disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
    ${!disabled &&
    clickable &&
    css`
      cursor: pointer;
    `}
    ${outlined ? outlinedStyle : filledStyle}
  `}
`;

/** @internal */
const outlinedChipIconColor = (isDark: boolean, palette: IPalette, tone: TTone) =>
  isDark ? palette[tone][700] : palette[tone][400];

const ChipIcon = styled.span<IChipProps>`
  height: 1.5em;
  width: 1.5em;
  ${({ theme: { isDark, palette }, tone, outlined }) => css`
    ${outlined
      ? css`
          color: ${outlinedChipIconColor(isDark, palette, tone!)};
        `
      : css`
          color: ${palette[tone!][400]};
        `}
  `}
`;

export { ChipIcon, ChipRoot };
