import React from 'react';
import { MenuPopup, MenuTrigger, MenuWrapper } from './components';
import { IMenuProps } from './types';

const Menu = React.forwardRef<HTMLMenuElement, IMenuProps>((props, ref) => {
  const { children, ele, trigger, ...rest } = props;
  const menuRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLDivElement>(null);

  const [open, setOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [position, setPosition] = React.useState<'bottom' | 'top'>('bottom');
  const [align, setAlign] = React.useState<'left' | 'right'>('left');

  /** @internal */
  const toggleMenu = () => setOpen((prev) => !prev);

  /** @internal */
  const updatePosition = () => {
    if (!triggerRef.current || !menuRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const menuRect = menuRef.current.getBoundingClientRect();

    // Vertical position
    const shouldShowAbove = triggerRect.bottom + menuRect.height > window.innerHeight;
    setPosition(shouldShowAbove ? 'top' : 'bottom');

    // Horizontal alignment
    const shouldAlignRight = triggerRect.left + menuRect.width > window.innerWidth;
    setAlign(shouldAlignRight ? 'right' : 'left');
  };

  React.useEffect(() => {
    if (open) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 150);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  React.useEffect(() => {
    /** @internal */
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  React.useEffect(() => {
    if (open) {
      updatePosition();
      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition);
    }
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, [open]);

  /** @internal */
  const handleClick = (e) => {
    trigger.props.onClick?.(e);
    toggleMenu();
  };

  /** @internal */
  const renderChildren = (children): React.ReactNode => {
    return React.Children.map(children, (c) => {
      const child = c as React.ReactElement;
      return React.cloneElement(child, { isSharp: rest.isSharp });
    });
  };

  return (
    <MenuWrapper data-tui-name="MenuTrigger" ref={menuRef}>
      <MenuTrigger ref={triggerRef} onClick={handleClick}>
        {trigger}
      </MenuTrigger>
      {isVisible && (
        <MenuPopup role="menu" data-tui-name="Menu" isVisible={open} ref={ref} pos={position} ali={align} {...rest}>
          {ele ? React.cloneElement(ele, {}, renderChildren(children)) : renderChildren(children)}
        </MenuPopup>
      )}
    </MenuWrapper>
  );
});

Menu.defaultProps = {
  isSharp: false,
};

Menu.displayName = 'Menu';

export { Menu };
