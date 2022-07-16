/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, getByRole, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import { orchidLight } from '@tidy-ui/theme';
import { Message } from '../src';

describe('Message', () => {
  test('Default render', () => {
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
  test('Message with header', () => {
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
  test('Message with sharp label', () => {
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
  test('Message with no label', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message noLabel>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Message with major color', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message color="major">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Message with minor color', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message color="minor">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Message with neutral color', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message color="neutral">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Message with info color', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message color="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Message with success color', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message color="success">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Message with warning color', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message color="warning">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Message with danger color', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message color="danger">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Message with major outlined color', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message color="major" outlined>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Message with minor outlined color', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message color="minor" outlined>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Message with neutral outlined color', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message color="neutral" outlined>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Message with info outlined color', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message color="info" outlined>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Message with success outlined color', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message color="success" outlined>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Message with warning outlined color', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message color="warning" outlined>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Message with danger outlined color', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message color="danger" outlined>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Closable message', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message closable>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
    const { container } = tree;
    const closeButton = getByRole(container, 'close-btn');
    expect(closeButton).toBeVisible();
    fireEvent.click(closeButton);
    expect(closeButton).not.toBeVisible();
  });
  test('Closable message with an onClose callback', () => {
    const mockCallback = jest.fn(() => console.log('Mock Callback'));
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message closable onClose={mockCallback}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
    const { container } = tree;
    const closeButton = getByRole(container, 'close-btn');
    expect(closeButton).toBeVisible();
    fireEvent.click(closeButton);
    expect(closeButton).not.toBeVisible();
    expect(mockCallback).toBeCalled();
  });
  test('Auto close message', () => {
    jest.useFakeTimers();
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message duration={2000}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
    const { container } = tree;
    const message = getByRole(container, 'message');
    setTimeout(() => {
      expect(message).not.toBeVisible();
    }, 2500);
    jest.runAllTimers();
  });
  test('Auto close message with onClose callback', () => {
    jest.useFakeTimers();
    const mockCallback = jest.fn(() => console.log('Mock Callback'));
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message duration={2000} onClose={mockCallback}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
    const { container } = tree;
    const message = getByRole(container, 'message');
    setTimeout(() => {
      expect(mockCallback).toBeCalled();
      expect(message).not.toBeVisible();
    }, 2500);
    jest.runAllTimers();
  });
  test('Auto close message with null callback', () => {
    jest.useFakeTimers();
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Message duration={2000} onClose={undefined}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae ex minima aliquam. Perspiciatis, dolorem
          eaque. Ea, sit dolores quaerat eos quas culpa. Deserunt non obcaecati, quaerat fugiat ipsa aspernatur.
        </Message>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
    const { container } = tree;
    const message = getByRole(container, 'message');
    setTimeout(() => {
      expect(message).not.toBeVisible();
    }, 2500);
    jest.runAllTimers();
  });
});
