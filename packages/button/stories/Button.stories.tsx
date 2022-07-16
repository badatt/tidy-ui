import React from 'react';
import { styled } from '@tidy-ui/theme';
import { ExternalLinkIcon, EmailIcon } from '@tidy-ui/commons';

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
    <Button text="neutral" appearance="basic" color="neutral" />
    <Button text="major" appearance="basic" color="major" />
    <Button text="minor" appearance="basic" color="minor" />
    <Button text="info" appearance="basic" color="info" />
    <Button text="success" appearance="basic" color="success" />
    <Button text="warning" appearance="basic" color="warning" />
    <Button text="danger" appearance="basic" color="danger" />
  </Container>
);

export const outlined = () => (
  <Container>
    <Button text="neutral" appearance="outlined" color="neutral" />
    <Button text="major" appearance="outlined" color="major" />
    <Button text="minor" appearance="outlined" color="minor" />
    <Button text="info" appearance="outlined" color="info" />
    <Button text="success" appearance="outlined" color="success" />
    <Button text="warning" appearance="outlined" color="warning" />
    <Button text="danger" appearance="outlined" color="danger" />
  </Container>
);

export const primary = () => (
  <Container>
    <Button text="neutral" appearance="primary" color="neutral" />
    <Button text="major" appearance="primary" color="major" />
    <Button text="minor" appearance="primary" color="minor" />
    <Button text="info" appearance="primary" color="info" />
    <Button text="success" appearance="primary" color="success" />
    <Button text="warning" appearance="primary" color="warning" />
    <Button text="danger" appearance="primary" color="danger" />
  </Container>
);

export const size = () => (
  <Container>
    <Column>
      <Button text="size-xxs" appearance="basic" color="neutral" size="xxs" />
      <Button text="size-xs" appearance="basic" color="info" size="xs" />
      <Button text="size-sm" appearance="basic" color="success" size="sm" />
      <Button text="size-md" appearance="basic" color="warning" size="md" />
      <Button text="size-lg" appearance="basic" color="danger" size="lg" />
      <Button text="size-xl" appearance="basic" color="major" size="xl" />
      <Button text="size-xxl" appearance="basic" color="minor" size="xxl" />
    </Column>
    <Column>
      <Button text="size-xxs" appearance="primary" color="neutral" size="xxs" />
      <Button text="size-xs" appearance="primary" color="info" size="xs" />
      <Button text="size-sm" appearance="primary" color="success" size="sm" />
      <Button text="size-md" appearance="primary" color="warning" size="md" />
      <Button text="size-lg" appearance="primary" color="danger" size="lg" />
      <Button text="size-xl" appearance="primary" color="major" size="xl" />
      <Button text="size-xxl" appearance="primary" color="minor" size="xxl" />
    </Column>
    <Column>
      <Button text="size-xxs" appearance="outlined" color="neutral" size="xxs" />
      <Button text="size-xs" appearance="outlined" color="info" size="xs" />
      <Button text="size-sm" appearance="outlined" color="success" size="sm" />
      <Button text="size-md" appearance="outlined" color="warning" size="md" />
      <Button text="size-lg" appearance="outlined" color="danger" size="lg" />
      <Button text="size-xl" appearance="outlined" color="major" size="xl" />
      <Button text="size-xxl" appearance="outlined" color="minor" size="xxl" />
    </Column>
    <Column>
      <Button text="size-xxs" appearance="primary" color="neutral" size="xxs" loading />
      <Button text="size-xs" appearance="primary" color="info" size="xs" loading />
      <Button text="size-sm" appearance="primary" color="success" size="sm" loading />
      <Button text="size-md" appearance="primary" color="warning" size="md" loading />
      <Button text="size-lg" appearance="primary" color="danger" size="lg" loading />
      <Button text="size-xl" appearance="primary" color="major" size="xl" loading />
      <Button text="size-xxl" appearance="primary" color="minor" size="xxl" loading />
    </Column>
    <Column>
      <Button text="size-xxs" appearance="outlined" color="neutral" size="xxs" loading />
      <Button text="size-xs" appearance="outlined" color="info" size="xs" loading />
      <Button text="size-sm" appearance="outlined" color="success" size="sm" loading />
      <Button text="size-md" appearance="outlined" color="warning" size="md" loading />
      <Button text="size-lg" appearance="outlined" color="danger" size="lg" loading />
      <Button text="size-xl" appearance="outlined" color="major" size="xl" loading />
      <Button text="size-xxl" appearance="outlined" color="minor" size="xxl" loading />
    </Column>
  </Container>
);

export const hero = () => (
  <Container>
    <Button text="hero" appearance="hero" color="success" />
  </Container>
);

export const link = () => (
  <Container>
    <Anchor href="/?path=/story/button--basic">Basic button</Anchor>
    <Anchor href="/?path=/story/button--basic" disable>
      Cannot go
    </Anchor>
    <Anchor href="https://www.google.com/" newTab>
      Google
    </Anchor>
  </Container>
);

export const others = () => (
  <Container>
    <Button text="simple" title="Simple button" />
    <Button text="uppercase" appearance="primary" color="major" uppercase />
    <Button text="disabled" appearance="primary" color="minor" disable />
    <Button text="full width" appearance="outlined" color="major" stretch />
    <Button text="Settings" icon={<ExternalLinkIcon />} />
    <Button appearance="primary" color="major" icon={<EmailIcon />} />
    <Button icon={<ExternalLinkIcon />} color="neutral" />
  </Container>
);
