import React, { forwardRef, ForwardRefExoticComponent, RefAttributes, useEffect, useState } from 'react';
import { css, styled } from '@tidy-ui/commons';
import { FlexItem } from './FlexItem';
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

/** @internal */
interface FlexBoxComponent extends ForwardRefExoticComponent<IFlexBoxProps & RefAttributes<HTMLDivElement>> {
  /** @internal */
  Item: typeof FlexItem;
}

/**
 * FlexBox can be used to create layout components with css flex properties. It also
 * has some presets like, centering items inside a component both main and cross axis
 */
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
}) as FlexBoxComponent;

FlexBox.defaultProps = {
  alc: 'flex-start',
  ctr: false,
  fld: 'row',
  fuh: false,
  fwp: 'wrap',
  jsc: 'flex-start',
};

FlexBox.Item = FlexItem;

export { FlexBox };
