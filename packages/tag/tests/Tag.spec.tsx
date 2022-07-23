/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import { orchidLight } from '@tidy-ui/theme';
import { Tag } from '../src';

describe('Tag', () => {
  test('Default render', () => {
    const tree = render(
        <ThemeProvider theme={orchidLight}>
          <Tag />
        </ThemeProvider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
