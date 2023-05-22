import { applyStandardOverrideStyles, createFontStyle, css, styled } from '@tidy-ui/commons';
import { activeItemStyle, inactiveItemStyle } from './styles';
import { IBreadcrumbItemProps, IBreadcrumbProps } from './types';

const BreadcrumbRoot = styled.ol<IBreadcrumbProps>`
  display: flex;
  gap: 0.5rem;
  ${applyStandardOverrideStyles}
`;

const BreadcrumbItemRoot = styled.a<IBreadcrumbItemProps>`
  ${({ theme: { palette, isDark }, tone, isActive }) => css`
    ${createFontStyle()}
    ${isActive ? activeItemStyle : inactiveItemStyle}
    color: ${isDark ? palette[tone!][500] : palette[tone!][700]};
  `}
  ${applyStandardOverrideStyles}
`;

const BreadcrumbSeparator = styled.div`
  ${({ theme: { palette } }) => css`
    ${createFontStyle()}
    color: ${palette.neutral[500]};
  `}
`;

export { BreadcrumbItemRoot, BreadcrumbRoot, BreadcrumbSeparator };
