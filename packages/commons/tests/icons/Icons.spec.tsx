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
  ExpandLessIcon,
  ExpandMoreIcon,
  Icon,
  InfoIcon,
  LaunchIcon,
  LinkIcon,
  RotatingCircleIcon,
  RemoveIcon,
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
  <ExpandLessIcon />,
  <ExpandMoreIcon />,
  <InfoIcon />,
  <InfoIcon isOutlined />,
  <LaunchIcon />,
  <LinkIcon />,
  <RotatingCircleIcon />,
  <RemoveIcon />,
  <WarningIcon />,
  <WarningIcon isOutlined />,
];

describe('Icons', () => {
  it('Render icons', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {icons.map((icon, index) => (
          <Icon ele={icon} key={index} />
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
