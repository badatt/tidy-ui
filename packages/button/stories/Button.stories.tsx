import React from 'react';
import { AddCircleIcon, CheckCircleIcon } from '@tidy-ui/commons';
import { css, styled } from '@tidy-ui/commons';
import { Button } from '../src';
import { IButtonProps } from '../src/types';

export default {
  component: Button,
  title: 'Components/Button/Button',
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

export const colorVariants = () => (
  <Container>
    <Button withColor="major">major</Button>
    <Button withColor="minor">minor</Button>
    <Button withColor="neutral">neutral</Button>
    <Button withColor="info">info</Button>
    <Button withColor="success">success</Button>
    <Button withColor="warning">warning</Button>
    <Button withColor="danger">danger</Button>
  </Container>
);

export const sizeVariants = () => (
  <Container>
    <Column>
      <Button withSize="xxs">xxs</Button>
      <Button withSize="xs">size-xs</Button>
      <Button withSize="sm">size-sm</Button>
      <Button withSize="md">size-md</Button>
      <Button withSize="lg">size-lg</Button>
      <Button withSize="xl">size-xl</Button>
      <Button withSize="xxl">size-xxl</Button>
    </Column>
  </Container>
);

export const types = () => (
  <Container>
    <Column>
      <Button withType="primary">primary</Button>
      <Button withType="outlined">outlined</Button>
      <Button withType="basic">basic</Button>
      <Button withType="simple">simple</Button>
      <Button withType="hero">hero</Button>
    </Column>
  </Container>
);

export const disabled = () => (
  <Container>
    <Button isDisabled>disabled</Button>
  </Container>
);

export const loading = () => (
  <Container>
    <Button isLoading>Loading...</Button>
  </Container>
);

export const stretched = () => (
  <Container>
    <Button isStretched>stretched</Button>
  </Container>
);

export const uppercase = () => (
  <Container>
    <Button isUppercase>uppercase</Button>
  </Container>
);

const iconStyles = css<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.5em;
  width: 1.5em;
`;

const LaunchIconWrap = styled(AddCircleIcon)`
  margin-right: 0.25em;
  ${iconStyles}
`;

const CheckCircleIconWrap = styled(CheckCircleIcon)`
  ${iconStyles}
`;

export const others = () => (
  <Container>
    <Button withType="primary" withColor="major">
      <LaunchIconWrap withSize="md" />
      Settings
    </Button>
    <Button withColor="neutral">
      <CheckCircleIconWrap withSize="md" />
    </Button>
  </Container>
);
