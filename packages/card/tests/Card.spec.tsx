/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Tone } from '../../types/src';
import { Card, CardBody, CardFooter, CardHeader } from '../src';

const text = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et totam eius ducimus unde voluptatibus asperiores fuga
      accusantium voluptates non nam sit beatae, modi quas animi autem aliquid. Exercitationem, veniam sapiente!
    `;

afterEach(cleanup);

describe('Card', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Card>{text}</Card>
        <Card>
          <CardHeader>Lorem ipsum dolor sit.</CardHeader>
          <CardBody>{text}</CardBody>
          <CardFooter>Lorem ipsum dolor sit amet consectetur.</CardFooter>
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
          <CardHeader>Lorem ipsum dolor sit.</CardHeader>
          <CardBody>{text}</CardBody>
          <CardFooter>Lorem ipsum dolor sit amet consectetur.</CardFooter>
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
          <CardHeader>Lorem ipsum dolor sit.</CardHeader>
          <CardBody>{text}</CardBody>
          <CardFooter>Lorem ipsum dolor sit amet consectetur.</CardFooter>
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
          <CardHeader href="https://google.com">Lorem ipsum dolor sit.</CardHeader>
          <CardBody>{text}</CardBody>
          <CardFooter>Lorem ipsum dolor sit amet consectetur.</CardFooter>
        </Card>
        <Card href="https://google.com">
          <CardHeader>Lorem ipsum dolor sit.</CardHeader>
          <CardBody>{text}</CardBody>
          <CardFooter>Lorem ipsum dolor sit amet consectetur.</CardFooter>
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
          <CardHeader href="https://google.com">Lorem ipsum dolor sit.</CardHeader>
          <CardBody>{text}</CardBody>
          <CardFooter>Lorem ipsum dolor sit amet consectetur.</CardFooter>
        </Card>
        <Card href="https://google.com">
          <CardHeader>Lorem ipsum dolor sit.</CardHeader>
          <CardBody>{text}</CardBody>
          <CardFooter>Lorem ipsum dolor sit amet consectetur.</CardFooter>
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
              <CardHeader>Lorem ipsum dolor sit.</CardHeader>
              <CardBody>{text}</CardBody>
              <CardFooter>Lorem ipsum dolor sit amet consectetur.</CardFooter>
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
          <CardHeader isDivided>Lorem ipsum dolor sit.</CardHeader>
          <CardBody>{text}</CardBody>
          <CardFooter isDivided>Lorem ipsum dolor sit amet consectetur.</CardFooter>
        </Card>
        <Card isSharp>
          <CardHeader isDivided>Lorem ipsum dolor sit.</CardHeader>
          <CardBody>{text}</CardBody>
          <CardFooter isDivided>Lorem ipsum dolor sit amet consectetur.</CardFooter>
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
          <CardHeader ele={<div />} isDivided>
            Lorem ipsum dolor sit.
          </CardHeader>
          <CardBody ele={<div />}>{text}</CardBody>
          <CardFooter ele={<div />} isDivided>
            Lorem ipsum dolor sit amet consectetur.
          </CardFooter>
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
          <CardHeader>Lorem ipsum dolor sit.</CardHeader>
          <CardBody>{text}</CardBody>
          <CardFooter>Lorem ipsum dolor sit amet consectetur.</CardFooter>
        </Card>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
