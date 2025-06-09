import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faArrowRightFromBracket, faHome, faLink } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '../../avatar';
import { Menu, MenuItem, MenuItemSeparator } from '../src';

const meta: Meta<typeof Menu> = {
  title: 'Navigation/Menu',
  component: Menu,
  argTypes: {
    isSharp: { control: 'boolean' },
    trigger: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const menu: Story = {
  args: {
    ...Menu.defaultProps,
    width: '400px',
  },
  render: (args) => {
    return (
      <Menu {...args} trigger={<Avatar name="Balu Datty" />}>
        <MenuItem icon={<FontAwesomeIcon icon={faHome} />}>Home</MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faGear} />}>Settings</MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faLink} />}>My Links</MenuItem>
        <MenuItemSeparator />
        <MenuItem icon={<FontAwesomeIcon icon={faArrowRightFromBracket} />}>Logout</MenuItem>
      </Menu>
    );
  },
};
