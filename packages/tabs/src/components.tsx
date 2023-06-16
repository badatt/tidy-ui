import { applyStandardOverrideStyles, color, css, hsla, styled } from '@tidy-ui/commons';
import { ITabPanelProps, ITabPanelsProps, ITabProps, ITabsGroupProps, ITabsProps } from './types';

const TabsGroupRoot = styled.div<ITabsGroupProps>`
  display: flex;
  flex-direction: column;
  ${applyStandardOverrideStyles}
`;

const TabsRoot = styled.div<ITabsProps>`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  overflow-x: auto;

  ${({ theme: { isDark }, canJustify, hasFullWidth, hasDefaultStyle }) => css`
    ${canJustify &&
    css`
      & > * {
        flex-grow: 1;
        text-align: center;
      }
    `}
    ${hasFullWidth &&
    hasDefaultStyle &&
    css`
      border-bottom: 2px solid ${isDark ? hsla(color.slate[700]) : hsla(color.slate[200])};
    `}
  `}
  ${applyStandardOverrideStyles}
`;

/**
 * @internal
 */
interface ExtendedTabRootProps extends ITabProps {
  /** @internal */
  hasDefaultStyle?: boolean;
  /** @internal */
  hasFullWidth?: boolean;
  /** @internal */
  isActive?: boolean;
}

const TabRoot = styled.div<ExtendedTabRootProps>`
  white-space: nowrap;
  transition: border-color 0.3s ease-in-out;
  ${({ theme: { palette, isDark }, hasDefaultStyle, hasFullWidth, isActive }) => css`
    ${hasDefaultStyle &&
    css`
      padding: 1rem 2rem;
    `}

    ${!hasFullWidth &&
    hasDefaultStyle &&
    css`
      border-bottom: 2px solid ${isDark ? hsla(color.slate[700]) : hsla(color.slate[200])};
    `}
    ${isActive &&
    hasDefaultStyle &&
    css`
      border-bottom: 4px solid ${palette.minor[500]};
    `}
  `}
  ${applyStandardOverrideStyles}
`;

const TabPanelsRoot = styled.div<ITabPanelsProps>`
  display: flex;
  flex-direction: row;
  ${applyStandardOverrideStyles}
`;

/**
 * @internal
 */
interface ExtendedTabPanelRootProps extends ITabPanelProps {
  /** @internal */
  isActive?: boolean;
}

const TabPanelRoot = styled.div<ExtendedTabPanelRootProps>`
  padding-top: 1rem;

  ${({ isActive }) => css`
    ${isActive
      ? css`
          display: inline-block;
        `
      : css`
          display: none;
        `}
  `}
  ${applyStandardOverrideStyles}
`;

export { TabPanelRoot, TabPanelsRoot, TabRoot, TabsGroupRoot, TabsRoot };
