import { keyframes } from 'styled-components';
import { applyStandardOverrideStyles, color, css, hsla, styled } from '@tidy-ui/commons';
import { IMenuItemProps, IMenuPopupProps } from './types';

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOutScale = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
`;

const MenuWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

/** @internal */
const MenuPopup = styled.menu<IMenuPopupProps>`
  position: absolute;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  ${({ theme: { palette, layout }, isSharp }) => css`
    background-color: ${palette.background.paper};
    border-radius: ${!isSharp && layout.radius};
    box-shadow: ${layout.shadow};
    animation: ${(isVisible) => (isVisible ? fadeInScale : fadeOutScale)} 0.15s ease-out forwards;
    transform-origin: top left;
  `}
  ${({ pos }) =>
    pos === 'top'
      ? css`
          bottom: 100%;
          margin-bottom: 0.5rem;
        `
      : css`
          top: 100%;
          margin-top: 0.5rem;
        `};

  ${({ ali }) =>
    ali === 'right'
      ? css`
          right: 0;
        `
      : css`
          left: 0;
        `};
  ${applyStandardOverrideStyles}
`;

const MenuItemRoot = styled.li<IMenuItemProps>`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  cursor: pointer;
  ${({ theme: { layout, isDark }, isSharp }) => css`
    border-radius: ${!isSharp && layout.radius};
    &:hover {
      background-color: ${hsla(color.slate[getShade(isDark)], 0.5)};
    }
  `}

  ${applyStandardOverrideStyles}
`;

const MenuItemIcon = styled.i<IMenuItemProps>`
  display: flex;
  align-items: center;
  padding-right: 0.5em;
`;

/** @internal */
const getShade = (isDark: boolean) => (isDark ? 700 : 300);

const MenuItemSeparatorRoot = styled.hr`
  height: 1px;
  margin: 0.5rem 0;
  ${({ theme: { isDark } }) => css`
    background-color: ${hsla(color.slate[getShade(isDark)])};
  `}
  ${applyStandardOverrideStyles}
`;

const MenuTrigger = styled.div`
  cursor: pointer;
`;

export { MenuItemIcon, MenuItemRoot, MenuItemSeparatorRoot, MenuPopup, MenuTrigger, MenuWrapper };
