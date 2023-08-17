import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarBadge, AvatarGroup } from '../src';
import { FlexBox } from '../../flexbox/src';
import { color, hsla, Icon } from '../../commons/src';
import { Girth } from '../../types/src';

const meta: Meta<typeof Avatar> = {
  title: 'Presentation/Avatar',
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const basic: Story = {
  render: () => {
    return (
      <FlexBox>
        <Avatar />
      </FlexBox>
    );
  },
};

export const girths = () => {
  return (
    <FlexBox gap="1rem" fld="column" ali="flex-start">
      {Object.keys(Girth)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Avatar girth={Girth[v]} key={v} />
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
          <Avatar src="https://bit.ly/kent-c-dodds" girth={Girth[v]} key={v} />
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
          <Avatar name={`Girth${Girth[v]} ${i}Ipsum`} girth={Girth[v]} key={v} />
        ))}
    </FlexBox>
  );
};

export const withIcon = () => {
  return (
    <FlexBox gap="1rem" fld="column" ali="flex-start">
      {Object.keys(Girth)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Avatar icon={<Icon.RotatingCircle />} girth={Girth[v]} key={v} />
        ))}
    </FlexBox>
  );
};

export const accent = () => {
  return (
    <FlexBox gap="1rem" fld="column" ali="flex-start">
      {Object.keys(Girth)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Avatar girth={Girth[v]} accent={hsla(color.green[600])} key={v} />
        ))}
    </FlexBox>
  );
};

export const withBadge = () => {
  return (
    <FlexBox gap="1rem" fld="column" ali="flex-start">
      {Object.keys(Girth)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Avatar src="https://bit.ly/sage-adebayo" girth={Girth[v]} key={v}>
            <AvatarBadge tone={hsla(color.green[600])} />
          </Avatar>
        ))}
    </FlexBox>
  );
};

export const group: Story = {
  render: () => {
    return (
      <FlexBox fld="row">
        <AvatarGroup max={3}>
          <Avatar src="https://bit.ly/sage-adebayo">
            <AvatarBadge tone={hsla(color.green[600])} />
          </Avatar>
          <Avatar src="https://bit.ly/ryan-florence" />
          <Avatar src="https://bit.ly/dan-abramov" />
          <Avatar name="Kola Tiol" />
          <Avatar src="https://bit.ly/prosper-baba" />
          <Avatar src="https://bit.ly/code-beast" />
        </AvatarGroup>
      </FlexBox>
    );
  },
};
