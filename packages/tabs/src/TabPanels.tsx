import React from 'react';
import { TabPanelsRoot } from './components';
import { ITabPanelsProps } from './types';

const TabPanels = React.forwardRef<HTMLDivElement, ITabPanelsProps>((props, ref) => {
  const { children, isLazy, ...rest } = props;

  const renderChildren = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (c: React.ReactNode) => {
      const childrenArray = React.Children.toArray(c);
      return React.Children.map(childrenArray, (c, i) => {
        const ele = c as React.ReactElement;
        return React.cloneElement(ele, {
          ...ele.props,
          isLazy,
          tabIndex: i,
        });
      });
    },
    [children],
  );

  return (
    <TabPanelsRoot ref={ref} role="tabpanels" {...rest}>
      {renderChildren(children)}
    </TabPanelsRoot>
  );
});

TabPanels.defaultProps = {};

TabPanels.displayName = 'TabPanels';

export { TabPanels };
