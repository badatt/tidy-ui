import React from 'react';
import { Icon } from '../../commons/src';
import { FlexBox } from '../../flexbox/src';
import { Button } from '../src';
import { ButtonVariant, Girth, Tone } from '../../types/src';

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

export const girths = () => {
  return (
    <FlexBox gap="1rem" fld="column" ali="flex-start">
      {Object.keys(Girth)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Button girth={Girth[v]} key={i}>
            girth-{Girth[v]}
          </Button>
        ))}
    </FlexBox>
  );
};

export const variants = () => {
  return (
    <FlexBox gap="1rem" fld="column" ali="flex-start">
      {Object.values(ButtonVariant)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Button variant={ButtonVariant[v]} key={i}>
            {ButtonVariant[v]}
          </Button>
        ))}
    </FlexBox>
  );
};

export const gradient = () => (
  <Button variant="hero" isGradient>
    Gradient
  </Button>
);

export const disabled = () => <Button disabled>disabled</Button>;

export const loading = () => <Button isLoading>Loading...</Button>;

export const stretched = () => <Button isStretched>stretched</Button>;

export const uppercase = () => <Button isUppercase>uppercase</Button>;

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
  <Button height="3rem" width="15rem">
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
