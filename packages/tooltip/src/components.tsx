import { css, styled } from '@tidy-ui/commons';
import {
  caretBottom,
  caretLeft,
  caretRight,
  caretTop,
  tooltipBottom,
  tooltipLeft,
  tooltipRight,
  tooltipTop,
} from './styles';
import { ITooltipProps } from './types';

const TooltipRoot = styled.div<ITooltipProps>`
  position: relative;

  ${({ direction, canWrap: wrap, width }) => css`
    &::before {
      display: none;
      content: attr(aria-label);
      ${direction == 'top' && tooltipTop}
      ${direction == 'right' && tooltipRight}
      ${direction == 'bottom' && tooltipBottom}
      ${direction == 'left' && tooltipLeft}
    }
    &::after {
      display: none;
      ${direction == 'top' && caretTop}
      ${direction == 'right' && caretRight}
      ${direction == 'bottom' && caretBottom}
      ${direction == 'left' && caretLeft}
    }
    &:hover,
    &:active,
    &:focus {
      ${wrap
        ? css`
            &::before {
              width: max-content;
              max-width: ${width};
              word-wrap: break-word;
              white-space: pre-line;
              border-collapse: separate;
              display: block;
              position: absolute;
            }
            &::after {
              display: inline-block;
            }
          `
        : css`
            &::before,
            &::after {
              display: inline-block;
            }
          `}
    }
  `}
`;

export { TooltipRoot };
