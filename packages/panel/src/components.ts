import { css, hsla, styled } from '@tidy-ui/commons';
import { IPanelBodyProps, IPanelProps } from './types';

const PanelRoot = styled.div<IPanelProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ theme: { layout, palette, isDark } }) => css`
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

const Icon = styled.i<IPanelProps>`
  display: flex;
  justify-content: center;
  height: 1rem;
  width: 1rem;
  ${({ theme: { palette, isDark }, expanded }) => css`
    transform: ${expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
    color: ${isDark ? palette.neutral[500] : palette.neutral[700]};
  `}
  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const PanelBodyRoot = styled.div<IPanelBodyProps>`
  padding: 0rem 1rem;
  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  visibility: visible;
  ${({ visible }) => css`
    visibility: ${visible ? 'visible' : 'hidden'};
    opacity: ${visible ? '1' : '0'};
    height: ${visible ? 'fit-content' : '0'};
    padding-bottom: ${visible ? '1rem' : '0'};
  `}
`;

const PanelGroupRoot = styled.div<IPanelProps>`
  ${({ theme: { layout, palette, isDark } }) => css`
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

export { Icon, PanelBodyRoot, PanelGroupRoot, PanelHeaderRoot, PanelRoot };
