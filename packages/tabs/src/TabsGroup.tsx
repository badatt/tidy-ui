import React from 'react';
import { TabsGroupRoot } from './components';
import { TabsContextProvider } from './TabsContext';
import { ITabsGroupProps } from './types';

const TabsGroup = React.forwardRef<HTMLDivElement, ITabsGroupProps>((props, ref) => {
  const { children, ele, ...rest } = props;
  return (
    <TabsContextProvider {...rest}>
      <TabsGroupRoot ref={ref} role="tablist" {...rest}>
        {ele ? React.cloneElement(ele, {}, children) : children}
      </TabsGroupRoot>
    </TabsContextProvider>
  );
});

TabsGroup.defaultProps = {};

TabsGroup.displayName = 'TabsGroup';

export { TabsGroup };
