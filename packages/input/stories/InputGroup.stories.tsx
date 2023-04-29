import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../../commons/src';
import { FlexBox } from '../../flexbox/src';
import { Input, InputGroup } from '../src';
import { Variant } from '../src/types';
import { Size } from '../../commons/src';

const meta: Meta<typeof InputGroup> = {
  title: 'Form/InputGroup',
  component: InputGroup,
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const frill: Story = {
  render: () => {
    return (
      <FlexBox gap="1rem" fld="column" w="350px">
        <InputGroup>
          <Input.Element node="https://" />
          <Input placeholder="google" />
          <Input.Element node=".com" />
        </InputGroup>
        <InputGroup>
          <Input.Element node="https://" />
          <Input placeholder="google" />
        </InputGroup>
        <InputGroup>
          <Input placeholder="google" />
          <Input.Element node=".com" />
        </InputGroup>
        <InputGroup>
          <Input placeholder="google" />
        </InputGroup>
      </FlexBox>
    );
  },
};

export const blend: Story = {
  render: () => {
    return (
      <FlexBox gap="1rem" fld="column" w="450px">
        <InputGroup blend>
          <Input.Element node="$" />
          <Input placeholder="500" />
          <Input.Element node={<Icon ele={<Icon.CheckCircle />} />} />
        </InputGroup>
        <InputGroup blend>
          <Input.Element node="$" />
          <Input placeholder="500" />
        </InputGroup>
        <InputGroup blend>
          <Input placeholder="500" />
          <Input.Element node={<Icon ele={<Icon.CheckCircle />} />} />
        </InputGroup>
        <InputGroup blend>
          <Input placeholder="500" />
        </InputGroup>
      </FlexBox>
    );
  },
};
