/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { GlobalResetStyle, orchidLight, TidyUiProvider } from '../../../src';

describe('GlobalReset', () => {
  it('Basic', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <GlobalResetStyle />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
