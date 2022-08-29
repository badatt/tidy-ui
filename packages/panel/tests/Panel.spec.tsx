/**
 * @jest-environment jsdom
 */
import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, getByRole, queryByRole, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Text } from '@tidy-ui/text';
import { orchidDark, orchidLight } from '@tidy-ui/commons';
import { Panel } from '../src';

describe('Panel', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Panel>
          <Panel.Header>
            <Text is="h6">Lorem ipsum dolor sit, amet consectetur adipisicing elit</Text>
          </Panel.Header>
          <Panel.Body>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam amet pariatur ducimus
              exercitationem quos rem vel nulla nostrum soluta? Repellat sit quam vero! Recusandae placeat adipisci quo
              qui odit!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quasi explicabo id amet sed labore,
              ex cumque repellendus inventore quas commodi at quis aspernatur libero voluptate maiores alias ipsum
              ducimus!
            </Text>
          </Panel.Body>
        </Panel>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Panel expanded>
          <Panel.Header>
            <Text is="h6">Lorem ipsum dolor sit, amet consectetur adipisicing elit</Text>
          </Panel.Header>
          <Panel.Body>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam amet pariatur ducimus
              exercitationem quos rem vel nulla nostrum soluta? Repellat sit quam vero! Recusandae placeat adipisci quo
              qui odit!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quasi explicabo id amet sed labore,
              ex cumque repellendus inventore quas commodi at quis aspernatur libero voluptate maiores alias ipsum
              ducimus!
            </Text>
          </Panel.Body>
        </Panel>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Toggle expand panel', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Panel>
          <Panel.Header>
            <Text is="h6">Lorem ipsum dolor sit, amet consectetur adipisicing elit</Text>
          </Panel.Header>
          <Panel.Body>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam amet pariatur ducimus
              exercitationem quos rem vel nulla nostrum soluta? Repellat sit quam vero! Recusandae placeat adipisci quo
              qui odit!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quasi explicabo id amet sed labore,
              ex cumque repellendus inventore quas commodi at quis aspernatur libero voluptate maiores alias ipsum
              ducimus!
            </Text>
          </Panel.Body>
        </Panel>
      </ThemeProvider>,
    );
    const { container } = tree;
    const panelIcon = getByRole(container, 'button');
    expect(queryByRole(container, 'presentation')).toBeNull();
    expect(panelIcon).toBeVisible();
    act(() => {
      fireEvent.click(panelIcon);
    });
    expect(queryByRole(container, 'presentation')).toBeVisible();
  });
});
