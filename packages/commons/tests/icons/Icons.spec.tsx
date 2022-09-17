/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Icon, orchidLight, TidyUiProvider } from '../../src';

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
      <TidyUiProvider theme={orchidLight}>
        {icons.map((icon, index) => (
          <Icon ele={icon} key={index} />
        ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
