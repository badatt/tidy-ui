import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../../commons/src';
import { FlexBox } from '../../flexbox/src';
import { Input, InputGroup, InputElement } from '../src';

const meta: Meta<typeof InputGroup> = {
  title: 'Form/InputGroup',
  component: InputGroup,
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const frill: Story = {
  render: () => {
    return (
      <FlexBox gap="1rem" fld="column" width="350px">
        <InputGroup>
          <InputElement>https://</InputElement>
          <Input placeholder="google" />
          <InputElement>.com</InputElement>
        </InputGroup>
        <InputGroup>
          <InputElement>https://</InputElement>
          <Input placeholder="google.com" />
        </InputGroup>
        <InputGroup>
          <Input placeholder="google" />
          <InputElement>.com</InputElement>
        </InputGroup>
      </FlexBox>
    );
  },
};

export const blend: Story = {
  render: () => {
    return (
      <FlexBox gap="1rem" fld="column" width="450px">
        <InputGroup isBlend>
          <InputElement>$</InputElement>
          <Input placeholder="500" />
          <InputElement>
            <Icon ele={<Icon.CheckCircle />} />
          </InputElement>
        </InputGroup>
        <InputGroup isBlend>
          <InputElement>$</InputElement>
          <Input placeholder="500" />
        </InputGroup>
        <InputGroup isBlend>
          <Input placeholder="500" />
          <InputElement>
            <Icon ele={<Icon.CheckCircle />} />
          </InputElement>
        </InputGroup>
      </FlexBox>
    );
  },
};
