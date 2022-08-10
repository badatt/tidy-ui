/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidLight } from '@tidy-ui/theme';
import { TidyUiProvider } from '../../src';

describe('TidyUiProvider', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <div>Hello</div>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
