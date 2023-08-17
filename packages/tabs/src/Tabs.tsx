import React from 'react';
import { TabsRoot } from './components';
import { ITabsContext, TabsContext } from './TabsContext';
import { ITabsProps } from './types';

const Tabs = React.forwardRef<HTMLDivElement, ITabsProps>((props, ref) => {
  const { children, ...rest } = props;
  const { hasDefaultStyle, hasFullWidth } = rest;

  const { activeTabIndex } = React.useContext<ITabsContext>(TabsContext);

  React.useEffect(() => rest.whenTabChange?.({ activeTabIndex }), [activeTabIndex]);

  const renderChildren = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (c: React.ReactNode) => {
      const childrenArray = React.Children.toArray(c);
      return React.Children.map(childrenArray, (c, i) => {
        const ele = c as React.ReactElement;
        return React.cloneElement(ele, {
          ...ele.props,
          hasDefaultStyle,
          hasFullWidth,
          tabIndex: i,
        });
      });
    },
    [children],
  );

  return (
    <TabsRoot ref={ref} role="tabs" {...rest}>
      {renderChildren(children)}
    </TabsRoot>
  );
});

Tabs.defaultProps = {
  hasDefaultStyle: true,
};

Tabs.displayName = 'Tabs';

export { Tabs };
