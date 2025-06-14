import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartBar,
  faFolderOpen,
  faHome,
  faUsers,
  faUser,
  faLink,
  faGear,
  faSlidersH,
  faQuestionCircle,
  faEnvelope,
  faInfoCircle,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { toneArgTypes } from '../../types/src';
import { Menu, MenuItem, MenuItemSeparator } from '../src';

const meta: Meta<typeof MenuItem> = {
  title: 'Navigation/Menu',
  component: MenuItem,
  argTypes: {
    isSharp: { control: 'boolean' },
    tone: toneArgTypes,
    variant: { control: 'select', options: ['primary', 'outlined', 'simple'] },
  },
};

export default meta;

type Story = StoryObj<typeof MenuItem>;

export const DefaultMenuItem: Story = {
  args: {
    ...MenuItem.defaultProps,
  },
  render: (args) => {
    console.log(`In Story`, args);
    return (
      <Menu width="400px" isSharp={args.isSharp}>
        <MenuItem {...args} icon={<FontAwesomeIcon icon={faHome} />}>
          Dashboard
        </MenuItem>
        <MenuItem {...args} icon={<FontAwesomeIcon icon={faChartBar} />}>
          Analytics
        </MenuItem>
        <MenuItem {...args} icon={<FontAwesomeIcon icon={faFolderOpen} />}>
          Projects
        </MenuItem>
        <MenuItem {...args} icon={<FontAwesomeIcon icon={faUsers} />}>
          Teams
        </MenuItem>
        <MenuItemSeparator />
        <MenuItem {...args} icon={<FontAwesomeIcon icon={faUser} />}>
          Profile
        </MenuItem>
        <MenuItem {...args} icon={<FontAwesomeIcon icon={faLink} />}>
          My Links
        </MenuItem>
        <MenuItem {...args} icon={<FontAwesomeIcon icon={faGear} />}>
          Settings
        </MenuItem>
        <MenuItem {...args} icon={<FontAwesomeIcon icon={faSlidersH} />}>
          Preferences
        </MenuItem>
        <MenuItemSeparator />
        <MenuItem {...args} icon={<FontAwesomeIcon icon={faQuestionCircle} />}>
          Help Center
        </MenuItem>
        <MenuItem {...args} icon={<FontAwesomeIcon icon={faEnvelope} />}>
          Contact Support
        </MenuItem>
        <MenuItem {...args} icon={<FontAwesomeIcon icon={faInfoCircle} />}>
          About
        </MenuItem>
        <MenuItemSeparator />
        <MenuItem {...args} icon={<FontAwesomeIcon icon={faArrowRightFromBracket} />}>
          Logout
        </MenuItem>
      </Menu>
    );
  },
};
