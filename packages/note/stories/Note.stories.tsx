import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Note } from '../src';
import { color, hsla, useTheme } from '../../commons/src';

const meta: Meta<typeof Note> = {
  title: 'Presentation/Note',
  component: Note,
};

export default meta;

type Story = StoryObj<typeof Note>;

export const basic: Story = {
  render: () => {
    return (
      <Note>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis id eum vitae facere illum, tempore enim
        saepe facilis cum sed quod nobis mollitia repudiandae. At fugit expedita architecto quasi ex.
      </Note>
    );
  },
};

export const reality: Story = {
  render: () => {
    return (
      <Note isReal width="250px">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed amet possimus, accusantium exercitationem
        perspiciatis ipsum delectus quos laboriosam velit! Ab inventore eligendi voluptate vitae cum in! Vero iste
        laboriosam eaque.
      </Note>
    );
  },
};
