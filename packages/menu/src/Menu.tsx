import React from 'react';
import { useKeyPress } from '@tidy-ui/commons';
import { MenuPopup, MenuWrapper } from './components';
import { IMenuProps } from './types';

const Menu = React.forwardRef<HTMLMenuElement, IMenuProps>((props, ref) => {
  const { children, ele, trigger, disabledTrigger, isOpen, ...rest } = props;
  const menuRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLDivElement>(null);

  const [open, setOpen] = React.useState(isOpen);
  const [isVisible, setIsVisible] = React.useState(false);
  const [position, setPosition] = React.useState<'bottom' | 'top'>('bottom');
  const [align, setAlign] = React.useState<'left' | 'right'>('left');
  const escapeKeyPress = useKeyPress('Escape');

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
    setOpen(isOpen);
  }, [isOpen]);

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
    escapeKeyPress && setOpen(false);
  }, [escapeKeyPress]);

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
    trigger?.props.onClick?.(e);
    toggleMenu();
  };

  /** @internal */
  const renderChildren = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (c: React.ReactNode) => {
      const childrenArray = React.Children.toArray(c);
      return React.Children.map(childrenArray, (c) => {
        const ele = c as React.ReactElement;
        return React.cloneElement(ele, {
          ...ele.props,
          disabled: rest.disabled ?? ele.props.disabled,
          isSharp: rest.isSharp ?? ele.props.isSharp,
        });
      });
    },
    [children],
  );

  /** @internal */
  const renderMenuTrigger = () => {
    return React.cloneElement(trigger ?? <div>Menu</div>, {
      'data-tui-name': 'MenuTrigger',
      disabled: disabledTrigger,
      onClick: handleClick,
      ref: triggerRef,
      style: {
        cursor: 'pointer',
      },
    });
  };

  return (
    <MenuWrapper ref={menuRef} data-tui-name="MenuWrapper">
      {renderMenuTrigger()}
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
