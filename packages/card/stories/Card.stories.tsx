import React from 'react';
import { styled } from '@tidy-ui/commons';
import { Card } from '../src';
import { Tone } from '@tidy-ui/types';

export default {
  component: Card,
  title: 'Presentation/Card',
};

const Container = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

const text = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et totam eius ducimus unde voluptatibus asperiores fuga
      accusantium voluptates non nam sit beatae, modi quas animi autem aliquid. Exercitationem, veniam sapiente!
    `;

export const basic = () => (
  <Container>
    <Card>{text}</Card>
    <Card.Main>
      <Card.Header>Lorem ipsum dolor sit.</Card.Header>
      <Card.Body>{text}</Card.Body>
      <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
    </Card.Main>
  </Container>
);

export const sharp = () => (
  <Container>
    <Card sharp>{text}</Card>
    <Card.Main sharp>
      <Card.Header>Lorem ipsum dolor sit.</Card.Header>
      <Card.Body>{text}</Card.Body>
      <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
    </Card.Main>
  </Container>
);

export const accents = () => (
  <>
    <Container>
      {Object.values(Tone)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Card accent={Tone[v]} key={i}>
            {text}
          </Card>
        ))}
    </Container>
    <Container>
      {Object.values(Tone)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Card.Main accent={Tone[v]} key={i} accentPosition="left">
            <Card.Header>Lorem ipsum dolor sit.</Card.Header>
            <Card.Body>{text}</Card.Body>
            <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
          </Card.Main>
        ))}
    </Container>
  </>
);

export const linked = () => (
  <Container>
    <Card href="https://google.com">{text}</Card>
    <Card.Main>
      <Card.Header href="https://google.com">Lorem ipsum dolor sit.</Card.Header>
      <Card.Body>{text}</Card.Body>
      <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
    </Card.Main>
  </Container>
);

export const divided = () => (
  <Container>
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
  </Container>
);

export const customElement = () => (
  <Container>
    <Card ele={<div style={{ display: 'flex' }} />}>
      <div>{text}</div>
      <div>{text}</div>
    </Card>
    <Card.Main>
      <Card.Header>Lorem ipsum dolor sit.</Card.Header>
      <Card.Body ele={<div style={{ display: 'flex' }} />}>
        <div>{text}</div>
        <div>{text}</div>
      </Card.Body>
      <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
    </Card.Main>
  </Container>
);
