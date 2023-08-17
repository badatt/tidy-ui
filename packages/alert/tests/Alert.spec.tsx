/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Alert, AlertTitle, AlertFooter } from '../src';

describe('Alert', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Alert>
          <AlertTitle>Title</AlertTitle>content<AlertFooter>footer</AlertFooter>
        </Alert>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Alert>
          <AlertTitle>Title</AlertTitle>content<AlertFooter>footer</AlertFooter>
        </Alert>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('With custom elements', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Alert ele={<div />}>
          <AlertTitle ele={<div />}>custom title element</AlertTitle>body
          <AlertFooter ele={<div />}>custom footer</AlertFooter>
        </Alert>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Filled', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Alert isFilled>
          <AlertTitle>Title</AlertTitle>content<AlertFooter>footer</AlertFooter>
        </Alert>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Blunt', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Alert isSharp={false}>
          <AlertTitle>Title</AlertTitle>content<AlertFooter>footer</AlertFooter>
        </Alert>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Blunt and filled', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Alert isSharp={false} isFilled>
          <AlertTitle>Title</AlertTitle>content<AlertFooter>footer</AlertFooter>
        </Alert>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
