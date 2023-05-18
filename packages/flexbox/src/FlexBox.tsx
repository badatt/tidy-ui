import React from 'react';
import { applyStandardOverrideStyles, css, styled } from '@tidy-ui/commons';
import { FlexItem } from './FlexItem';
import { IFlexBoxProps } from './types';

const FlexBoxRoot = styled.div<IFlexBoxProps>`
  ${({ height, width, fuh, alc, ali, cgp, fld, flow, gap, jsc, rgp, nowrap, margin }) => css`
    display: flex;
    margin: ${margin};
    flex-direction: ${fld};
    justify-content: ${jsc};
    flex-wrap: ${nowrap ? 'nowrap' : 'wrap'};
    ${ali &&
    css`
      align-items: ${ali};
    `}
    ${!ali &&
    alc &&
    css`
      align-content: ${alc};
    `}
    
    ${width &&
    css`
      width: ${width};
    `}
    ${!fuh &&
    height &&
    css`
      height: ${height};
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
  ${applyStandardOverrideStyles}
`;

/** @internal */
interface FlexBoxComponent
  extends React.ForwardRefExoticComponent<IFlexBoxProps & React.RefAttributes<HTMLDivElement>> {
  /** @internal */
  Item: typeof FlexItem;
}

/**
 * FlexBox can be used to create layout components with css flex properties. It also
 * has some presets like, centering items inside a component both main and cross axis
 */
const FlexBox = React.forwardRef<HTMLDivElement, IFlexBoxProps>((props, ref) => {
  const { children, ...r } = props;
  const [rest, setRest] = React.useState<IFlexBoxProps>(r);

  React.useEffect(() => {
    if (r.ctr) {
      setRest({
        ...rest,
        alc: 'center',
        fuh: rest.height ? false : true,
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
  jsc: 'flex-start',
  nowrap: false,
};

FlexBox.displayName = 'FlexBox';

FlexBox.Item = FlexItem;

export { FlexBox };
