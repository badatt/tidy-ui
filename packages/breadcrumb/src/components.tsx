import { css, styled } from '@tidy-ui/commons';
import { IBreadcrumbItemProps, IBreadCrumbItemWrapperProps, IBreadcrumbProps } from './types';

const BreadcrumbRoot = styled.ol<IBreadcrumbProps>`
  display: flex;
  gap: 0.5rem;
`;

const BreadcrumbItemWrapper = styled.li<IBreadCrumbItemWrapperProps>`
  ${({ theme: { palette, isDark }, tone }) => css`
    color: ${isDark ? palette[tone!][500] : palette[tone!][600]};
  `}
`;

const activeItemStyle = css<IBreadcrumbItemProps>`
  ${({ theme: { palette, isDark } }) => css`
    text-decoration: none;
    cursor: auto;
    pointer-events: none;
    color: ${isDark ? palette.neutral[400] : palette.neutral[700]};
  `}
`;

const inactiveItemStyle = css<IBreadcrumbItemProps>`
  cursor: pointer;
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-size: 0% 0.1em;
  background-position-y: 100%;
  background-position-x: 0%;
  background-repeat: no-repeat;
  transition: background-size 0.2s ease-in-out;
  &:hover,
  &:focus {
    background-size: 100% 0.1em;
  }
`;

const BreadcrumbItemRoot = styled.a<IBreadcrumbItemProps>`
  ${({ theme: { typography }, active }) => css`
    font-size: ${typography.fontSize};
    ${active ? activeItemStyle : inactiveItemStyle}
  `}
`;

const BreadcrumbSeparator = styled.div`
  ${({ theme: { palette } }) => css`
    color: ${palette.neutral[500]};
  `}
`;

export { BreadcrumbItemRoot, BreadcrumbItemWrapper, BreadcrumbRoot, BreadcrumbSeparator };
