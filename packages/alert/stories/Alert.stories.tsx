import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '../src';

/* export default {
  component: Alert,
  title: 'Presentation/Alert',
}; */

const meta: Meta<typeof Alert> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Presentation/Alert',
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const basic: Story = {
  render: () => <Alert>basic alert</Alert>,
};
