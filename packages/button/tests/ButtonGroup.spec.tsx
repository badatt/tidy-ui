/**
 * @jest-environment jsdom
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Button, ButtonGroup } from '../src';

afterEach(cleanup);

describe('Render ButtonGroup', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <ButtonGroup>
          {[...Array(5)].map((c, i) => (
            <Button key={i}>Button {i}</Button>
          ))}
        </ButtonGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Basic render in dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <ButtonGroup>
          {[...Array(5)].map((c, i) => (
            <Button key={i}>Button {i}</Button>
          ))}
        </ButtonGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Stretched ButtonGroup', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <ButtonGroup isStretched>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </ButtonGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Vertically aligned ButtonGroup', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <ButtonGroup isVertical>
          {[...Array(5)].map((c, i) => (
            <Button key={i}>Button {i}</Button>
          ))}
        </ButtonGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Unified ButtonGroup', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <ButtonGroup isUnified>
          {[...Array(5)].map((c, i) => (
            <Button key={i}>Button {i}</Button>
          ))}
        </ButtonGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Vertically unified ButtonGroup', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <ButtonGroup isUnified isVertical>
          {[...Array(5)].map((c, i) => (
            <Button key={i}>Button {i}</Button>
          ))}
        </ButtonGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Disabled ButtonGroup', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <ButtonGroup disabled>
          {[...Array(5)].map((c, i) => (
            <Button key={i}>Button {i}</Button>
          ))}
        </ButtonGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom dimensions', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <ButtonGroup width="30rem" height="5rem">
          {[...Array(5)].map((c, i) => (
            <Button key={i}>Button {i}</Button>
          ))}
        </ButtonGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
