import React from 'react';
import { TabRoot } from './components';
import { ITabsContext, TabsContext } from './TabsContext';
import { ITabProps } from './types';

const Tab = React.forwardRef<HTMLDivElement, ITabProps>((props, ref) => {
  const { children, ele, tabIndex, ...rest } = props;

  const { activeTabIndex, onTabChange } = React.useContext<ITabsContext>(TabsContext);

  return (
    <TabRoot
      ref={ref}
      role="tab"
      isActive={tabIndex === activeTabIndex}
      onClick={() => onTabChange(tabIndex)}
      {...rest}
    >
      {ele ? React.cloneElement(ele, { ...ele.props, isActive: tabIndex === activeTabIndex }, children) : children}
    </TabRoot>
  );
});

Tab.defaultProps = {};

Tab.displayName = 'Tab';

export { Tab };
