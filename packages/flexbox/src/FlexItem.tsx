import React, { forwardRef } from 'react';
import { css, styled } from '@tidy-ui/commons';
import { IFlexItemProps } from './types';

const FlexItemRoot = styled.div<IFlexItemProps>`
  position: relative;
  display: block;
  ${({ als, fbs, fgo, flx, fsk, fuw, ord, span }) => css`
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
    ${span &&
    span > 0 &&
    !fuw &&
    css`
      width: ${() => (span / 24) * 100}%;
    `}
    ${fuw &&
    css`
      width: 100%;
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

FlexItem.defaultProps = {
  fuw: false,
};

export { FlexItem };
