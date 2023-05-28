import { applyStandardOverrideStyles, color, createFontStyle, css, hsla, styled } from '@tidy-ui/commons';
import { IPanelBodyProps, IPanelGroupProps, IPanelProps } from './types';

const PanelRoot = styled.div<IPanelProps>`
  display: flex;
  flex-direction: column;
  ${applyStandardOverrideStyles}
`;

/** @internal */
interface IActionIconProps {
  /** @internal */
  isExpanded?: boolean;
}

const ActionIcon = styled.span<IActionIconProps>`
  min-width: 1.5rem;
  height: 1.5rem;
  width: 1.5rem;
  background-color: ${hsla(color.slate[400], 0.3)};
  border-radius: 50%;
  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  ${({ isExpanded }) =>
    css`
      transform: ${isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};
    `}
  &:hover {
    background-color: ${hsla(color.slate[500], 0.4)};
  }
`;

const PanelHeaderRoot = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  vertical-align: middle;
  cursor: pointer;
  margin: 0.5rem 0;
  ${applyStandardOverrideStyles}
`;

const PanelBodyRoot = styled.div<IPanelBodyProps>`
  display: block;
  //padding: 0rem 1rem;
  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  visibility: visible;
  ${createFontStyle()}
  ${({ isVisible, height }) => css`
    visibility: ${isVisible ? 'visible' : 'hidden'};
    opacity: ${isVisible ? '1' : '0'};
    height: ${isVisible ? 'fit-content' : '0'};
    padding-bottom: ${isVisible ? '1rem' : '0'};
    ${isVisible
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
  ${applyStandardOverrideStyles}
`;

const PanelGroupRoot = styled.div<IPanelGroupProps>`
  ${({ theme: { isDark }, margin, hasSeparator }) => css`
    margin: ${margin};
    ${hasSeparator &&
    css`
      & > :not(:last-child)::after {
        content: '';
        border-bottom: 1px solid ${isDark ? hsla(color.slate[600]) : hsla(color.slate[400])};
      }
    `}
  `}
  ${applyStandardOverrideStyles}
`;

export { ActionIcon, PanelBodyRoot, PanelGroupRoot, PanelHeaderRoot, PanelRoot };
