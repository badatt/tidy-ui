import React from 'react';
import { styled } from '@tidy-ui/commons';
import { Card } from '../src';

export default {
  component: Card,
  title: 'Presentation/Card',
};

const Container = styled.div`
  display: flex;
  gap: 16px;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.01071em;
  line-height: 1.43;
`;

const Column = styled.div`
  & > * {
    margin-bottom: 8px;
  }
`;

export const basic = () => (
  <Container>
    <Column>
      <Card>
        <Card.Header>Lorem ipsum dolor sit.</Card.Header>
        <Card.Body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est, neque
          deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
        </Card.Body>
        <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
      </Card>
      <Card sharp>
        <Card.Header>Lorem ipsum dolor sit.</Card.Header>
        <Card.Body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est, neque
          deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
        </Card.Body>
        <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
      </Card>
    </Column>
  </Container>
);

export const accents = () => (
  <Container>
    <Column>
      <Card accent="major">
        <Card.Header>Lorem ipsum dolor sit amet.</Card.Header>
        <Card.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis adipisci enim ipsam temporibus
          molestiae dolor veniam repellendus tempora. Sit consequuntur ratione quam. Dolor quo quis enim ipsum
          praesentium repudiandae.
        </Card.Body>
        <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
      </Card>
      <Card accent="minor">
        <Card.Header>Lorem ipsum dolor sit amet.</Card.Header>
        <Card.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis adipisci enim ipsam temporibus
          molestiae dolor veniam repellendus tempora. Sit consequuntur ratione quam. Dolor quo quis enim ipsum
          praesentium repudiandae.
        </Card.Body>
        <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
      </Card>
      <Card accent="info">
        <Card.Header>Lorem ipsum dolor sit amet.</Card.Header>
        <Card.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis adipisci enim ipsam temporibus
          molestiae dolor veniam repellendus tempora. Sit consequuntur ratione quam. Dolor quo quis enim ipsum
          praesentium repudiandae.
        </Card.Body>
        <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
      </Card>
      <Card accent="success">
        <Card.Header>Lorem ipsum dolor sit amet.</Card.Header>
        <Card.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis adipisci enim ipsam temporibus
          molestiae dolor veniam repellendus tempora. Sit consequuntur ratione quam. Dolor quo quis enim ipsum
          praesentium repudiandae.
        </Card.Body>
        <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
      </Card>
      <Card accent="warning">
        <Card.Header>Lorem ipsum dolor sit amet.</Card.Header>
        <Card.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis adipisci enim ipsam temporibus
          molestiae dolor veniam repellendus tempora. Sit consequuntur ratione quam. Dolor quo quis enim ipsum
          praesentium repudiandae.
        </Card.Body>
        <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
      </Card>
      <Card accent="danger">
        <Card.Header>Lorem ipsum dolor sit amet.</Card.Header>
        <Card.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis adipisci enim ipsam temporibus
          molestiae dolor veniam repellendus tempora. Sit consequuntur ratione quam. Dolor quo quis enim ipsum
          praesentium repudiandae.
        </Card.Body>
        <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
      </Card>
      <Card accent="neutral">
        <Card.Header>Lorem ipsum dolor sit amet.</Card.Header>
        <Card.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis adipisci enim ipsam temporibus
          molestiae dolor veniam repellendus tempora. Sit consequuntur ratione quam. Dolor quo quis enim ipsum
          praesentium repudiandae.
        </Card.Body>
        <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
      </Card>
    </Column>
  </Container>
);

export const linked = () => (
  <Container>
    <Column>
      <Card href="https://google.com">
        <Card.Header>Lorem ipsum dolor sit.</Card.Header>
        <Card.Body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est, neque
          deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
        </Card.Body>
        <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
      </Card>
    </Column>
    <Column>
      <Card>
        <Card.Header href="https://google.com">Lorem ipsum dolor sit.</Card.Header>
        <Card.Body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est, neque
          deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
        </Card.Body>
        <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
      </Card>
    </Column>
  </Container>
);

export const divided = () => (
  <Container>
    <Column>
      <Card>
        <Card.Header divided>Lorem ipsum dolor sit.</Card.Header>
        <Card.Body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est, neque
          deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
        </Card.Body>
        <Card.Footer divided>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
      </Card>
      <Card sharp>
        <Card.Header divided>Lorem ipsum dolor sit.</Card.Header>
        <Card.Body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est, neque
          deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
        </Card.Body>
        <Card.Footer divided>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
      </Card>
    </Column>
  </Container>
);
