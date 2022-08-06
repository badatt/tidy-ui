/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Text } from '@tidy-ui/text';
import { orchidDark, orchidLight } from '@tidy-ui/theme';
import { Panel, PanelBody, PanelGroup, PanelHeader } from '../src';

describe('Panel', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <PanelGroup>
          <Panel>
            <PanelHeader>
              <Text as="h6">Lorem ipsum dolor sit, amet consectetur adipisicing elit</Text>
            </PanelHeader>
            <PanelBody>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam amet pariatur ducimus
                exercitationem quos rem vel nulla nostrum soluta? Repellat sit quam vero! Recusandae placeat adipisci
                quo qui odit!
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quasi explicabo id amet sed labore,
                ex cumque repellendus inventore quas commodi at quis aspernatur libero voluptate maiores alias ipsum
                ducimus!
              </Text>
            </PanelBody>
          </Panel>
          <Panel>
            <PanelHeader>
              <Text as="h6">Lorem ipsum dolor sit, amet consectetur adipisicing elit</Text>
            </PanelHeader>
            <PanelBody>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam amet pariatur ducimus
                exercitationem quos rem vel nulla nostrum soluta? Repellat sit quam vero! Recusandae placeat adipisci
                quo qui odit!
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quasi explicabo id amet sed labore,
                ex cumque repellendus inventore quas commodi at quis aspernatur libero voluptate maiores alias ipsum
                ducimus!
              </Text>
            </PanelBody>
          </Panel>
          <Panel>
            <PanelHeader>
              <Text as="h6">Lorem ipsum dolor sit, amet consectetur adipisicing elit</Text>
            </PanelHeader>
            <PanelBody>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam amet pariatur ducimus
                exercitationem quos rem vel nulla nostrum soluta? Repellat sit quam vero! Recusandae placeat adipisci
                quo qui odit!
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quasi explicabo id amet sed labore,
                ex cumque repellendus inventore quas commodi at quis aspernatur libero voluptate maiores alias ipsum
                ducimus!
              </Text>
            </PanelBody>
          </Panel>
        </PanelGroup>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <PanelGroup>
          <Panel>
            <PanelHeader>
              <Text as="h6">Lorem ipsum dolor sit, amet consectetur adipisicing elit</Text>
            </PanelHeader>
            <PanelBody>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam amet pariatur ducimus
                exercitationem quos rem vel nulla nostrum soluta? Repellat sit quam vero! Recusandae placeat adipisci
                quo qui odit!
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quasi explicabo id amet sed labore,
                ex cumque repellendus inventore quas commodi at quis aspernatur libero voluptate maiores alias ipsum
                ducimus!
              </Text>
            </PanelBody>
          </Panel>
          <Panel>
            <PanelHeader>
              <Text as="h6">Lorem ipsum dolor sit, amet consectetur adipisicing elit</Text>
            </PanelHeader>
            <PanelBody>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam amet pariatur ducimus
                exercitationem quos rem vel nulla nostrum soluta? Repellat sit quam vero! Recusandae placeat adipisci
                quo qui odit!
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quasi explicabo id amet sed labore,
                ex cumque repellendus inventore quas commodi at quis aspernatur libero voluptate maiores alias ipsum
                ducimus!
              </Text>
            </PanelBody>
          </Panel>
          <Panel>
            <PanelHeader>
              <Text as="h6">Lorem ipsum dolor sit, amet consectetur adipisicing elit</Text>
            </PanelHeader>
            <PanelBody>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam amet pariatur ducimus
                exercitationem quos rem vel nulla nostrum soluta? Repellat sit quam vero! Recusandae placeat adipisci
                quo qui odit!
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quasi explicabo id amet sed labore,
                ex cumque repellendus inventore quas commodi at quis aspernatur libero voluptate maiores alias ipsum
                ducimus!
              </Text>
            </PanelBody>
          </Panel>
        </PanelGroup>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
