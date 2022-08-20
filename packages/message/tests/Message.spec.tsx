/**
 * @jest-environment jsdom
 */
import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, getByRole, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight } from '@tidy-ui/commons';
import { TTone } from '@tidy-ui/types';
import { Message } from '../src';

const colors = ['major', 'minor', 'neutral', 'info', 'success', 'warning', 'danger'];

describe('Message', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Basic render in dark mode', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Message>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Message with all color variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {colors.map((c) => (
          <Message tone={c as TTone} key={c}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
            eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
          </Message>
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Message in dark mode with all color variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        {colors.map((c) => (
          <Message tone={c as TTone} key={c}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
            eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
          </Message>
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Message stretched to full width', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message stretched>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Message with close button', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message closable>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Message with header', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message header="Lorem ipsum dolor sit amet consectetur adipisicing elit">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Message with sharp label', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message sharp>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Message with no label', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message withoutLabel>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Closable message without any callback', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Message closable outlined>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
    const { container } = tree;
    const closeButton = getByRole(container, 'button');
    expect(closeButton).toBeVisible();
    act(() => {
      fireEvent.click(closeButton);
    });
    expect(closeButton).not.toBeVisible();
  });
  it('Closable message with an onClose callback', () => {
    const mockCallback = jest.fn();
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message closable onClose={mockCallback} outlined>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
    const { container } = tree;
    const closeButton = getByRole(container, 'button');
    expect(closeButton).toBeVisible();
    act(() => {
      fireEvent.click(closeButton);
    });
    expect(closeButton).not.toBeVisible();
    expect(mockCallback).toBeCalled();
  });
  it('Closable message with duration and onClose callback', () => {
    jest.useFakeTimers();
    const mockCallback = jest.fn();
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message closable duration={2000} onClose={mockCallback} outlined>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
    setTimeout(() => {
      expect(mockCallback).toBeCalled();
    }, 2500);
    jest.runAllTimers();
  });
});
