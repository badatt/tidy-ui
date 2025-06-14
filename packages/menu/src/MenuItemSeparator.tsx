import React from 'react';
import { MenuItemSeparatorRoot } from './components';
import { IMenuItemProps } from './types';

const MenuItemSeparator = React.forwardRef<HTMLHRElement, IMenuItemProps>((props, ref) => {
  const { ...rest } = props;
  return <MenuItemSeparatorRoot ref={ref} data-tui-name="MenuItemSeparator" {...rest} />;
});

MenuItemSeparator.defaultProps = {};

MenuItemSeparator.displayName = 'MenuItemSeparator';

export { MenuItemSeparator };
