import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FlexBox } from '../../flexbox/src';
import { Status } from '../../commons/src';
import { Checkbox } from '../src';

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const basic: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (e) => {
      setChecked(!checked);
    };

    return (
      <FlexBox gap="1rem" fld="column">
        <Checkbox checked={checked} onChange={handleChange}>
          Option 1
        </Checkbox>
      </FlexBox>
    );
  },
};

export const variants: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (e) => {
      setChecked(!checked);
    };

    return (
      <FlexBox gap="1rem" fld="column">
        <Checkbox checked={checked} onChange={handleChange}>
          Option 1
        </Checkbox>
        <Checkbox isFilled checked={checked} onChange={handleChange}>
          Filled Option 1
        </Checkbox>
      </FlexBox>
    );
  },
};

export const disabled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (e) => {
      setChecked(!checked);
    };

    return (
      <FlexBox gap="1rem" fld="column">
        <Checkbox checked={checked} onChange={handleChange}>
          Option 1
        </Checkbox>
        <Checkbox disabled checked={checked} onChange={handleChange}>
          Disabled Option 1
        </Checkbox>
      </FlexBox>
    );
  },
};

export const statuses: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (e) => {
      setChecked(!checked);
    };

    return (
      <FlexBox gap="1rem" fld="column">
        {Object.values(Status)
          .filter((i) => !isNaN(Number(i)))
          .map((v) => (
            <Checkbox key={v} status={Status[v]} checked={checked} onChange={handleChange}>
              {Status[v]} choice
            </Checkbox>
          ))}
      </FlexBox>
    );
  },
};

export const girths: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (e) => {
      setChecked(!checked);
    };

    return (
      <FlexBox gap="1rem" fld="column">
        <Checkbox checked={checked} onChange={handleChange}>
          md choice
        </Checkbox>
        <Checkbox girth="lg" checked={checked} onChange={handleChange}>
          lg choice
        </Checkbox>
        <Checkbox girth="xl" checked={checked} onChange={handleChange}>
          xl choice
        </Checkbox>
        <Checkbox girth="xxl" checked={checked} onChange={handleChange}>
          xxl choice
        </Checkbox>
      </FlexBox>
    );
  },
};

export const indeterminate: Story = {
  render: () => {
    const [checkedItems, setCheckedItems] = React.useState([false, false, false]);

    const allChecked = checkedItems.every((e) => e);
    const isIndeterminate = checkedItems.some((e) => e) && !allChecked;

    return (
      <FlexBox gap="1rem" fld="column">
        <Checkbox
          checked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={(e) => setCheckedItems([!allChecked, !allChecked, !allChecked])}
        >
          Parent selection
        </Checkbox>
        <FlexBox gap="1rem" fld="column" margin="0 0 0 1rem">
          <Checkbox
            checked={checkedItems[0]}
            onChange={(e) => setCheckedItems([!checkedItems[0], checkedItems[1], checkedItems[2]])}
          >
            Child selection 1
          </Checkbox>
          <Checkbox
            checked={checkedItems[1]}
            onChange={(e) => setCheckedItems([checkedItems[0], !checkedItems[1], checkedItems[2]])}
          >
            Child selection 2
          </Checkbox>
          <Checkbox
            checked={checkedItems[2]}
            onChange={(e) => setCheckedItems([checkedItems[0], checkedItems[1], !checkedItems[2]])}
          >
            Child selection 3
          </Checkbox>
        </FlexBox>
      </FlexBox>
    );
  },
};
