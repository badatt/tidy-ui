/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, styled } from '@tidy-ui/commons';
import { Container } from '../src';

const InnerDiv = styled.div`
  background-color: #cfe8fc;
  height: 100vh;
`;

const Content = () => <InnerDiv></InnerDiv>;

describe('Container', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Container>
          <Content />
        </Container>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Fixed', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Container fixed>
          <Content />
        </Container>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('MAx width', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
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
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('No gutters', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Container gutter="0">
          <Content />
        </Container>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
