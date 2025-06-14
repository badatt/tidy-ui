import { applyStandardOverrideStyles, color, css, hsla, styled } from '@tidy-ui/commons';
import { IPanelBodyProps, IPanelGroupProps, IPanelHeaderProps, IPanelProps } from './types';

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

const PanelHeaderRoot = styled.div<IPanelHeaderProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  vertical-align: middle;
  cursor: pointer;
  padding: 0.5rem;
  border-left: 2px solid transparent;
  ${({ theme: { palette }, accent, isExpanded }) => css`
    ${isExpanded &&
    css`
      ${accent && `border-left: 2px solid ${palette[accent][600]};`}
    `}
  `}
  ${applyStandardOverrideStyles}
`;

const PanelBodyRoot = styled.div<IPanelBodyProps>`
  display: block;
  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  visibility: visible;
  border-left: 2px solid transparent;
  ${({ theme: { palette }, accent, isVisible, height }) => css`
    visibility: ${isVisible ? 'visible' : 'hidden'};
    opacity: ${isVisible ? '1' : '0'};
    height: ${isVisible ? 'fit-content' : '0'};
    padding: 0 0.5rem;
    ${isVisible
      ? css`
          height: ${height ?? 'fit-content'};
          ${accent && `border-left: 2px solid ${palette[accent][600]};`}
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
      & > :not(:last-child) {
        border-bottom: 1px solid ${isDark ? hsla(color.slate[700]) : hsla(color.slate[300])};
      }
    `}
  `}
  ${applyStandardOverrideStyles}
`;

export { ActionIcon, PanelBodyRoot, PanelGroupRoot, PanelHeaderRoot, PanelRoot };
