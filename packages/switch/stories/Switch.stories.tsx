import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FlexBox } from '../../flexbox/src';
import { Switch } from '../src';
import { Status } from '@tidy-ui/commons';

const meta: Meta<typeof Switch> = {
  title: 'Form/Switch',
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const basic: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (e) => {
      setChecked(!checked);
    };
    return (
      <FlexBox fld="column" gap="1rem">
        <Switch checked={checked} onChange={handleChange}></Switch>
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
            <Switch key={v} status={Status[v]} checked={checked} onChange={handleChange}>
              {Status[v]} choice
            </Switch>
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
      <FlexBox fld="column" gap="1rem">
        <Switch checked={checked} onChange={handleChange}></Switch>
        <Switch checked={checked} girth="lg" onChange={handleChange}></Switch>
        <Switch checked={checked} girth="xl" onChange={handleChange}></Switch>
        <Switch checked={checked} girth="xxl" onChange={handleChange}></Switch>
      </FlexBox>
    );
  },
};
