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
        <Container fixed>
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
        <Container h="25rem">
          <Content />
        </Container>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
