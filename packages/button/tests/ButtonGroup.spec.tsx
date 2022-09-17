/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Button, ButtonGroup } from '../src';

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
        <ButtonGroup stretched>
          <Button variant="outlined">button 1</Button>
          <Button variant="outlined">button 2</Button>
        </ButtonGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Vertically aligned ButtonGroup', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <ButtonGroup vertical>
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
        <ButtonGroup unified>
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
        <ButtonGroup unified vertical>
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
        <ButtonGroup w="30rem" h="5rem">
          {[...Array(5)].map((c, i) => (
            <Button key={i}>Button {i}</Button>
          ))}
        </ButtonGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
