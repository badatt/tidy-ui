import React, { forwardRef } from 'react';
import { css, styled } from '@tidy-ui/commons';
import { IFlexItemProps } from './types';

const FlexItemRoot = styled.div<IFlexItemProps>`
  ${({ als, fbs, fgo, flx, fsk, ord }) => css`
    ${als &&
    css`
      align-self: ${als};
    `}
    ${fbs &&
    css`
      flex-basis: ${fbs};
    `}
    ${fgo &&
    css`
      flex-grow: ${fgo};
    `}
    ${flx &&
    css`
      flex: ${flx};
    `}
    ${fsk &&
    css`
      flex-shrink: ${fsk};
    `}
    ${ord &&
    css`
      order: ${ord};
    `}
  `}
`;

/**
 * FlexItem to be kept under FlexBox, comes with all css props
 */
const FlexItem = forwardRef<HTMLDivElement, IFlexItemProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <FlexItemRoot ref={ref} role="presentation" {...rest}>
      {children}
    </FlexItemRoot>
  );
});

FlexItem.defaultProps = {};

export { FlexItem };
