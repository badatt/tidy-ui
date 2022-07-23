/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import { orchidLight, orchidDark } from '@tidy-ui/theme';
import { useTheme } from '../../src';

describe('useTheme', () => {
  test('Should return light theme props', () => {
    const TestComponent = () => {
      const theme = useTheme();
      return (
        <>
          <div id="is-dark-val">{`${theme.isDark}`}</div>
          <div id="name-val">{theme.name}</div>
        </>
      );
    };
    const { container } = render(
      <ThemeProvider theme={orchidLight}>
        <TestComponent />
      </ThemeProvider>,
    );
    expect(container.querySelector('#is-dark-val')?.textContent).toEqual('false');
    expect(container.querySelector('#name-val')?.textContent).toEqual('Orchid Light');
  });

  test('Should return dark theme props', () => {
    const TestComponent = () => {
      const theme = useTheme();
      return (
        <>
          <div id="is-dark-val">{`${theme.isDark}`}</div>
          <div id="name-val">{theme.name}</div>
        </>
      );
    };
    const { container } = render(
      <ThemeProvider theme={orchidDark}>
        <TestComponent />
      </ThemeProvider>,
    );
    expect(container.querySelector('#is-dark-val')?.textContent).toEqual('true');
    expect(container.querySelector('#name-val')?.textContent).toEqual('Orchid Dark');
  });
});
