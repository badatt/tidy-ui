import React, { forwardRef, useEffect, useState } from 'react';
import { css, styled } from '@tidy-ui/commons';
import { IFlexBoxProps } from './types';

const FlexBoxRoot = styled.div<IFlexBoxProps>`
  ${({ h, w, fuh, alc, ali, cgp, fld, flow, gap, jsc, rgp, fwp }) => css`
    display: flex;
    flex-direction: ${fld};
    justify-content: ${jsc};
    flex-wrap: ${fwp};
    ${ali &&
    css`
      align-items: ${ali};
    `}
    ${!ali &&
    alc &&
    css`
      align-content: ${alc};
    `}
    
    ${w &&
    css`
      width: ${w};
    `}
    ${!fuh &&
    h &&
    css`
      height: ${h};
    `}
    ${fuh &&
    css`
      height: 100%;
    `}
    ${gap &&
    css`
      gap: ${gap};
    `}
    ${cgp &&
    css`
      column-gap: ${cgp};
    `}
    ${rgp &&
    css`
      row-gap: ${rgp};
    `}
    ${flow &&
    css`
      flex-flow: ${flow};
    `}
  `}
`;

const FlexBox = forwardRef<HTMLDivElement, IFlexBoxProps>((props, ref) => {
  const { children, ...r } = props;
  const [rest, setRest] = useState<IFlexBoxProps>(r);

  useEffect(() => {
    if (r.ctr) {
      setRest({
        ...rest,
        alc: 'center',
        fuh: rest.h ? false : true,
        jsc: 'center',
      });
    }
  }, [r.ctr]);

  return (
    <FlexBoxRoot ref={ref} role="presentation" {...rest}>
      {children}
    </FlexBoxRoot>
  );
});

FlexBox.defaultProps = {
  alc: 'flex-start',
  ctr: false,
  fld: 'row',
  fuh: false,
  fwp: 'wrap',
  jsc: 'flex-start',
};

export { FlexBox };
