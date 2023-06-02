import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../src';
import { FlexBox } from '../../flexbox';
import { Girth } from '../../commons/src';

const meta: Meta<typeof Avatar> = {
  title: 'Presentation/Avatar',
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const basic: Story = {
  render: () => {
    return <Avatar />;
  },
};

export const girths = () => {
  return (
    <FlexBox gap="1rem" fld="column" ali="flex-start">
      {Object.keys(Girth)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Avatar girth={Girth[v]} key={i} />
        ))}
    </FlexBox>
  );
};

export const withImage = () => {
  return (
    <FlexBox gap="1rem" fld="column" ali="flex-start">
      {Object.keys(Girth)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Avatar src="https://bit.ly/kent-c-dodds" girth={Girth[v]} key={i} />
        ))}
    </FlexBox>
  );
};

export const withName = () => {
  return (
    <FlexBox gap="1rem" fld="column" ali="flex-start">
      {Object.keys(Girth)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Avatar name="Balu Praveen" girth={Girth[v]} key={i} />
        ))}
    </FlexBox>
  );
};
