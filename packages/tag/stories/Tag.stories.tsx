import React from 'react';
import { Icon } from '../../commons/src';
import { FlexBox } from '../../flexbox/src';
import { Tag } from '../src';
import { Tone } from '../../commons/src';
import { Size } from '../src/types';

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
        <Tag tone={Tone[v]}>{Tone[v]}</Tag>
      ))}
  </FlexBox>
);

export const outlined = () => (
  <FlexBox gap="1rem">
    {Object.keys(Tone)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <Tag tone={Tone[v]} outlined>
          {Tone[v]}
        </Tag>
      ))}
  </FlexBox>
);

export const disabled = () => <Tag disabled>disabled</Tag>;

export const sizes = () => (
  <FlexBox fld="column" gap="1rem">
    {Object.keys(Size)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <Tag size={Size[v]}>size = {Size[v]}</Tag>
      ))}
  </FlexBox>
);

export const customDimensions = () => (
  <Tag height="3rem" width="10rem">
    custom dimension
  </Tag>
);
