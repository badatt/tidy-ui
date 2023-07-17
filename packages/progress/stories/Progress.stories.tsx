import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FlexBox } from '../../flexbox/src';
import { Progress } from '../src';
import { Girth, Tone } from '../../commons/src';

const meta: Meta<typeof Progress> = {
  title: 'Feedback/Progress',
  component: Progress,
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const basic: Story = {
  render: () => {
    return <Progress value={80} />;
  },
};

export const variants: Story = {
  render: () => {
    return (
      <FlexBox gap="1rem" fld="column" ali="flex-start">
        <Progress variant="indeterminate" value={25} />
        <Progress variant="solid" value={75} />
        <Progress variant="striped" value={50} />
      </FlexBox>
    );
  },
};

export const girths: Story = {
  render: () => {
    return (
      <FlexBox gap="5rem" fld="column" ali="flex-start" width="100%">
        {Object.keys(Girth)
          .filter((i) => !isNaN(Number(i)))
          .map((v) => (
            <FlexBox gap="1rem" fld="column" ali="flex-start" key={v} width="100%">
              <Progress variant="indeterminate" value={25} girth={Girth[v]} />
              <Progress variant="solid" value={75} girth={Girth[v]} />
              <Progress variant="striped" value={50} girth={Girth[v]} />
            </FlexBox>
          ))}
      </FlexBox>
    );
  },
};

export const tones: Story = {
  render: () => {
    return (
      <FlexBox gap="5rem" fld="column" ali="flex-start" width="100%">
        {Object.keys(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v) => (
            <FlexBox gap="1rem" fld="column" ali="flex-start" key={v} width="100%">
              <Progress tone={Tone[v]} variant="indeterminate" value={25} />
              <Progress tone={Tone[v]} variant="solid" value={75} />
              <Progress tone={Tone[v]} variant="striped" value={50} />
            </FlexBox>
          ))}
      </FlexBox>
    );
  },
};
