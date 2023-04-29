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
  <Icon.CalendarMonth />,
  <Icon.Cancel />,
  <Icon.Cancel isOutlined />,
  <Icon.CheckCircle />,
  <Icon.CheckCircle isOutlined />,
  <Icon.Close />,
  <Icon.CopyAll />,
  <Icon.Dangerous />,
  <Icon.Dangerous isOutlined />,
  <Icon.Email />,
  <Icon.Email isOutlined />,
  <Icon.Error />,
  <Icon.Error isOutlined />,
  <Icon.ExpandLess />,
  <Icon.ExpandMore />,
  <Icon.FileUpload />,
  <Icon.Info />,
  <Icon.Info isOutlined />,
  <Icon.Launch />,
  <Icon.Link />,
  <Icon.Phone />,
  <Icon.RotatingCircle />,
  <Icon.Remove />,
  <Icon.Search />,
  <Icon.Success />,
  <Icon.Success />,
  <Icon.Time />,
  <Icon.Time isOutlined />,
  <Icon.Visibility />,
  <Icon.VisibilityOff />,
  <Icon.Warning isOutlined />,
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
