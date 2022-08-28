import React, { forwardRef } from 'react';
import { css, devices, styled } from '@tidy-ui/commons';
import { IItemProps } from './types';

/** @internal */
const getWidth = (span: number) => {
  if (!span) return;
  const width = (span / 24) * 100;
  return `width: ${width}%`;
};

const ItemRoot = styled.div<IItemProps>`
  ${({ xs, sm, md, lg, xl }) => css`
    float: left;
    position: relative;
    min-height: 1px;
    width: 100%;
    ${devices.mobile} {
      ${xs && getWidth(xs)}
    }
    ${devices.tablet} {
      ${sm && getWidth(sm)}
    }
    ${devices.laptop} {
      ${md && getWidth(md)}
    }
    ${devices.desktop} {
      ${lg && getWidth(lg)}
    }
    ${devices.tv} {
      ${xl && getWidth(xl)}
    }
  `}
`;

const Item = forwardRef<HTMLDivElement, IItemProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <ItemRoot ref={ref} role="gridcell" {...rest}>
      {children}
    </ItemRoot>
  );
});

Item.defaultProps = {
  lg: 4,
  md: 6,
  sm: 8,
  xl: 2,
  xs: 12,
};

export { Item };
