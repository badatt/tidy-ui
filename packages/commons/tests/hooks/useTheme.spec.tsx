/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight } from '@tidy-ui/theme';
import { useTheme } from '../../src';

describe('useTheme', () => {
  it('Should return light theme props', () => {
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

  it('Should return dark theme props', () => {
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
