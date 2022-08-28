import React from 'react';
import { amber, css, hsla, styled } from '@tidy-ui/commons';
import { Container } from '../src';
import { IContainerProps } from '../src/types';

export default {
  component: Container,
  title: 'Layout/Container',
};

const InnerDiv = styled.div<IContainerProps>`
  height: 100vh;
  ${({ theme: { isDark } }) =>
    isDark
      ? css`
          background-color: ${hsla(amber[900], 0.2)};
          color: ${hsla(amber[300])}; ;
        `
      : css`
          background-color: ${hsla(amber[100], 0.8)};
          color: ${hsla(amber[900])};
        `}
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
