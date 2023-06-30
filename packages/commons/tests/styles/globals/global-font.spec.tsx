/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { GlobalFont, orchidLight, TidyUiProvider } from '../../../src';

describe('GlobalFont', () => {
  it('Basic', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <GlobalFont />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
