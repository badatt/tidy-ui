/**
 * @jest-environment jsdom
 */
import React from 'react';
import { act, render, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Tab, TabPanel, TabPanels, Tabs, TabsGroup } from '../src';
import { TabsContext } from '../src/TabsContext';

describe('Tabs', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <TabsGroup>
          <Tabs>
            <Tab>Tab 1</Tab>
          </Tabs>
          <TabPanels>
            <TabPanel>Tab Panel1</TabPanel>
          </TabPanels>
        </TabsGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Initial active index', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <TabsGroup activeTabIndex={1}>
          <Tabs>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </Tabs>
          <TabPanels>
            <TabPanel>Tab Panel1</TabPanel>
            <TabPanel>Tab Panel2</TabPanel>
            <TabPanel>Tab Panel3</TabPanel>
          </TabPanels>
        </TabsGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Justified tabs', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <TabsGroup>
          <Tabs canJustify>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </Tabs>
          <TabPanels>
            <TabPanel>Tab Panel1</TabPanel>
            <TabPanel>Tab Panel2</TabPanel>
            <TabPanel>Tab Panel3</TabPanel>
          </TabPanels>
        </TabsGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Full width', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <TabsGroup>
          <Tabs hasFullWidth>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </Tabs>
          <TabPanels>
            <TabPanel>Tab Panel1</TabPanel>
            <TabPanel>Tab Panel2</TabPanel>
            <TabPanel>Tab Panel3</TabPanel>
          </TabPanels>
        </TabsGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Full width dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <TabsGroup>
          <Tabs hasFullWidth>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </Tabs>
          <TabPanels>
            <TabPanel>Tab Panel1</TabPanel>
            <TabPanel>Tab Panel2</TabPanel>
            <TabPanel>Tab Panel3</TabPanel>
          </TabPanels>
        </TabsGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <TabsGroup>
          <Tabs>
            <Tab>Tab 1</Tab>
          </Tabs>
          <TabPanels>
            <TabPanel>Tab Panel1</TabPanel>
          </TabPanels>
        </TabsGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom elements', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <TabsGroup ele={<div />}>
          <Tabs ele={<div />}>
            <Tab ele={<div />}>Tab 1</Tab>
          </Tabs>
          <TabPanels ele={<div />}>
            <TabPanel ele={<div />}>Tab Panel1</TabPanel>
          </TabPanels>
        </TabsGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Switch a tab', () => {
    const onTabChange = jest.fn();
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <TabsGroup>
          <Tabs whenTabChange={onTabChange}>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
          </Tabs>
          <TabPanels>
            <TabPanel>Tab Panel1</TabPanel>
            <TabPanel>Tab Panel2</TabPanel>
          </TabPanels>
        </TabsGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    act(() => {
      const tab = tree.getByText('Tab 1');
      tab.click();
      expect(onTabChange).toBeCalledTimes(1);
    });
  });

  it('Lazy tabs', () => {
    const onTabChange = jest.fn();
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <TabsGroup>
          <Tabs whenTabChange={onTabChange}>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
          </Tabs>
          <TabPanels isLazy>
            <TabPanel>Tab Panel1</TabPanel>
            <TabPanel>Tab Panel2</TabPanel>
          </TabPanels>
        </TabsGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    act(() => {
      const tab1 = tree.getByText('Tab 1');
      tab1.click();
      expect(onTabChange).toBeCalledTimes(1);
      const tab2 = tree.getByText('Tab 2');
      tab2.click();
      expect(onTabChange).toBeCalledTimes(1);
    });
  });

  it('Test context', () => {
    const hook = renderHook(() => React.useContext(TabsContext));
    const { onTabChange } = hook.result.current;
    expect(onTabChange()).toBeNull();
  });
});
