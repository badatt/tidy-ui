import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FlexBox, FlexItem } from '../../flexbox/src';
import { Card, CardBody, CardFooter, CardHeader } from '../../card/src';
import { Frame } from '../src';
import { useTimeout } from '@tidy-ui/commons';

const meta: Meta<typeof Frame> = {
  title: 'Layout/Frame',
  component: Frame,
};

export default meta;

type Story = StoryObj<typeof Frame>;

export const basic: Story = {
  render: () => {
    return (
      <FlexBox height="240px">
        {[...Array(8)].map((c, i) => (
          <FlexItem key={c} span={6} padding="1rem">
            <Frame height="240px" />
          </FlexItem>
        ))}
      </FlexBox>
    );
  },
};

export const sharp: Story = {
  render: () => {
    return <Frame height="240px" width="350px" isSharp />;
  },
};

export const variants: Story = {
  render: () => {
    return (
      <FlexBox gap="1rem" fld="column">
        <Frame height="240px" width="350px" />
        <Frame variant="circle" size="240px" />
        <Frame variant="line" />
      </FlexBox>
    );
  },
};

export const wrapped: Story = {
  render: () => {
    const [isReady, setIsReady] = React.useState(false);

    useTimeout(() => setIsReady(true), 1000);

    return (
      <FlexBox height="240px">
        {[...Array(8)].map((c, i) => (
          <FlexItem key={c} span={6} padding="1rem">
            <Frame height="200px" isLoaded={isReady} isWrapped>
              <Card>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vitae quae autem, tempora quod
                consequatur voluptatibus a eum laboriosam odit nisi aut quia sunt hic similique perspiciatis unde soluta
                quas.
              </Card>
            </Frame>
          </FlexItem>
        ))}
      </FlexBox>
    );
  },
};

export const composite: Story = {
  render: () => {
    return (
      <FlexBox ctr>
        <Card width="320px">
          <CardHeader ele={<FlexBox gap="1rem" />}>
            <Frame variant="circle" size="44px" />
            <FlexItem fgo={1} ele={<FlexBox fld="column" gap="0.5rem" />}>
              <Frame variant="line" />
              <Frame variant="line" height="1rem" width="80%" />
            </FlexItem>
          </CardHeader>
          <CardBody height="120px" padding="1rem 0">
            <Frame isSharp />
          </CardBody>
          <CardFooter ele={<FlexBox gap="0.5rem" />}>
            <Frame variant="line" height="1rem" />
            <Frame variant="line" height="1rem" width="80%" />
          </CardFooter>
        </Card>
      </FlexBox>
    );
  },
};
