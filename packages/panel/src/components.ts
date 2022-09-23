import { color, createFontStyle, css, hsla, Icon, styled } from '@tidy-ui/commons';
import { IPanelBodyProps, IPanelGroupProps, IPanelProps } from './types';

const PanelRoot = styled.div<IPanelProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ theme: { layout, isDark }, margin, noBorder, w }) => css`
    margin: ${margin};
    width: ${w};
    ${!noBorder &&
    css`
      border: 1px solid ${isDark ? hsla(color.slate[600]) : hsla(color.slate[400])};
      border-radius: ${layout.radius};
    `}
  `}
`;

const PanelHeaderRoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  padding: 1rem 1rem;
  ${createFontStyle('h6')}
`;

/** @internal */
interface IActionIconProps {
  /** @internal */
  expanded?: boolean;
}

const ActionIcon = styled.span<IActionIconProps>`
  min-width: 1.5rem;
  height: 1.5rem;
  width: 1.5rem;
  ${({ expanded }) =>
    css`
      transform: ${expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
    `}
  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const PanelBodyRoot = styled.div<IPanelBodyProps>`
  display: block;
  padding: 0rem 1rem;
  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  visibility: visible;
  ${createFontStyle()}
  ${({ visible, h }) => css`
    visibility: ${visible ? 'visible' : 'hidden'};
    opacity: ${visible ? '1' : '0'};
    height: ${visible ? 'fit-content' : '0'};
    padding-bottom: ${visible ? '1rem' : '0'};
    ${visible
      ? css`
          height: ${h || 'fit-content'};
        `
      : css`
          height: 0;
        `}
    ${h &&
    css`
      overflow-y: auto;
    `}
  `}
`;

const PanelGroupRoot = styled.div<IPanelGroupProps>`
  ${({ theme: { layout, isDark }, margin, noSeparator }) => css`
    margin: ${margin};
    border-radius: ${layout.radius};
    & > :first-child {
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
      border-bottom: 0 !important;
    }
    & > :last-child {
      border-top-left-radius: 0 !important;
      border-top-right-radius: 0 !important;
      border-top: 0 !important;
    }
    & > :not(:first-child):not(:last-child) {
      border-top: 0 !important;
      border-bottom: 0 !important;
      border-radius: 0 !important;
    }

    ${!noSeparator &&
    css`
      & > :not(:last-child)::after {
        content: '';
        border-bottom: 1px solid ${isDark ? hsla(color.slate[600]) : hsla(color.slate[400])};
      }
    `}
  `}
`;

export { ActionIcon, PanelBodyRoot, PanelGroupRoot, PanelHeaderRoot, PanelRoot };
