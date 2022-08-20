import React, { forwardRef } from 'react';
import { css, styled } from '@tidy-ui/commons';
import { IDividerProps } from './types';

const DividerRoot = styled.hr<IDividerProps>`
  ${({ theme: { palette }, tone, shade, density, variant }) => css`
    border-color: ${palette[tone!][shade!]};
    margin: 0px;
    flex-shrink: 0;
    border-width: 0px 0px ${density};
    border-style: ${variant};
  `}
`;

/**
 * Divider can be use to give a horizontal separation between components, a good replacement
 * for <hr> in html, powered by various styles (with theming) and settings
 */
const Divider = forwardRef<HTMLHRElement, IDividerProps>((props, ref) => {
  const { className, ...rest } = props;
  return <DividerRoot ref={ref} className={className} role="divider" {...rest} />;
});

Divider.defaultProps = {
  density: 'thin',
  shade: 500,
  tone: 'neutral',
  variant: 'solid',
};

export { Divider };
