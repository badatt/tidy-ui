import { color, css, hsla, styled } from '@tidy-ui/commons';
import { ITooltipProps } from './types';

const bgColor = css`
  ${hsla(color.slate[900])}
`;

const textColor = css`
  ${hsla(color.slate[300])}
`;

const caretStyle = css`
  content: '';
  position: absolute;
  z-index: 1000001;
  border-width: 5px;
  border-style: solid;
  width: 0px;
  height: 0px;
  pointer-events: none;
`;

const tooltipStyle = css`
  position: absolute;
  font-size: 0.8rem;
  padding: 0.4em 0.6em;
  border-radius: 0.2rem;
  width: fit-content;
  background-color: ${bgColor};
  color: ${textColor};
  z-index: 1000000;
  text-align: center;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  overflow-wrap: break-word;
  white-space: pre;
  pointer-events: none;
  border-radius: 3px;
`;

//-------
const caretTop = css`
  ${caretStyle}
  top: calc(-5px);
  left: calc(50% - 5px);
  border-color: ${bgColor} transparent transparent transparent;
`;

const tooltipTop = css`
  ${tooltipStyle}
  bottom: calc(100% + 5px);
  left: 0;
`;

//-------
const caretRight = css`
  ${caretStyle}
  top: calc(50% - 5px);
  left: calc(100% - 5px);
  border-color: transparent ${bgColor} transparent transparent;
`;

const tooltipRight = css`
  ${tooltipStyle}
  left: calc(100% + 5px);
  top: calc(50% - 0.4rem - 0.4em);
`;

//--------
const caretBottom = css`
  ${caretStyle}
  top: calc(100% - 5px);
  left: calc(50% - 5px);
  border-color: transparent transparent ${bgColor} transparent;
`;

const tooltipBottom = css`
  ${tooltipStyle}
  top: calc(100% + 5px);
  left: 0;
`;

//-------
const caretLeft = css`
  ${caretStyle}
  top: calc(50% - 5px);
  left: calc(-5px);
  border-color: transparent transparent transparent ${bgColor};
`;

const tooltipLeft = css`
  ${tooltipStyle}
  right: calc(100% + 5px);
  top: calc(50% - 0.4rem - 0.4em);
`;

const TooltipRoot = styled.div<ITooltipProps>`
  position: relative;

  ${({ direction, wrap, width }) => css`
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
