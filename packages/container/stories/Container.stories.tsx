import React from 'react';
import { styled } from '@tidy-ui/commons';
import { Container } from '../src';

export default {
  component: Container,
  title: 'Layout/Container',
};

const InnerDiv = styled.div`
  background-color: #cfe8fc;
  height: 100vh;
`;

const Content = () => <InnerDiv></InnerDiv>;

export const basic = () => (
  <Container>
    <Content />
  </Container>
);

export const fixed = () => (
  <Container fixed>
    <Content />
  </Container>
);

export const maxWidth = () => (
  <>
    <Container maxWidth="xs">
      <Content />
    </Container>
    <Container maxWidth="sm">
      <Content />
    </Container>
    <Container maxWidth="md">
      <Content />
    </Container>
    <Container maxWidth="lg">
      <Content />
    </Container>
    <Container maxWidth="xl">
      <Content />
    </Container>
  </>
);

export const noGutters = () => (
  <Container gutter="0">
    <Content />
  </Container>
);
