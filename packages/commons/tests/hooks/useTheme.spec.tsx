/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider, useTheme } from '../../src';
import { act } from 'react-dom/test-utils';

describe('useTheme', () => {
  it('Should return light theme props', () => {
    const TestComponent = () => {
      const { theme } = useTheme();
      return (
        <>
          <div id="is-dark-val">{`${theme.isDark}`}</div>
          <div id="name-val">{theme.name}</div>
        </>
      );
    };
    const { container } = render(
      <TidyUiProvider theme={orchidLight}>
        <TestComponent />
      </TidyUiProvider>,
    );
    expect(container.querySelector('#is-dark-val')?.textContent).toEqual('false');
    expect(container.querySelector('#name-val')?.textContent).toEqual('Orchid Light');
  });

  it('Should return dark theme props', () => {
    const TestComponent = () => {
      const { theme } = useTheme();
      return (
        <>
          <div id="is-dark-val">{`${theme.isDark}`}</div>
          <div id="name-val">{theme.name}</div>
        </>
      );
    };
    const { container } = render(
      <TidyUiProvider theme={orchidDark}>
        <TestComponent />
      </TidyUiProvider>,
    );
    expect(container.querySelector('#is-dark-val')?.textContent).toEqual('true');
    expect(container.querySelector('#name-val')?.textContent).toEqual('Orchid Dark');
  });

  it('Should change theme', () => {
    const TestComponent = () => {
      const { changeTheme, theme } = useTheme();
      return (
        <>
          <div data-testid="is-dark-val">{`${theme.isDark}`}</div>
          <div data-testid="name-val">{theme.name}</div>
          <button
            data-testid="change-theme-btn"
            type="button"
            onClick={() => {
              changeTheme(orchidLight);
            }}
          >
            Change Theme
          </button>
        </>
      );
    };
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <TestComponent />
      </TidyUiProvider>,
    );
    expect(tree.getByTestId('is-dark-val')?.textContent).toEqual('true');
    expect(tree.getByTestId('name-val')?.textContent).toEqual('Orchid Dark');
    const themeChangeBtn = tree.getByTestId('change-theme-btn');
    fireEvent.click(themeChangeBtn);
    expect(tree.getByTestId('is-dark-val')?.textContent).toEqual('false');
    expect(tree.getByTestId('name-val')?.textContent).toEqual('Orchid Light');
  });
});
