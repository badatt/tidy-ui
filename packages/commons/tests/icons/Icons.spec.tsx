/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidLight } from '@tidy-ui/theme';
import {
  AddCircleIcon,
  AddIcon,
  CancelIcon,
  CheckCircleIcon,
  CloseIcon,
  DangerousIcon,
  InfoIcon,
  LaunchIcon,
  RotatingCircleIcon,
  WarningIcon,
} from '../../src';

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
  <InfoIcon />,
  <InfoIcon outlined />,
  <LaunchIcon />,
  <LaunchIcon outlined />,
  <RotatingCircleIcon />,
  <RotatingCircleIcon outlined />,
  <WarningIcon />,
  <WarningIcon outlined />,
];

describe('Icons', () => {
  test('Render icons', () => {
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
