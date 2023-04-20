import { color, css, hsla, styled } from '@tidy-ui/commons';
import { IDrawerProps } from './types';

const DrawerRoot = styled.div<IDrawerProps>`
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

const DrawerContent = styled.div<IDrawerProps>`
  display: flex;
  flex-direction: column;
  ${({ w, theme: { palette } }) => css`
    width: ${w};
    height: 100vh;
    background-color: ${palette.background.default};
  `}
`;

const CloseSection = styled.div<IDrawerProps>`
  display: flex;
  ${({ anchor }) => css`
    flex-direction: ${anchor === 'left' ? 'row-reverse' : 'row'};
  `}
`;

const CloseButton = styled.button<IDrawerProps>`
  padding: 0.5rem;
  ${({ theme: { palette } }) => css`
    color: ${palette.text.primary};
  `}
`;

export { CloseButton, CloseSection, DrawerContent, DrawerRoot };
