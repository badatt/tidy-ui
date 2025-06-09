import React from 'react';
import { MenuItemIcon, MenuItemRoot } from './components';
import { IMenuItemProps } from './types';

const MenuItem = React.forwardRef<HTMLLIElement, IMenuItemProps>((props, ref) => {
  const { children, ele, icon, ...rest } = props;
  return (
    <MenuItemRoot ref={ref} data-tui-name="MenuItem" role="menuitem" {...rest}>
      {icon && <MenuItemIcon>{icon}</MenuItemIcon>}
      {ele ? React.cloneElement(ele, {}, children) : children}
    </MenuItemRoot>
  );
});

MenuItem.defaultProps = {
  isSharp: false,
};

MenuItem.displayName = 'MenuItem';

export { MenuItem };
