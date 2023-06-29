/**
 * @jest-environment jsdom
 */
import React from 'react';
import { act, cleanup, fireEvent, getByRole, getByTestId, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Code } from '../src';

afterEach(cleanup);

describe('Code', () => {
  it('Basic render', () => {
    const sample = `sample`;
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Code>{sample}</Code>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dark mode basic render', () => {
    const sample = `sample`;
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Code>{sample}</Code>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Without copy button', () => {
    const sample = `sample`;
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Code canCopy={false}>{sample}</Code>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Copy to clipboard with granted permission', async () => {
    jest.useFakeTimers();
    userEvent.setup();
    (navigator as any).permissions = {
      query: jest.fn().mockImplementationOnce(() => Promise.resolve({ state: 'granted' })),
    };
    const sample = `sample`;
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Code>{sample}</Code>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    await act(async () => {
      const copyButton = screen.getByRole('button', { hidden: true });
      fireEvent.click(copyButton);
      jest.advanceTimersByTime(2000);
    });
    jest.runAllTimers();
  });

  it('Setting undef ref code block', async () => {
    userEvent.setup();
    (navigator as any).permissions = {
      query: jest.fn().mockImplementationOnce(() => Promise.resolve({ state: 'prompt' })),
    };
    const sample = undefined;
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Code>{sample}</Code>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    await act(async () => {
      const copyButton = screen.getByRole('button', { hidden: true });
      fireEvent.click(copyButton);
    });
  });
});
