import { applyStandardOverrideStyles, color, css, hsla, styled } from '@tidy-ui/commons';
import { IDrawerProps } from './types';

/**
 * Internal Drawer root component
 *
 * @internal
 */
const DrawerRoot = styled.div<Pick<IDrawerProps, 'anchor'>>`
  z-index: ${Number.MAX_SAFE_INTEGER};
  position: fixed;
  background-color: ${hsla(color.slate[900], 0.7)};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  ${({ anchor }) => css`
    flex-direction: ${anchor === 'left' ? 'row' : 'row-reverse'};
  `}
`;

/**
 * Internal Drawer content component
 *
 * @internal
 */
const DrawerContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ theme: { palette } }) => css`
    height: 100vh;
    background-color: ${palette.background.default};
  `}
  ${applyStandardOverrideStyles}
`;

/**
 * Internal Drawer close section component
 *
 * @internal
 */
const CloseSection = styled.div<Pick<IDrawerProps, 'anchor'>>`
  display: flex;
  ${({ anchor }) => css`
    flex-direction: ${anchor === 'left' ? 'row-reverse' : 'row'};
  `}
`;

/**
 * Internal close button component
 *
 * @internal
 */
const CloseButton = styled.button<Pick<IDrawerProps, 'anchor'>>`
  padding: 0.5rem;
  position: absolute;
  z-index: 1;
  background-color: ${hsla(color.slate[700], 0.1)};
  ${({ theme: { palette }, anchor }) => css`
    color: ${palette.text.primary};
    ${anchor === 'left'
      ? css`
          top: 0;
          right: 0;
        `
      : css`
          top: 0;
          left: 0;
        `}
  `}
  &:hover {
    background-color: ${hsla(color.slate[700], 0.2)};
  }
`;

export { CloseButton, CloseSection, DrawerContent, DrawerRoot };
