import { css, hsla, Icon, styled } from '@tidy-ui/commons';
import { IPanelBodyProps, IPanelProps } from './types';

const PanelRoot = styled.div<IPanelProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ theme: { layout, palette, isDark }, margin, w }) => css`
    margin: ${margin};
    width: ${w};
    border: 1px solid ${isDark ? palette.neutral[700] : palette.neutral[400]};
    border-radius: ${layout.radius};
    background-color: ${isDark ? hsla(palette.neutral.shades[900], 0.3) : palette.neutral[50]};
  `}
`;

const PanelHeaderRoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  padding: 1rem 1rem;
`;

const ActionIcon = styled(Icon.ExpandMore)`
  ${({ theme: { palette, isDark } }) => css`
    color: ${isDark ? palette.neutral[500] : palette.neutral[700]};
  `}
  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const PanelBodyRoot = styled.div<IPanelBodyProps>`
  display: block;
  padding: 0rem 1rem;
  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  visibility: visible;
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

const PanelGroupRoot = styled.div<IPanelProps>`
  ${({ theme: { layout, palette, isDark }, margin }) => css`
    margin: ${margin};
    border: 1px solid ${isDark ? palette.neutral[700] : palette.neutral[400]};
    border-radius: ${layout.radius};
    & > * {
      border: 0;
    }

    & > :not(:last-child)::after {
      content: '';
      border-bottom: 0.5px solid ${isDark ? palette.neutral[700] : palette.neutral[400]};
    }
  `}
`;

export { ActionIcon, PanelBodyRoot, PanelGroupRoot, PanelHeaderRoot, PanelRoot };
