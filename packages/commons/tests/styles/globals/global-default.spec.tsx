/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { GlobalDefault, orchidLight, TidyUiProvider } from '../../../src';

describe('GlobalDefault', () => {
  it('Basic', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <GlobalDefault />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
