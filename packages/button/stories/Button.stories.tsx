import React from 'react';
import { CheckCircleIcon, LaunchIcon } from '@tidy-ui/commons';
import { styled } from '@tidy-ui/theme';
import { Anchor, Button } from '../src';

export default {
  component: Button,
  title: 'Button',
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
    <Button withText="neutral" withType="basic" withColor="neutral" />
    <Button withText="major" withType="basic" withColor="major" />
    <Button withText="minor" withType="basic" withColor="minor" />
    <Button withText="info" withType="basic" withColor="info" />
    <Button withText="success" withType="basic" withColor="success" />
    <Button withText="warning" withType="basic" withColor="warning" />
    <Button withText="danger" withType="basic" withColor="danger" />
  </Container>
);

export const outlined = () => (
  <Container>
    <Button withText="neutral" withType="outlined" withColor="neutral" />
    <Button withText="major" withType="outlined" withColor="major" />
    <Button withText="minor" withType="outlined" withColor="minor" />
    <Button withText="info" withType="outlined" withColor="info" />
    <Button withText="success" withType="outlined" withColor="success" />
    <Button withText="warning" withType="outlined" withColor="warning" />
    <Button withText="danger" withType="outlined" withColor="danger" />
  </Container>
);

export const primary = () => (
  <Container>
    <Button withText="neutral" withType="primary" withColor="neutral" />
    <Button withText="major" withType="primary" withColor="major" />
    <Button withText="minor" withType="primary" withColor="minor" />
    <Button withText="info" withType="primary" withColor="info" />
    <Button withText="success" withType="primary" withColor="success" />
    <Button withText="warning" withType="primary" withColor="warning" />
    <Button withText="danger" withType="primary" withColor="danger" />
  </Container>
);

export const size = () => (
  <Container>
    <Column>
      <Button withText="size-xxs" withType="basic" withColor="neutral" withSize="xxs" />
      <Button withText="size-xs" withType="basic" withColor="info" withSize="xs" />
      <Button withText="size-sm" withType="basic" withColor="success" withSize="sm" />
      <Button withText="size-md" withType="basic" withColor="warning" withSize="md" />
      <Button withText="size-lg" withType="basic" withColor="danger" withSize="lg" />
      <Button withText="size-xl" withType="basic" withColor="major" withSize="xl" />
      <Button withText="size-xxl" withType="basic" withColor="minor" withSize="xxl" />
    </Column>
    <Column>
      <Button withText="size-xxs" withType="primary" withColor="neutral" withSize="xxs" />
      <Button withText="size-xs" withType="primary" withColor="info" withSize="xs" />
      <Button withText="size-sm" withType="primary" withColor="success" withSize="sm" />
      <Button withText="size-md" withType="primary" withColor="warning" withSize="md" />
      <Button withText="size-lg" withType="primary" withColor="danger" withSize="lg" />
      <Button withText="size-xl" withType="primary" withColor="major" withSize="xl" />
      <Button withText="size-xxl" withType="primary" withColor="minor" withSize="xxl" />
    </Column>
    <Column>
      <Button withText="size-xxs" withType="outlined" withColor="neutral" withSize="xxs" />
      <Button withText="size-xs" withType="outlined" withColor="info" withSize="xs" />
      <Button withText="size-sm" withType="outlined" withColor="success" withSize="sm" />
      <Button withText="size-md" withType="outlined" withColor="warning" withSize="md" />
      <Button withText="size-lg" withType="outlined" withColor="danger" withSize="lg" />
      <Button withText="size-xl" withType="outlined" withColor="major" withSize="xl" />
      <Button withText="size-xxl" withType="outlined" withColor="minor" withSize="xxl" />
    </Column>
    <Column>
      <Button withText="size-xxs" withType="primary" withColor="neutral" withSize="xxs" isLoading />
      <Button withText="size-xs" withType="primary" withColor="info" withSize="xs" isLoading />
      <Button withText="size-sm" withType="primary" withColor="success" withSize="sm" isLoading />
      <Button withText="size-md" withType="primary" withColor="warning" withSize="md" isLoading />
      <Button withText="size-lg" withType="primary" withColor="danger" withSize="lg" isLoading />
      <Button withText="size-xl" withType="primary" withColor="major" withSize="xl" isLoading />
      <Button withText="size-xxl" withType="primary" withColor="minor" withSize="xxl" isLoading />
    </Column>
    <Column>
      <Button withText="size-xxs" withType="outlined" withColor="neutral" withSize="xxs" isLoading />
      <Button withText="size-xs" withType="outlined" withColor="info" withSize="xs" isLoading />
      <Button withText="size-sm" withType="outlined" withColor="success" withSize="sm" isLoading />
      <Button withText="size-md" withType="outlined" withColor="warning" withSize="md" isLoading />
      <Button withText="size-lg" withType="outlined" withColor="danger" withSize="lg" isLoading />
      <Button withText="size-xl" withType="outlined" withColor="major" withSize="xl" isLoading />
      <Button withText="size-xxl" withType="outlined" withColor="minor" withSize="xxl" isLoading />
    </Column>
  </Container>
);

export const hero = () => (
  <Container>
    <Button withText="hero" withType="hero" withColor="success" />
  </Container>
);

export const link = () => (
  <Container>
    <Anchor href="/?path=/story/button--basic">Basic button</Anchor>
    <Anchor href="/?path=/story/button--basic" isDisabled>
      Cannot go
    </Anchor>
    <Anchor href="https://www.google.com/" isLaunch>
      Google
    </Anchor>
  </Container>
);

export const others = () => (
  <Container>
    <Button withText="simple" title="Simple button" />
    <Button withText="isUppercase" withType="primary" withColor="major" isUppercase />
    <Button withText="isDisabled" withType="primary" withColor="minor" isDisabled />
    <Button withText="full width" withType="outlined" withColor="major" isStretched />
    <Button withText="Settings" withIcon={<LaunchIcon />} />
    <Button withType="primary" withColor="major" withIcon={<CheckCircleIcon />} />
    <Button withIcon={<LaunchIcon />} withColor="neutral" />
  </Container>
);
