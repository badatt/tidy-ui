import { color, createFontStyle, css, hsla, styled } from '@tidy-ui/commons';
import { IPanelBodyProps, IPanelGroupProps, IPanelProps } from './types';

const PanelRoot = styled.div<IPanelProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ theme: { layout, isDark }, margin, noBorder, width }) => css`
    margin: ${margin};
    width: ${width};
    ${!noBorder &&
    css`
      border: 1px solid ${isDark ? hsla(color.slate[600]) : hsla(color.slate[400])};
      border-radius: ${layout.radius};
    `}
  `}
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
  background-color: ${hsla(color.slate[400], 0.3)};
  border-radius: 50%;
  display: none;
  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  ${({ expanded }) =>
    css`
      transform: ${expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
    `}
  &:hover {
    background-color: ${hsla(color.slate[500], 0.4)};
  }
`;

const PanelHeaderRoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  padding: 1rem 1rem;
  ${createFontStyle('h6')}
  &:hover ${ActionIcon} {
    display: block;
  }
`;

const PanelBodyRoot = styled.div<IPanelBodyProps>`
  display: block;
  padding: 0rem 1rem;
  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  visibility: visible;
  ${createFontStyle()}
  ${({ visible, height }) => css`
    visibility: ${visible ? 'visible' : 'hidden'};
    opacity: ${visible ? '1' : '0'};
    height: ${visible ? 'fit-content' : '0'};
    padding-bottom: ${visible ? '1rem' : '0'};
    ${visible
      ? css`
          height: ${height ?? 'fit-content'};
        `
      : css`
          height: 0;
        `}
    ${height &&
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
