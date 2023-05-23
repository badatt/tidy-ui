/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Checkbox } from '../src';

describe('Checkbox', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Checkbox>basic</Checkbox>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Checkbox>basic</Checkbox>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Checked', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Checkbox checked>basic</Checkbox>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Indeterminate', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Checkbox isIndeterminate>basic</Checkbox>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Disabled', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Checkbox disabled>basic</Checkbox>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Checkbox>basic</Checkbox>
        <Checkbox isFilled>basic</Checkbox>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Filled and checked', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Checkbox isFilled checked>
          basic
        </Checkbox>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Filled checkbox in dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Checkbox isFilled>basic</Checkbox>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
