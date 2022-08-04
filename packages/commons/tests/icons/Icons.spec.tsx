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
  LinkIcon,
  RotatingCircleIcon,
  WarningIcon,
} from '../../src';

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
  <InfoIcon />,
  <InfoIcon isOutlined />,
  <LaunchIcon />,
  <LinkIcon />,
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
