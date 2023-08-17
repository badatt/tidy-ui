import React from 'react';
import { TabPanelRoot } from './components';
import { ITabsContext, TabsContext } from './TabsContext';
import { ITabPanelProps } from './types';

const TabPanel = React.forwardRef<HTMLDivElement, ITabPanelProps>((props, ref) => {
  const { children, ele, isLazy, tabIndex, ...rest } = props;

  const { activeTabIndex } = React.useContext<ITabsContext>(TabsContext);

  if (isLazy && tabIndex !== activeTabIndex) {
    return null;
  }

  return (
    <TabPanelRoot ref={ref} role="tabpanel" isActive={tabIndex === activeTabIndex} {...rest}>
      {ele ? React.cloneElement(ele, { ...ele.props, isActive: tabIndex === activeTabIndex }, children) : children}
    </TabPanelRoot>
  );
});

TabPanel.defaultProps = {};

TabPanel.displayName = 'TabPanel';

export { TabPanel };
