/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidLight } from '@tidy-ui/commons';
import { useWindow } from '../../src';

describe('useTheme', () => {
  it('Should return window', () => {
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
