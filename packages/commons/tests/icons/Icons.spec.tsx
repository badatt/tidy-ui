/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidLight } from '@tidy-ui/commons';
import { Icon } from '../../src';

const icons = [
  <Icon.AddCircle />,
  <Icon.AddCircle isOutlined />,
  <Icon.Add />,
  <Icon.Cancel />,
  <Icon.Cancel isOutlined />,
  <Icon.CheckCircle />,
  <Icon.CheckCircle isOutlined />,
  <Icon.Close />,
  <Icon.Dangerous />,
  <Icon.Dangerous isOutlined />,
  <Icon.ExpandLess />,
  <Icon.ExpandMore />,
  <Icon.Info />,
  <Icon.Info isOutlined />,
  <Icon.Launch />,
  <Icon.Link />,
  <Icon.RotatingCircle />,
  <Icon.Remove />,
  <Icon.Warning />,
  <Icon.Warning isOutlined />,
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
