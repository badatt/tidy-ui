import React, { forwardRef } from 'react';
import { css, devices, styled } from '@tidy-ui/commons';
import { IColProps } from './types';

/** @internal */
const getWidth = (span: number) => {
  if (!span) return;
  const width = (span / 24) * 100;
  return `width: ${width}%`;
};

const ColRoot = styled.div<IColProps>`
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

/**
 * Col component represents each block in a grid layout that brings in responsiveness out of the box.
 * Default screen size responsiveness can be changed by overriding props
 */
const Col = forwardRef<HTMLDivElement, IColProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <ColRoot ref={ref} role="gridcell" {...rest}>
      {children}
    </ColRoot>
  );
});

Col.defaultProps = {
  lg: 4,
  md: 6,
  sm: 8,
  xl: 2,
  xs: 12,
};

export { Col };
