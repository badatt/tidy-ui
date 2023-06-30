import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select, Option } from '../src';
import { FlexBox } from '../../flexbox/src';
import { Text } from '../../text/src';
import { Girth, Status } from '../../commons/src';

const meta: Meta<typeof Select> = {
  title: 'Form/Select',
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const basic: Story = {
  render: () => {
    return (
      <Select defaultValue="none">
        <Option value="none" disabled hidden>
          Select one
        </Option>
        <Option value="option-1">Option 1</Option>
        <Option value="option-2">Option 2</Option>
        <Option value="option-3">Option 3</Option>
      </Select>
    );
  },
};

export const Girths: Story = {
  render: () => {
    return (
      <FlexBox gap="1rem" fld="column" width="250px">
        {Object.values(Girth)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Select key={v} girth={Girth[v]} defaultValue="none">
              <Option value="none" disabled hidden>
                Select one
              </Option>
              <Option value="option-1">Option 1</Option>
              <Option value="option-2">Option 2</Option>
              <Option value="option-3">Option 3</Option>
            </Select>
          ))}
      </FlexBox>
    );
  },
};

export const statuses: Story = {
  render: () => {
    return (
      <FlexBox gap="1rem" fld="column" width="250px">
        {Object.values(Status)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Select key={v} status={Status[v]} defaultValue="none">
              <Option value="none" disabled hidden>
                Select one
              </Option>
              <Option value="option-1">Option 1</Option>
              <Option value="option-2">Option 2</Option>
              <Option value="option-3">Option 3</Option>
            </Select>
          ))}
      </FlexBox>
    );
  },
};
