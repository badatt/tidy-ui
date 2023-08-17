import { applyStandardOverrideStyles, css, styled } from '@tidy-ui/commons';
import { IPalette, TTone } from '@tidy-ui/types';
import { filledStyle, outlinedStyle, sizeStyles } from './styles';
import { IChipProps } from './types';

/** @internal */
const outlinedChipIconColor = (isDark: boolean, palette: IPalette, tone: TTone) =>
  isDark ? palette[tone][700] : palette[tone][400];

const ChipIcon = styled.span<IChipProps>`
  height: 1.5em;
  width: 1.5em;
  opacity: 0.8;
  ${({ theme: { isDark, palette }, tone, isFilled }) => css`
    ${isFilled
      ? css`
          color: ${palette[tone!][400]};
        `
      : css`
          color: ${outlinedChipIconColor(isDark, palette, tone!)};
        `}
  `}
`;

const ChipRoot = styled.div<IChipProps>`
  display: flex;
  align-items: center;
  gap: 0.2em;
  line-height: 1em;
  user-select: none;
  vertical-align: middle;
  width: fit-content;
  ${({ icon, girth, isFilled, disabled, isClickable, placement }) => css`
    font-size: ${sizeStyles[girth!].fontSize};
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
    isClickable &&
    css`
      cursor: pointer;
    `}
    ${isFilled ? filledStyle : outlinedStyle}
  `}
  &:hover ${ChipIcon} {
    opacity: 1;
  }
  ${applyStandardOverrideStyles}
`;

export { ChipIcon, ChipRoot };
