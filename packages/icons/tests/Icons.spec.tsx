/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidLight } from '@tidy-ui/commons';
import {
  AddCircleIcon,
  AddIcon,
  CancelIcon,
  CheckCircleIcon,
  CloseIcon,
  DangerousIcon,
  DarkModeIcon,
  EmailIcon,
  ExpandLessIcon,
  ExpandMoreIcon,
  EyeIcon,
  GearIcon,
  InfoIcon,
  LaunchIcon,
  LightModeIcon,
  LinkIcon,
  RemoveCircleIcon,
  RemoveIcon,
  RotatingCircleIcon,
  WarningIcon,
} from '../src';

const icons = [
  <AddCircleIcon />,
  <AddCircleIcon isOutlined />,
  <AddIcon />,
  <CancelIcon />,
  <CancelIcon isOutlined />,
  <CheckCircleIcon />,
  <CheckCircleIcon isOutlined />,
  <CloseIcon />,
  <DangerousIcon />,
  <DangerousIcon isOutlined />,
  <DarkModeIcon />,
  <DarkModeIcon isOutlined />,
  <EmailIcon />,
  <EmailIcon isOutlined />,
  <ExpandLessIcon />,
  <ExpandMoreIcon />,
  <EyeIcon />,
  <EyeIcon isOutlined />,
  <GearIcon />,
  <GearIcon isOutlined />,
  <InfoIcon />,
  <InfoIcon isOutlined />,
  <LaunchIcon />,
  <LightModeIcon />,
  <LightModeIcon isOutlined />,
  <LinkIcon />,
  <RemoveCircleIcon />,
  <RemoveCircleIcon isOutlined />,
  <RemoveIcon />,
  <RotatingCircleIcon />,
  <WarningIcon />,
  <WarningIcon isOutlined />,
];

describe('Icons', () => {
  it('Render icons', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {icons.map((icon, index) => (
          <div key={index}>{icon}</div>
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
