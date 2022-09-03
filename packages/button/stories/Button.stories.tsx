import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { styled } from '@tidy-ui/commons';
import { Button } from '../src';
import { Variant } from '../src/types';
import { Size, Tone } from '@tidy-ui/types';

export default {
  component: Button,
  title: 'Presentation/Button/Button',
};

const Container = styled.div`
  display: flex;
  gap: 16px;
`;

const Column = styled.div`
  & > * {
    margin-bottom: 8px;
  }
`;

export const basic = () => (
  <Container>
    <Button>basic button</Button>
  </Container>
);

export const tones = () => {
  return (
    <Container>
      {Object.values(Tone)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Button tone={Tone[v]} key={i}>
            {Tone[v]}
          </Button>
        ))}
    </Container>
  );
};

export const sizes = () => {
  return (
    <Column>
      {Object.keys(Size)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Button size={Size[v]} key={i}>
            size-{Size[v]}
          </Button>
        ))}
    </Column>
  );
};

export const variants = () => {
  return (
    <Column>
      {Object.values(Variant)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Button variant={Variant[v]} key={i}>
            {Variant[v]}
          </Button>
        ))}
    </Column>
  );
};

export const gradient = () => (
  <Column>
    <Button gradient>basic button</Button>
    <Button variant="hero" gradient>
      basic button
    </Button>
  </Column>
);

export const disabled = () => (
  <Container>
    <Button disabled>disabled</Button>
  </Container>
);

export const loading = () => (
  <Container>
    <Button loading>Loading...</Button>
  </Container>
);

export const stretched = () => (
  <Container>
    <Button stretched>stretched</Button>
  </Container>
);

export const uppercase = () => (
  <Container>
    <Button uppercase>uppercase</Button>
  </Container>
);

export const others = () => (
  <Container>
    <Button variant="primary" tone="major">
      <Icon ele={<Icon.AddCircle />} margin="0 8px 0 0" />
      Settings
    </Button>
    <Button tone="neutral">
      <Icon ele={<Icon.CheckCircle />} />
    </Button>
  </Container>
);
