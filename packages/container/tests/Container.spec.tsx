/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, styled, TidyUiProvider } from '../../commons/src';
import { Container } from '../src';
import { Screen } from '../../types/src';

const InnerDiv = styled.div`
  background-color: #cfe8fc;
  height: 100vh;
`;

const Content = () => <InnerDiv></InnerDiv>;

describe('Container', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Container>
          <Content />
        </Container>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Fixed', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Container isFixed>
          <Content />
        </Container>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Max width', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        {Object.keys(Screen)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Container maxWidth={Screen[v]} key={i}>
              <Content />
            </Container>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('No gutters', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Container gutter="0">
          <Content />
        </Container>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom height', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Container height="25rem">
          <Content />
        </Container>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom background', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Container background="grey">
          <Content />
        </Container>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom border', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Container border="2px solid grey">
          <Content />
        </Container>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom clear', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Container clear="both">
          <Content />
        </Container>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom color', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Container color="grey">
          <Content />
        </Container>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom display', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Container display="block">
          <Content />
        </Container>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom float', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Container float="left">
          <Content />
        </Container>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom font', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Container font="Roboto">
          <Content />
        </Container>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom margin', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Container margin="25rem">
          <Content />
        </Container>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom overflow', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Container overflow="scroll">
          <Content />
        </Container>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom padding', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Container padding="25rem">
          <Content />
        </Container>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom position', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Container position="absolute">
          <Content />
        </Container>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom width', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Container width="25rem">
          <Content />
        </Container>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom element', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Container ele={<div />}>
          <Content />
        </Container>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
