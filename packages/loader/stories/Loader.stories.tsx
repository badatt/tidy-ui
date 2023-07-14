import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Girth } from '../../commons/src';
import { FlexBox } from '../../flexbox/src';
import { Loader } from '../src';

const meta: Meta<typeof Loader> = {
  title: 'Layout/Loader',
  component: Loader,
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const basic: Story = {
  render: () => {
    return <Loader />;
  },
};

export const variants: Story = {
  render: () => {
    return (
      <FlexBox gap="1rem" fld="column">
        <Loader />
        <Loader variant="ellipses" />
        <Loader variant="pulse" />
      </FlexBox>
    );
  },
};

export const girths = () => {
  return (
    <FlexBox gap="1rem">
      <FlexBox gap="1rem" fld="column" ali="flex-start">
        {Object.keys(Girth)
          .filter((i) => !isNaN(Number(i)))
          .map((v) => (
            <Loader key={v} girth={Girth[v]} />
          ))}
      </FlexBox>
      <FlexBox gap="1rem" fld="column" ali="flex-start">
        {Object.keys(Girth)
          .filter((i) => !isNaN(Number(i)))
          .map((v) => (
            <Loader key={v} girth={Girth[v]} variant="ellipses" />
          ))}
      </FlexBox>
      <FlexBox gap="1rem" fld="column" ali="flex-start">
        {Object.keys(Girth)
          .filter((i) => !isNaN(Number(i)))
          .map((v) => (
            <Loader key={v} girth={Girth[v]} variant="pulse" />
          ))}
      </FlexBox>
    </FlexBox>
  );
};
