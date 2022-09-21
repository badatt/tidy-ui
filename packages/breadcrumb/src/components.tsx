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

const BreadcrumbItemRoot = styled.a<IBreadcrumbItemProps>`
  ${({ theme: { typography, palette, isDark }, active }) => css`
    font-size: ${typography.fontSize};
    ${active
      ? css`
          text-decoration: none;
          cursor: auto;
          pointer-events: none;
          color: ${isDark ? palette.neutral[400] : palette.neutral[700]};
        `
      : css`
          cursor: pointer;
          text-decoration: underline;
        `}
  `}
`;

const BreadcrumbSeparator = styled.div`
  ${({ theme: { palette } }) => css`
    color: ${palette.neutral[500]};
  `}
`;

export { BreadcrumbItemRoot, BreadcrumbItemWrapper, BreadcrumbRoot, BreadcrumbSeparator };
