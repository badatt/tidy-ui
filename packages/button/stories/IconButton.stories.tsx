import React from 'react';
import { Icon, Girth, Tone } from '../../commons/src';
import { FlexBox } from '../../flexbox/src';
import { IconButton } from '../src';

export default {
  component: IconButton,
  title: 'Presentation/Button/IconButton',
};

export const basic = () => <IconButton icon={<Icon.Add />}>Add</IconButton>;

export const tones = () => {
  return (
    <FlexBox gap="1rem">
      {Object.values(Tone)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <IconButton icon={<Icon.AddCircle />} tone={Tone[v]} key={i}>
            {Tone[v]}
          </IconButton>
        ))}
    </FlexBox>
  );
};

export const placement = () => (
  <FlexBox gap="1rem">
    <IconButton icon={<Icon.AddCircle />}>Left</IconButton>
    <IconButton icon={<Icon.AddCircle />} placement="right">
      Right
    </IconButton>
  </FlexBox>
);

export const girths = () => (
  <FlexBox gap="1rem" fld="column" ali="flex-start">
    {Object.values(Girth)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <IconButton icon={<Icon.AddCircle />} girth={Girth[v]} key={i}>
          {Girth[v]}
        </IconButton>
      ))}
  </FlexBox>
);

export const types = () => (
  <FlexBox gap="1rem">
    <IconButton icon={<Icon.AddCircle />} variant="primary">
      Primary
    </IconButton>
    <IconButton icon={<Icon.Close />} variant="outlined">
      Outlined
    </IconButton>
  </FlexBox>
);

export const disabled = () => (
  <IconButton icon={<Icon.Add />} disabled>
    Disabled
  </IconButton>
);

export const customDimension = () => (
  <IconButton icon={<Icon.Add />} height="3rem" width="12rem">
    custom dimension
  </IconButton>
);

export const iconOnly = () => {
  return (
    <FlexBox gap="1rem" fld="column" ali="flex-start">
      {Object.values(Girth)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <IconButton icon={<Icon.Add />} isIconOnly girth={Girth[v]} key={i} />
        ))}
    </FlexBox>
  );
};
