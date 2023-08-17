import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '../src';
import { FlexBox } from '../../flexbox/src';
import { Text } from '../../text/src';
import { Status } from '../../types/src';

const meta: Meta<typeof Radio> = {
  title: 'Form/Radio',
  component: Radio,
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const basic: Story = {
  render: () => {
    const [selected, setSelected] = React.useState('');

    const handleChange = (e) => {
      setSelected(e.target.value);
    };
    return (
      <FlexBox gap="1rem" fld="column">
        <Radio onChange={handleChange} value="opt3">
          <Radio.Option value="opt1">Option 1</Radio.Option>
          <Radio.Option value="opt2">Option 2</Radio.Option>
          <Radio.Option value="opt3">Option 3</Radio.Option>
        </Radio>
        <Text.body1>You have selected value {selected}</Text.body1>
      </FlexBox>
    );
  },
};

export const statuses: Story = {
  render: () => {
    const [selected, setSelected] = React.useState('');

    const handleChange = (e) => {
      setSelected(e.target.value);
    };

    return (
      <FlexBox gap="1rem" fld="column">
        <Radio onChange={handleChange}>
          {Object.values(Status)
            .filter((i) => !isNaN(Number(i)))
            .map((v, i) => (
              <Radio.Option key={i} status={Status[v]} value={Status[v]} onChange={handleChange}>
                Option {Status[v]}
              </Radio.Option>
            ))}
        </Radio>
        <Text.body1>You have selected value {selected}</Text.body1>
      </FlexBox>
    );
  },
};

export const sizes: Story = {
  render: () => {
    const [selected, setSelected] = React.useState('');

    const handleChange = (e) => {
      setSelected(e.target.value);
    };
    return (
      <FlexBox gap="1rem" fld="column">
        <Radio isVertical onChange={handleChange}>
          <Radio.Option value="md">
            <Text.body1>Option default md</Text.body1>
          </Radio.Option>
          <Radio.Option girth="lg" value="lg">
            <Text.h6>Option lg</Text.h6>
          </Radio.Option>
          <Radio.Option girth="xl" value="xl">
            <Text.h4>Option xl</Text.h4>
          </Radio.Option>
          <Radio.Option girth="xxl" value="xxl">
            <Text.h3>Option xxl</Text.h3>
          </Radio.Option>
        </Radio>
        <Text.body1>You have selected value {selected}</Text.body1>
      </FlexBox>
    );
  },
};

export const disabled: Story = {
  render: () => {
    const [selected, setSelected] = React.useState('');

    const handleChange = (e) => {
      setSelected(e.target.value);
    };
    return (
      <FlexBox gap="1rem" fld="column">
        <Radio onChange={handleChange} value="1opt1">
          <Radio.Option disabled value="1opt1">
            Option 1
          </Radio.Option>
          <Radio.Option value="1opt2">Option 2</Radio.Option>
        </Radio>
        <Radio onChange={handleChange}>
          <Radio.Option disabled value="2opt1">
            Option 1
          </Radio.Option>
          <Radio.Option value="2opt2">Option 2</Radio.Option>
        </Radio>
        <Text.body1>You have selected value {selected}</Text.body1>
      </FlexBox>
    );
  },
};
