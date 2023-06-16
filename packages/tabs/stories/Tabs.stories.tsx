import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tab, TabPanel, TabPanels, Tabs, TabsGroup } from '../src';
import { Icon, color, css, hsla, styled } from '../../commons/src';
import { Grid, GridItem } from '../../grid/src';
import { Card } from '../../card/src';
import { Text } from '../../text/src';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const PanelContent = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch('https://baconipsum.com/api/?type=all-meat&paras=48');
    const data = await response.json();
    setIsLoading(false);
    setData(data);
  };

  React.useEffect(() => {
    fetchData();
    return () => {
      setIsLoading(false);
      setData([]);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Grid>
          <GridItem>
            <Icon height="5rem" width="5rem" ele={<Icon.RotatingCircle />} />
          </GridItem>
        </Grid>
      ) : (
        <Grid gap={16}>
          {data?.map((d: string, i: number) => (
            <GridItem key={d} xs={12} sm={8} md={6} lg={4} xl={4} ele={<Card height="300px" />}>
              <Text.base overflow="auto">{d}</Text.base>
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
};

const tabCount = 4;

export const basic: Story = {
  render: () => {
    return (
      <TabsGroup>
        <Tabs>
          {[...Array(tabCount)].map((c, i) => (
            <Tab key={i}>Tab {i}</Tab>
          ))}
        </Tabs>
        <TabPanels>
          {[...Array(tabCount)].map((c, i) => (
            <TabPanel key={i}>
              <PanelContent />
            </TabPanel>
          ))}
        </TabPanels>
      </TabsGroup>
    );
  },
};

export const lazy: Story = {
  render: () => {
    return (
      <TabsGroup>
        <Tabs>
          {[...Array(tabCount)].map((c, i) => (
            <Tab key={i}>Tab {i}</Tab>
          ))}
        </Tabs>
        <TabPanels isLazy>
          {[...Array(tabCount)].map((c, i) => (
            <TabPanel key={i}>
              <PanelContent />
            </TabPanel>
          ))}
        </TabPanels>
      </TabsGroup>
    );
  },
};

export const whenTabChangeEvents: Story = {
  render: () => {
    return (
      <TabsGroup>
        <Tabs whenTabChange={(e) => alert(JSON.stringify(e))}>
          {[...Array(tabCount)].map((c, i) => (
            <Tab key={i}>Tab {i}</Tab>
          ))}
        </Tabs>
        <TabPanels>
          {[...Array(tabCount)].map((c, i) => (
            <TabPanel key={i}>
              <PanelContent />
            </TabPanel>
          ))}
        </TabPanels>
      </TabsGroup>
    );
  },
};

export const justify: Story = {
  render: () => {
    return (
      <TabsGroup>
        <Tabs canJustify>
          {[...Array(tabCount)].map((c, i) => (
            <Tab key={i}>Tab {i}</Tab>
          ))}
        </Tabs>
        <TabPanels>
          {[...Array(tabCount)].map((c, i) => (
            <TabPanel key={i}>
              <PanelContent />
            </TabPanel>
          ))}
        </TabPanels>
      </TabsGroup>
    );
  },
};

export const fullWidth: Story = {
  render: () => {
    return (
      <TabsGroup>
        <Tabs hasFullWidth>
          {[...Array(tabCount)].map((c, i) => (
            <Tab key={i}>Tab {i}</Tab>
          ))}
        </Tabs>
        <TabPanels>
          {[...Array(tabCount)].map((c, i) => (
            <TabPanel key={i}>
              <PanelContent />
            </TabPanel>
          ))}
        </TabPanels>
      </TabsGroup>
    );
  },
};

const StyledTab = styled.div<{ isActive?: boolean }>`
  ${({ theme: { font, palette }, isActive }) => css`
    padding: 1rem 2rem;
    border-radius: 9999px;
    transition: background 0.2s ease-in-out;
    font-weight: ${font.bold};

    ${isActive
      ? css`
          background: ${hsla(color.cyan[500])};
          color: ${hsla(color.slate[800])};
        `
      : css`
          color: ${palette.text.primary};
        `}
  `}
`;

export const customTabStyle: Story = {
  render: () => {
    return (
      <TabsGroup>
        <Tabs hasDefaultStyle={false}>
          {[...Array(tabCount)].map((c, i) => (
            <Tab key={i} ele={<StyledTab />}>
              Tab {i}
            </Tab>
          ))}
        </Tabs>
        <TabPanels>
          {[...Array(tabCount)].map((c, i) => (
            <TabPanel key={i}>
              <PanelContent />
            </TabPanel>
          ))}
        </TabPanels>
      </TabsGroup>
    );
  },
};
