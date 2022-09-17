/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '@tidy-ui/commons';
import { Tone } from '@tidy-ui/types';
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
        <Card.Main>
          <Card.Header>Lorem ipsum dolor sit.</Card.Header>
          <Card.Body>{text}</Card.Body>
          <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
        </Card.Main>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Basic render in dark mode', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Card>{text}</Card>
        <Card.Main>
          <Card.Header>Lorem ipsum dolor sit.</Card.Header>
          <Card.Body>{text}</Card.Body>
          <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
        </Card.Main>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Card with sharp corners', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Card sharp>{text}</Card>
        <Card.Main sharp>
          <Card.Header>Lorem ipsum dolor sit.</Card.Header>
          <Card.Body>{text}</Card.Body>
          <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
        </Card.Main>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('card with link', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Card href="https://google.com">{text}</Card>
        <Card.Main>
          <Card.Header href="https://google.com">Lorem ipsum dolor sit.</Card.Header>
          <Card.Body>{text}</Card.Body>
          <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
        </Card.Main>
        <Card.Main href="https://google.com">
          <Card.Header>Lorem ipsum dolor sit.</Card.Header>
          <Card.Body>{text}</Card.Body>
          <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
        </Card.Main>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('card with link in dark mode', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Card href="https://google.com">{text}</Card>
        <Card.Main>
          <Card.Header href="https://google.com">Lorem ipsum dolor sit.</Card.Header>
          <Card.Body>{text}</Card.Body>
          <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
        </Card.Main>
        <Card.Main href="https://google.com">
          <Card.Header>Lorem ipsum dolor sit.</Card.Header>
          <Card.Body>{text}</Card.Body>
          <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
        </Card.Main>
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
            <Card.Main accent={Tone[v]} key={i} accentPosition="left">
              <Card.Header>Lorem ipsum dolor sit.</Card.Header>
              <Card.Body>{text}</Card.Body>
              <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
            </Card.Main>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Card divided', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Card.Main>
          <Card.Header divided>Lorem ipsum dolor sit.</Card.Header>
          <Card.Body>{text}</Card.Body>
          <Card.Footer divided>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
        </Card.Main>
        <Card.Main sharp>
          <Card.Header divided>Lorem ipsum dolor sit.</Card.Header>
          <Card.Body>{text}</Card.Body>
          <Card.Footer divided>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
        </Card.Main>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('With wrapper element', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Card ele={<div />}>{text}</Card>
        <Card.Main>
          <Card.Header ele={<div />} divided>
            Lorem ipsum dolor sit.
          </Card.Header>
          <Card.Body ele={<div />}>{text}</Card.Body>
          <Card.Footer ele={<div />} divided>
            Lorem ipsum dolor sit amet consectetur.
          </Card.Footer>
        </Card.Main>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom dimensions', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Card h="9rem">{text}</Card>
        <Card.Main h="15rem">
          <Card.Header>Lorem ipsum dolor sit.</Card.Header>
          <Card.Body>{text}</Card.Body>
          <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
        </Card.Main>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  describe('Invalid text children for CardMain', () => {
    let consoleOutput: string[] = [];
    const mockedError = (output) => consoleOutput.push(output);
    beforeEach(() => (console.error = mockedError));

    it('Invalid text children for CardMain', () => {
      const tree = render(
        <TidyUiProvider theme={orchidLight}>
          <Card.Main>{text}</Card.Main>
        </TidyUiProvider>,
      );
      expect(tree).toMatchSnapshot();
      expect(consoleOutput[0]).toEqual(`Warning: Failed %s type: %s%s`);
    });
  });

  describe('Invalid children for CardMain', () => {
    let consoleOutput: string[] = [];
    const mockedError = (output) => consoleOutput.push(output);
    beforeEach(() => (console.error = mockedError));

    it('Invalid children for CardMain', () => {
      const tree = render(
        <TidyUiProvider theme={orchidLight}>
          <Card.Main>
            <div>{text}</div>
            <div>{text}</div>
          </Card.Main>
        </TidyUiProvider>,
      );
      expect(tree).toMatchSnapshot();
      expect(consoleOutput[0]).toEqual(`Warning: Failed %s type: %s%s`);
      console.error = originalError;
    });
  });
});
