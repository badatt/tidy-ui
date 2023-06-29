/**
 * @jest-environment jsdom
 */
import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Tone } from '../../commons/src';
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
            <Message tone={Tone[c]} key={c}>
              {text}
            </Message>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Message with all color filled variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((c) => (
            <Message tone={Tone[c]} key={c} isFilled>
              {text}
            </Message>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Message with all color filled variants dark mode', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        {Object.values(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((c) => (
            <Message tone={Tone[c]} key={c} isFilled>
              {text}
            </Message>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Message fit to content only', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Message isStretched={false}>{text}</Message>
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
        <Message ele={<div style={{ display: 'flex' }} />} label="Label">
          {text}
        </Message>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Message with sharp label', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Message isSharp>{text}</Message>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Message with no label', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Message hasLabel={false}>{text}</Message>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Closable message without any callback', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Message closable>{text}</Message>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    act(() => {
      const closeButton = screen.getByRole('button', { hidden: true });
      fireEvent.click(closeButton);
    });
  });

  it('Closable message without any callback filled', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Message closable isFilled>
          {text}
        </Message>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    act(() => {
      const closeButton = screen.getByRole('button', { hidden: true });
      fireEvent.click(closeButton);
    });
  });

  it('Closable message with an onClose callback', () => {
    const mockCallback = jest.fn();
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Message closable onClose={mockCallback}>
          {text}
        </Message>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    act(() => {
      const closeButton = screen.getByRole('button', { hidden: true });
      fireEvent.click(closeButton);
    });
    expect(mockCallback).toBeCalled();
  });
});
