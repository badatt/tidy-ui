import React from 'react';
import { FlexBoxRoot } from './components';
import { FlexItem } from './FlexItem';
import { IFlexBoxProps } from './types';

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
  const { children, ele, ...rest } = props;

  const centerProps = React.useMemo(() => {
    if (rest.ctr) {
      return { ...rest, alc: 'center', fuh: rest.height ? false : true, jsc: 'center' };
    } else {
      return { ...rest };
    }
  }, [rest.ctr]);

  return (
    <FlexBoxRoot ref={ref} role="presentation" {...centerProps}>
      {ele ? React.cloneElement(ele, {}, children) : children}
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
