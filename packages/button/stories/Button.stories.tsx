import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { css, styled } from '@tidy-ui/commons';
import { Button } from '../src';
import { IButtonProps } from '../src/types';

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

export const tones = () => (
  <Container>
    <Button tone="major">major</Button>
    <Button tone="minor">minor</Button>
    <Button tone="neutral">neutral</Button>
    <Button tone="info">info</Button>
    <Button tone="success">success</Button>
    <Button tone="warning">warning</Button>
    <Button tone="danger">danger</Button>
  </Container>
);

export const sizes = () => (
  <Container>
    <Column>
      <Button size="xxs">xxs</Button>
      <Button size="xs">size-xs</Button>
      <Button size="sm">size-sm</Button>
      <Button size="md">size-md</Button>
      <Button size="lg">size-lg</Button>
      <Button size="xl">size-xl</Button>
      <Button size="xxl">size-xxl</Button>
    </Column>
  </Container>
);

export const variants = () => (
  <Column>
    <Button variant="primary">primary</Button>
    <Button variant="primary" gradient>
      primary gradient
    </Button>
    <Button variant="outlined">outlined</Button>
    <Button variant="basic">basic</Button>
    <Button variant="simple">simple</Button>
    <Button variant="hero">hero</Button>
    <Button variant="hero" gradient>
      hero gradient
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
    <Button uc>uppercase</Button>
  </Container>
);

const iconStyles = css<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.5em;
  width: 1.5em;
`;

const LaunchIconWrap = styled(Icon.AddCircle)`
  margin-right: 0.25em;
  ${iconStyles}
`;

const CheckCircleIconWrap = styled(Icon.CheckCircle)`
  ${iconStyles}
`;

export const others = () => (
  <Container>
    <Button variant="primary" tone="major">
      <LaunchIconWrap size="md" />
      Settings
    </Button>
    <Button tone="neutral">
      <CheckCircleIconWrap size="md" />
    </Button>
  </Container>
);
