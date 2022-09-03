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

export const basic = () => (
  <Container>
    <Card>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et totam eius ducimus unde voluptatibus asperiores fuga
      accusantium voluptates non nam sit beatae, modi quas animi autem aliquid. Exercitationem, veniam sapiente!
    </Card>
    <Card.Main>
      <Card.Header>Lorem ipsum dolor sit.</Card.Header>
      <Card.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est, neque
        deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
      </Card.Body>
      <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
    </Card.Main>
  </Container>
);

export const sharp = () => (
  <Container>
    <Card sharp>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni unde ad aspernatur iusto consequatur atque aperiam
      itaque, nulla ratione nobis quae maiores dicta possimus incidunt nesciunt minima accusamus cum aliquam?
    </Card>
    <Card.Main sharp>
      <Card.Header>Lorem ipsum dolor sit.</Card.Header>
      <Card.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est, neque
        deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
      </Card.Body>
      <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
    </Card.Main>
  </Container>
);

export const accents = () => (
  <>
    <Container>
      {Object.values(Tone).map((v, i) => (
        <Card accent={v} key={i}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus culpa odit excepturi iure accusamus? Ullam
          quia, quasi dignissimos expedita laudantium perferendis consectetur animi error adipisci, dolore ea voluptatem
          necessitatibus eligendi?
        </Card>
      ))}
    </Container>
    <Container>
      {Object.values(Tone).map((v, i) => (
        <Card.Main accent={v} key={i} accentPosition="left">
          <Card.Header>Lorem ipsum dolor sit.</Card.Header>
          <Card.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est,
            neque deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
          </Card.Body>
          <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
        </Card.Main>
      ))}
    </Container>
  </>
);

export const linked = () => (
  <Container>
    <Card href="https://google.com">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et aperiam fugit ad doloremque architecto qui
      cupiditate? Exercitationem deleniti repellat sint illum veniam, maxime odit voluptatibus culpa iste. Accusantium,
      placeat illo!
    </Card>
    <Card.Main>
      <Card.Header href="https://google.com">Lorem ipsum dolor sit.</Card.Header>
      <Card.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est, neque
        deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
      </Card.Body>
      <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
    </Card.Main>
  </Container>
);

export const divided = () => (
  <Container>
    <Card.Main>
      <Card.Header divided>Lorem ipsum dolor sit.</Card.Header>
      <Card.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nam assumenda pariatur reiciendis deleniti
        libero ipsum! Eum tenetur maxime ratione obcaecati distinctio, odio mollitia provident optio debitis magni,
        fugiat consequuntur.
      </Card.Body>
      <Card.Footer divided>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
    </Card.Main>
    <Card.Main sharp>
      <Card.Header divided>Lorem ipsum dolor sit.</Card.Header>
      <Card.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est, neque
        deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
      </Card.Body>
      <Card.Footer divided>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
    </Card.Main>
  </Container>
);
