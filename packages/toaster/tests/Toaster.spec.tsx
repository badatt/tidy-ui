/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight } from '@tidy-ui/commons';
import { Toaster } from '../src';

describe('Toaster', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Toaster>basic</Toaster>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Toaster>basic</Toaster>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
