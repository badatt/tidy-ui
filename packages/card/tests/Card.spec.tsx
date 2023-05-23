/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Tone } from '../../commons/src';
import { Card } from '../src';

const text = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et totam eius ducimus unde voluptatibus asperiores fuga
      accusantium voluptates non nam sit beatae, modi quas animi autem aliquid. Exercitationem, veniam sapiente!
    `;

afterEach(cleanup);
const originalError = console.error;

describe('Card', () => {
  afterEach(() => (console.error = originalError));
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Card>{text}</Card>
        <Card>
          <Card.Header>Lorem ipsum dolor sit.</Card.Header>
          <Card.Body>{text}</Card.Body>
          <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
        </Card>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Basic render in dark mode', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Card>{text}</Card>
        <Card>
          <Card.Header>Lorem ipsum dolor sit.</Card.Header>
          <Card.Body>{text}</Card.Body>
          <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
        </Card>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Card with sharp corners', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Card isSharp>{text}</Card>
        <Card isSharp>
          <Card.Header>Lorem ipsum dolor sit.</Card.Header>
          <Card.Body>{text}</Card.Body>
          <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
        </Card>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('card with link', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Card href="https://google.com">{text}</Card>
        <Card>
          <Card.Header href="https://google.com">Lorem ipsum dolor sit.</Card.Header>
          <Card.Body>{text}</Card.Body>
          <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
        </Card>
        <Card href="https://google.com">
          <Card.Header>Lorem ipsum dolor sit.</Card.Header>
          <Card.Body>{text}</Card.Body>
          <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
        </Card>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('card with link in dark mode', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Card href="https://google.com">{text}</Card>
        <Card>
          <Card.Header href="https://google.com">Lorem ipsum dolor sit.</Card.Header>
          <Card.Body>{text}</Card.Body>
          <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
        </Card>
        <Card href="https://google.com">
          <Card.Header>Lorem ipsum dolor sit.</Card.Header>
          <Card.Body>{text}</Card.Body>
          <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
        </Card>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Card with accent variants', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Card accent={Tone[v]} key={i}>
              {text}
            </Card>
          ))}
        {Object.values(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Card accent={Tone[v]} key={i} accentPosition="left">
              <Card.Header>Lorem ipsum dolor sit.</Card.Header>
              <Card.Body>{text}</Card.Body>
              <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
            </Card>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Card divided', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Card>
          <Card.Header isDivided>Lorem ipsum dolor sit.</Card.Header>
          <Card.Body>{text}</Card.Body>
          <Card.Footer isDivided>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
        </Card>
        <Card isSharp>
          <Card.Header isDivided>Lorem ipsum dolor sit.</Card.Header>
          <Card.Body>{text}</Card.Body>
          <Card.Footer isDivided>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
        </Card>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('With wrapper element', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Card ele={<div />}>{text}</Card>
        <Card>
          <Card.Header ele={<div />} isDivided>
            Lorem ipsum dolor sit.
          </Card.Header>
          <Card.Body ele={<div />}>{text}</Card.Body>
          <Card.Footer ele={<div />} isDivided>
            Lorem ipsum dolor sit amet consectetur.
          </Card.Footer>
        </Card>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom dimensions', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Card height="9rem">{text}</Card>
        <Card height="15rem">
          <Card.Header>Lorem ipsum dolor sit.</Card.Header>
          <Card.Body>{text}</Card.Body>
          <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
        </Card>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
