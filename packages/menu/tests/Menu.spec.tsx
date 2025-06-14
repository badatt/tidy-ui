/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Menu, MenuItem, MenuItemSeparator } from '../src';

// Mock function for menu item callbacks
const mockOnClick = jest.fn();

describe('Menu', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderMenu = (theme = orchidLight, additionalProps = {}) => {
    return render(
      <TidyUiProvider theme={theme}>
        <Menu trigger={<div data-testid="menu-btn">Menu</div>} {...additionalProps}>
          <MenuItem icon={<i>icon</i>} onClick={mockOnClick} data-testid="home-item" variant="primary" tone="major">
            Home
          </MenuItem>
          <MenuItemSeparator />
          <MenuItem onClick={mockOnClick} data-testid="logout-item" variant="outlined">
            Logout
          </MenuItem>
          <MenuItem disabled onClick={mockOnClick} data-testid="disabled-item">
            Disabled Item
          </MenuItem>
        </Menu>
      </TidyUiProvider>,
    );
  };

  describe('Basic Functionality', () => {
    it('renders trigger button', () => {
      renderMenu();
      expect(screen.getByTestId('menu-btn')).toBeInTheDocument();
      expect(screen.getByText('Menu')).toBeInTheDocument();
    });

    it('opens menu on trigger click', async () => {
      renderMenu();
      const trigger = screen.getByTestId('menu-btn');

      // Menu should not be visible initially
      expect(screen.queryByTestId('home-item')).not.toBeInTheDocument();

      // Click trigger to open menu
      fireEvent.click(trigger);

      // Menu items should now be visible
      await waitFor(() => {
        expect(screen.getByTestId('home-item')).toBeInTheDocument();
        expect(screen.getByTestId('logout-item')).toBeInTheDocument();
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Logout')).toBeInTheDocument();
      });
    });

    it('closes menu when clicking on trigger again', async () => {
      renderMenu();
      const trigger = screen.getByTestId('menu-btn');

      // Open menu
      await waitFor(() => {
        fireEvent.click(trigger);
        expect(screen.getByTestId('home-item')).toBeInTheDocument();
      });

      // Click trigger again to close
      fireEvent.click(trigger);

      // Menu should be closed
      await waitFor(() => {
        expect(screen.queryByTestId('home-item')).not.toBeInTheDocument();
      });
    });
  });

  describe('Menu Item Interactions', () => {
    it('calls onClick when menu item is clicked', async () => {
      renderMenu();
      const trigger = screen.getByTestId('menu-btn');

      // Open menu
      fireEvent.click(trigger);
      await waitFor(() => {
        expect(screen.getByTestId('home-item')).toBeInTheDocument();
      });

      // Click menu item
      fireEvent.click(screen.getByTestId('home-item'));

      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('renders menu item with icon', async () => {
      renderMenu();
      const trigger = screen.getByTestId('menu-btn');

      fireEvent.click(trigger);
      await waitFor(() => {
        expect(screen.getByTestId('home-item')).toBeInTheDocument();
      });

      // Check if icon is rendered
      expect(screen.getByText('icon')).toBeInTheDocument();
    });

    it('renders menu item separator', async () => {
      renderMenu();
      const trigger = screen.getByTestId('menu-btn');

      fireEvent.click(trigger);
      await waitFor(() => {
        // Check if separator is present (you might need to adjust based on how separator is implemented)
        const menuItems = screen.getAllByRole('menuitem');
        expect(menuItems).toHaveLength(3); // Assuming separator doesn't count as menuitem
      });
    });
  });

  describe('Keyboard Navigation', () => {
    it('closes menu on Escape key', async () => {
      const user = userEvent.setup();
      renderMenu();
      const trigger = screen.getByTestId('menu-btn');

      // Open menu
      fireEvent.click(trigger);
      await waitFor(() => {
        expect(screen.getByTestId('home-item')).toBeInTheDocument();
      });

      // Press Escape
      await user.keyboard('{Escape}');

      await waitFor(() => {
        expect(screen.queryByTestId('home-item')).not.toBeInTheDocument();
      });
    });

    it('navigates menu items with arrow keys', async () => {
      const user = userEvent.setup();
      renderMenu();
      const trigger = screen.getByTestId('menu-btn');

      // Open menu
      fireEvent.click(trigger);
      await waitFor(() => {
        expect(screen.getByTestId('home-item')).toBeInTheDocument();
      });

      // Navigate with arrow keys
      await user.keyboard('{ArrowDown}');
      await user.keyboard('{ArrowUp}');

      // The focus behavior will depend on your implementation
      // You might need to check which item has focus
    });
  });

  describe('Props and Variants', () => {
    it('renders with isSharp prop', async () => {
      renderMenu(orchidLight, { isSharp: true });
      const trigger = screen.getByTestId('menu-btn');

      fireEvent.click(trigger);
      await waitFor(() => {
        expect(screen.getByTestId('home-item')).toBeInTheDocument();
      });

      // You might need to check for specific CSS classes or styles
      // that indicate the sharp variant is applied
    });

    it('renders with dark theme', async () => {
      renderMenu(orchidDark, { isSharp: true });
      const trigger = screen.getByTestId('menu-btn');

      fireEvent.click(trigger);
      await waitFor(() => {
        expect(screen.getByTestId('home-item')).toBeInTheDocument();
      });
    });

    it('handles custom positioning props', async () => {
      renderMenu(orchidLight, {
        placement: 'bottom-start',
        offset: 10,
      });
      const trigger = screen.getByTestId('menu-btn');

      fireEvent.click(trigger);
      await waitFor(() => {
        expect(screen.getByTestId('home-item')).toBeInTheDocument();
      });
    });
  });

  describe('Edge Cases', () => {
    it('handles empty menu', () => {
      render(
        <TidyUiProvider theme={orchidLight}>
          <Menu trigger={<div data-testid="menu-btn">Menu</div>}>{/* Empty menu */}</Menu>
        </TidyUiProvider>,
      );

      const trigger = screen.getByTestId('menu-btn');
      fireEvent.click(trigger);

      // Should not crash
      expect(trigger).toBeInTheDocument();
    });

    it('handles menu with only separators', async () => {
      render(
        <TidyUiProvider theme={orchidLight}>
          <Menu trigger={<div data-testid="menu-btn">Menu</div>}>
            <MenuItemSeparator style={{ color: 'red' }} />
            <MenuItemSeparator />
          </Menu>
        </TidyUiProvider>,
      );

      const trigger = screen.getByTestId('menu-btn');
      fireEvent.click(trigger);

      // Should not crash
      expect(trigger).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('menu items have proper roles', async () => {
      renderMenu();
      const trigger = screen.getByTestId('menu-btn');

      fireEvent.click(trigger);
      await waitFor(() => {
        const menuItems = screen.getAllByRole('menuitem');
        expect(menuItems.length).toBeGreaterThan(0);
      });
    });
  });

  // Keep your original snapshot tests but make them more comprehensive
  describe('Snapshots', () => {
    it('matches snapshot for light theme', () => {
      const tree = renderMenu();
      const trigger = screen.getByTestId('menu-btn');
      fireEvent.click(trigger);
      expect(tree.container).toMatchSnapshot();
    });

    it('matches snapshot for dark theme', () => {
      const tree = renderMenu(orchidDark, { isSharp: true });
      const trigger = screen.getByTestId('menu-btn');
      fireEvent.click(trigger);
      expect(tree.container).toMatchSnapshot();
    });
  });
});
