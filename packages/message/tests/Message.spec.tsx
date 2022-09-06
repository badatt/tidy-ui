/**
 * @jest-environment jsdom
 */
import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, getByRole, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '@tidy-ui/commons';
import { Tone } from '@tidy-ui/types';
import { Message } from '../src';

const text = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia nostrum voluptatibus distinctio at sapiente
      ratione blanditiis cum quam fugit commodi odit, hic eius itaque exercitationem vitae voluptates modi accusamus
      eaque!`;

describe('Message', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Message>{text}</Message>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Basic render in dark mode', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Message>{text}</Message>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Message with all color variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((c) => (
            <Message tone={Tone[c]} key={c}>
              {text}
            </Message>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Message in dark mode with all color variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        {Object.values(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((c, i) => (
            <Message tone={Tone[c]} key={i}>
              {text}
            </Message>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Message stretched to full width', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Message stretched>{text}</Message>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Message with close button', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Message closable>{text}</Message>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Message with custom element', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Message ele={<div style={{ display: 'flex' }} />}>{text}</Message>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Message with sharp label', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Message sharp>{text}</Message>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Message with no label', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Message withoutLabel>{text}</Message>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Closable message without any callback', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Message closable outlined>
          {text}
        </Message>
      </TidyUiProvider>,
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
      <TidyUiProvider theme={orchidLight}>
        <Message closable onClose={mockCallback} outlined>
          {text}
        </Message>
      </TidyUiProvider>,
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
      <TidyUiProvider theme={orchidLight}>
        <Message closable duration={2000} onClose={mockCallback} outlined>
          {text}
        </Message>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    setTimeout(() => {
      expect(mockCallback).toBeCalled();
    }, 2500);
    jest.runAllTimers();
  });
});
