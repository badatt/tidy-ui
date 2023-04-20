import React from 'react';
import { Icon } from '../../commons/src';
import { FlexBox } from '../../flexbox/src';
import { Button } from '../src';
import { Variant } from '../src/types';
import { Size, Tone } from '../../commons/src';

export default {
  component: Button,
  title: 'Presentation/Button/Button',
};

export const basic = () => <Button>basic button</Button>;

export const tones = () => {
  return (
    <FlexBox gap="1rem">
      {Object.values(Tone)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Button tone={Tone[v]} key={i}>
            {Tone[v]}
          </Button>
        ))}
    </FlexBox>
  );
};

export const sizes = () => {
  return (
    <FlexBox gap="1rem" fld="column" ali="flex-start">
      {Object.keys(Size)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Button size={Size[v]} key={i}>
            size-{Size[v]}
          </Button>
        ))}
    </FlexBox>
  );
};

export const variants = () => {
  return (
    <FlexBox gap="1rem" fld="column" ali="flex-start">
      {Object.values(Variant)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Button variant={Variant[v]} key={i}>
            {Variant[v]}
          </Button>
        ))}
    </FlexBox>
  );
};

export const gradient = () => (
  <Button variant="hero" gradient>
    Gradient
  </Button>
);

export const disabled = () => <Button disabled>disabled</Button>;

export const loading = () => <Button loading>Loading...</Button>;

export const stretched = () => <Button stretched>stretched</Button>;

export const uppercase = () => <Button uppercase>uppercase</Button>;

export const others = () => (
  <FlexBox gap="1rem">
    <Button variant="primary" tone="major">
      <Icon ele={<Icon.AddCircle />} margin="0 8px 0 0" />
      Settings
    </Button>
    <Button tone="neutral">
      <Icon ele={<Icon.CheckCircle />} />
    </Button>
  </FlexBox>
);

export const customDimensions = () => (
  <Button h="3rem" w="15rem">
    custom dimension
  </Button>
);

export const iconOnly = () => {
  return (
    <FlexBox gap="1rem">
      {Object.values(Tone)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Button icon={<Icon.Menu />} tone={Tone[v]} key={i} />
        ))}
    </FlexBox>
  );
};
