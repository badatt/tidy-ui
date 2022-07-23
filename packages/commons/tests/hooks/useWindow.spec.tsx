/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import { orchidLight, orchidDark } from '@tidy-ui/theme';
import { useWindow } from '../../src';

describe('useTheme', () => {
  test('Should return window', () => {
    const TestComponent = () => {
      const win = useWindow();
      return (
        <>
          <div id="dim-val">
            {win.width} x {win.height}
          </div>
        </>
      );
    };
    const { container } = render(
      <ThemeProvider theme={orchidLight}>
        <TestComponent />
      </ThemeProvider>,
    );
    expect(container.querySelector('#dim-val')?.textContent).toEqual('1024 x 768');
  });
});
