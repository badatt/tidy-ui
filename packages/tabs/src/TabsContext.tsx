import React from 'react';
import { ITabsGroupProps } from './types';

/**
 * PanelContext props
 */
export interface ITabsContext {
  /**
   * Active Tab index
   */
  activeTabIndex?: number;
  /**
   * On Tab change
   */
  onTabChange: (tabIndex?: number) => void;
}

const TabsContext = React.createContext<ITabsContext>({
  activeTabIndex: 0,
  /**
   * Default onTabChange
   *
   * @returns {void}
   */
  onTabChange: (): null => null,
});

/**
 * TabsGroupProvider to share state across all Tabs related components
 *
 * @param {ITabsGroupProps} props TabsGroup props
 * @returns {JSX.Element} react node
 */
const TabsContextProvider = (props: ITabsGroupProps): JSX.Element => {
  const { children } = props;

  const ctx = React.useContext<ITabsContext>(TabsContext);
  const [activeTabIndex, setActiveTabIndex] = React.useState(props.activeTabIndex ?? ctx.activeTabIndex);

  const onTabChange = React.useCallback((index?: number) => setActiveTabIndex(index), [activeTabIndex]);

  const tabContextValue = React.useMemo(() => ({ activeTabIndex, onTabChange }), [activeTabIndex, onTabChange]);

  return <TabsContext.Provider value={tabContextValue}>{children}</TabsContext.Provider>;
};

export { TabsContext, TabsContextProvider };
