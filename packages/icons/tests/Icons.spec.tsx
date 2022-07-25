/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import { orchidLight } from '@tidy-ui/theme';
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
  RemoveCircleIcon,
  RotatingCircleIcon,
  WarningIcon,
} from '../src';

const icons = [
  <AddCircleIcon />,
  <AddCircleIcon outlined />,
  <AddIcon />,
  <AddIcon outlined />,
  <CancelIcon />,
  <CancelIcon outlined />,
  <CheckCircleIcon />,
  <CheckCircleIcon outlined />,
  <CloseIcon />,
  <CloseIcon outlined />,
  <DangerousIcon />,
  <DangerousIcon outlined />,
  <DarkModeIcon />,
  <DarkModeIcon outlined />,
  <EmailIcon />,
  <EmailIcon outlined />,
  <ExpandLessIcon />,
  <ExpandLessIcon outlined />,
  <ExpandMoreIcon />,
  <ExpandMoreIcon outlined />,
  <EyeIcon />,
  <EyeIcon outlined />,
  <GearIcon />,
  <GearIcon outlined />,
  <InfoIcon />,
  <InfoIcon outlined />,
  <LaunchIcon />,
  <LaunchIcon outlined />,
  <LightModeIcon />,
  <LightModeIcon outlined />,
  <RemoveCircleIcon />,
  <RemoveCircleIcon outlined />,
  <RotatingCircleIcon />,
  <RotatingCircleIcon outlined />,
  <WarningIcon />,
  <WarningIcon outlined />,
];

describe('Icons', () => {
  test('Render icons', () => {
    const tree = render(<ThemeProvider theme={orchidLight}>{icons.map((icon) => icon)}</ThemeProvider>);
    expect(tree).toMatchSnapshot();
  });
});
