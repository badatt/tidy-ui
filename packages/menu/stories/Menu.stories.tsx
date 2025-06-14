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
import { Avatar } from '../../avatar/src';
import { Panel, PanelHeader, PanelBody } from '../../panel/src';
import { Menu, MenuItem, MenuItemSeparator } from '../src';

const meta: Meta<typeof Menu> = {
  title: 'Navigation/Menu',
  component: Menu,
  argTypes: {
    disabledTrigger: { control: 'boolean' },
    isSharp: { control: 'boolean' },
    isOpen: { control: 'boolean' },
    trigger: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const DefaultMenu: Story = {
  args: {
    ...Menu.defaultProps,
    width: '400px',
  },
  render: (args) => {
    return (
      <Menu {...args} trigger={<Avatar name="Balu Datty" />}>
        <MenuItem icon={<FontAwesomeIcon icon={faHome} />} tone="major">
          Dashboard
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faChartBar} />}>Analytics</MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faFolderOpen} />}>Projects</MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faUsers} />}>Teams</MenuItem>
        <MenuItemSeparator />
        <MenuItem icon={<FontAwesomeIcon icon={faUser} />} tone="minor">
          Profile
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faLink} />}>My Links</MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faGear} />}>Settings</MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faSlidersH} />}>Preferences</MenuItem>
        <MenuItemSeparator />
        <MenuItem icon={<FontAwesomeIcon icon={faQuestionCircle} />} tone="info">
          Help Center
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faEnvelope} />} tone="info">
          Contact Support
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faInfoCircle} />} tone="info">
          About
        </MenuItem>
        <MenuItemSeparator />
        <MenuItem icon={<FontAwesomeIcon icon={faArrowRightFromBracket} />} tone="danger">
          Logout
        </MenuItem>
      </Menu>
    );
  },
};

export const WithPanel: Story = {
  args: {
    ...Menu.defaultProps,
    width: '400px',
  },
  render: (args) => {
    return (
      <Menu {...args} trigger={<Avatar name="Balu Datty" />}>
        <MenuItem icon={<FontAwesomeIcon icon={faHome} />} tone="major">
          Dashboard
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faChartBar} />}>Analytics</MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faFolderOpen} />}>Projects</MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faUsers} />}>Teams</MenuItem>
        <MenuItemSeparator />
        <Panel>
          <PanelHeader isToggleVisible>Profile</PanelHeader>
          <PanelBody>
            <MenuItem icon={<FontAwesomeIcon icon={faUser} />} tone="minor">
              Account
            </MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faLink} />}>My Links</MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faGear} />}>Settings</MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faSlidersH} />}>Preferences</MenuItem>
          </PanelBody>
        </Panel>

        <MenuItemSeparator />
        <MenuItem icon={<FontAwesomeIcon icon={faQuestionCircle} />} tone="info">
          Help Center
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faEnvelope} />} tone="info">
          Contact Support
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faInfoCircle} />} tone="info">
          About
        </MenuItem>
        <MenuItemSeparator />
        <MenuItem icon={<FontAwesomeIcon icon={faArrowRightFromBracket} />} tone="danger">
          Logout
        </MenuItem>
      </Menu>
    );
  },
};
