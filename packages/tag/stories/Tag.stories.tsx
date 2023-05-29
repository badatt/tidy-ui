import React from 'react';
import { Icon } from '../../commons/src';
import { FlexBox } from '../../flexbox/src';
import { Tone } from '../../commons/src';
import { Tag } from '../src';

export default {
  component: Tag,
  title: 'Presentation/Tag/Tag',
};

export const basic = () => <Tag>basic</Tag>;

export const icon = () => <Tag icon={<Icon.CheckCircle />}>with icon</Tag>;

export const tones = () => (
  <FlexBox gap="1rem">
    {Object.keys(Tone)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <Tag tone={Tone[v]} key={Tone[v]}>
          {Tone[v]}
        </Tag>
      ))}
  </FlexBox>
);

export const filled = () => (
  <FlexBox gap="1rem">
    {Object.keys(Tone)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <Tag tone={Tone[v]} key={Tone[v]} isFilled>
          {Tone[v]}
        </Tag>
      ))}
  </FlexBox>
);

export const Girths = () => (
  <FlexBox fld="column" gap="1rem">
    <Tag girth="sm">size = sm</Tag>
    <Tag girth="md">size = md</Tag>
    <Tag girth="lg">size = lg</Tag>
  </FlexBox>
);
