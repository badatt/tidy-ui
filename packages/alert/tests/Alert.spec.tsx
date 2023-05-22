/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Alert } from '../src';

describe('Alert', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Alert>
          <Alert.Title>Title</Alert.Title>content<Alert.Footer>footer</Alert.Footer>
        </Alert>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Alert>
          <Alert.Title>Title</Alert.Title>content<Alert.Footer>footer</Alert.Footer>
        </Alert>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('With custom elements', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Alert ele={<div />}>
          <Alert.Title ele={<div />}>custom title element</Alert.Title>body
          <Alert.Footer ele={<div />}>custom footer</Alert.Footer>
        </Alert>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Filled', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Alert isFilled>
          <Alert.Title>Title</Alert.Title>content<Alert.Footer>footer</Alert.Footer>
        </Alert>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Blunt', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Alert isSharp={false}>
          <Alert.Title>Title</Alert.Title>content<Alert.Footer>footer</Alert.Footer>
        </Alert>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Blunt and filled', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Alert isSharp={false} isFilled>
          <Alert.Title>Title</Alert.Title>content<Alert.Footer>footer</Alert.Footer>
        </Alert>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
