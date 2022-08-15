import React, { forwardRef } from 'react';
import { css, styled } from '@tidy-ui/commons';
import { IDividerProps } from './types';

const DividerRoot = styled.hr<IDividerProps>`
  ${({ theme: { palette }, withColor, withShade, withDensity, withStyle }) => css`
    border-color: ${palette[withColor!][withShade!]};
    margin: 0px;
    flex-shrink: 0;
    border-width: 0px 0px ${withDensity};
    border-style: ${withStyle};
  `}
`;

const Divider = forwardRef<HTMLHRElement, IDividerProps>((props, ref) => {
  const { className, ...rest } = props;
  return <DividerRoot ref={ref} className={className} role="divider" {...rest} />;
});

Divider.defaultProps = {
  withColor: 'neutral',
  withDensity: 'thin',
  withShade: 500,
  withStyle: 'solid',
};

export { Divider };
