/**
 * @jest-environment jsdom
 */
import React from 'react';
import { act, cleanup, fireEvent, getByRole, getByTestId, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Code } from '../src';

const text = `import React from 'react';
import { TidyUiProvider, orchidLight, ... } from '@tidy-ui/commons;'

function App() {
  return <TidyUiProvider theme={orchidLight}>...</TidyUiProvider>;
}

export default App;
`;

afterEach(cleanup);

describe('Code', () => {
  beforeEach(() => {
    userEvent.setup();
    (navigator as any).permissions = {
      query: jest.fn().mockImplementationOnce(() => Promise.resolve({ state: 'granted' })),
    };
  });
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Code>{text}</Code>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Code>{text}</Code>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Without copy button', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Code canCopy={false}>{text}</Code>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Copy to clipboard with granted permission', async () => {
    const sample = `sample`;
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Code>{sample}</Code>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    const { container } = tree;
    await act(async () => {
      await userEvent.hover(getByRole(container, 'contentinfo'));
      const copyButton = getByTestId(container, 'copy-code-btn');
      fireEvent.click(copyButton);
    });
  });

  it('Copy to clipboard with prompt permission', async () => {
    const sample = `sample`;
    (navigator as any).permissions = {
      query: jest.fn().mockImplementationOnce(() => Promise.resolve({ state: 'prompt' })),
    };
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Code>{sample}</Code>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    const { container } = tree;
    await act(async () => {
      await userEvent.hover(getByRole(container, 'contentinfo'));
      const copyButton = getByTestId(container, 'copy-code-btn');
      fireEvent.click(copyButton);
    });
  });

  it('Copy success status', () => {
    const sample = `sample`;
    jest.useFakeTimers();
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Code>{sample}</Code>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    const { container } = tree;
    act(() => {
      userEvent.hover(getByRole(container, 'contentinfo'));
      jest.advanceTimersByTime(100);
      const copyButton = getByTestId(container, 'copy-code-btn');
      fireEvent.click(copyButton);
      jest.advanceTimersByTime(2000);
    });
    jest.runAllTimers();
  });

  it('Copy success status dark mode', () => {
    const sample = `sample`;
    jest.useFakeTimers();
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Code>{sample}</Code>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    const { container } = tree;
    act(() => {
      userEvent.hover(getByRole(container, 'contentinfo'));
      const copyButton = getByTestId(container, 'copy-code-btn');
      fireEvent.click(copyButton);
      jest.advanceTimersByTime(3000);
    });
    jest.runAllTimers();
  });

  describe('Empty value', () => {
    let consoleOutput: string[] = [];
    const mockedError = (output) => consoleOutput.push(output);
    beforeEach(() => (console.error = mockedError));
    it('Empty text value', () => {
      const tree = render(
        <TidyUiProvider theme={orchidLight}>
          <Code></Code>
        </TidyUiProvider>,
      );
      expect(tree).toMatchSnapshot();
      expect(consoleOutput[0]).toEqual(`Warning: Failed %s type: %s%s`);
    });
  });
});
