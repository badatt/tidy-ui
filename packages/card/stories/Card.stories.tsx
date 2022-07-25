import React from 'react';
import { styled } from '@tidy-ui/theme';
import { Card, CardBody, CardFooter, CardHeader } from '../src';

export default {
  component: Card,
  title: 'Card',
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
        <CardHeader separated>Lorem ipsum dolor sit.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est, neque
          deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
        </CardBody>
        <CardFooter separated>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
    </Column>
    <Column>
      <Card>
        <CardHeader separated>Lorem ipsum dolor sit.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est, neque
          deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
        </CardBody>
        <CardFooter>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
    </Column>
    <Column>
      <Card>
        <CardHeader>Lorem ipsum dolor sit.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est, neque
          deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
        </CardBody>
        <CardFooter separated>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
    </Column>
    <Column>
      <Card>
        <CardHeader>Lorem ipsum dolor sit.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est, neque
          deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
        </CardBody>
        <CardFooter>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
    </Column>
  </Container>
);

export const accents = () => (
  <Container>
    <Column>
      <Card accent="major">
        <CardHeader separated>Lorem ipsum dolor sit amet.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis adipisci enim ipsam temporibus
          molestiae dolor veniam repellendus tempora. Sit consequuntur ratione quam. Dolor quo quis enim ipsum
          praesentium repudiandae.
        </CardBody>
        <CardFooter separated>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
      <Card accent="minor">
        <CardHeader separated>Lorem ipsum dolor sit amet.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis adipisci enim ipsam temporibus
          molestiae dolor veniam repellendus tempora. Sit consequuntur ratione quam. Dolor quo quis enim ipsum
          praesentium repudiandae.
        </CardBody>
        <CardFooter separated>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
      <Card accent="info">
        <CardHeader separated>Lorem ipsum dolor sit amet.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis adipisci enim ipsam temporibus
          molestiae dolor veniam repellendus tempora. Sit consequuntur ratione quam. Dolor quo quis enim ipsum
          praesentium repudiandae.
        </CardBody>
        <CardFooter separated>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
    </Column>
    <Column>
      <Card accent="success">
        <CardHeader separated>Lorem ipsum dolor sit amet.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis adipisci enim ipsam temporibus
          molestiae dolor veniam repellendus tempora. Sit consequuntur ratione quam. Dolor quo quis enim ipsum
          praesentium repudiandae.
        </CardBody>
        <CardFooter separated>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
      <Card accent="warning">
        <CardHeader separated>Lorem ipsum dolor sit amet.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis adipisci enim ipsam temporibus
          molestiae dolor veniam repellendus tempora. Sit consequuntur ratione quam. Dolor quo quis enim ipsum
          praesentium repudiandae.
        </CardBody>
        <CardFooter separated>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
      <Card accent="danger">
        <CardHeader separated>Lorem ipsum dolor sit amet.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis adipisci enim ipsam temporibus
          molestiae dolor veniam repellendus tempora. Sit consequuntur ratione quam. Dolor quo quis enim ipsum
          praesentium repudiandae.
        </CardBody>
        <CardFooter separated>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
    </Column>
    <Column>
      <Card accent="neutral">
        <CardHeader separated>Lorem ipsum dolor sit amet.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis adipisci enim ipsam temporibus
          molestiae dolor veniam repellendus tempora. Sit consequuntur ratione quam. Dolor quo quis enim ipsum
          praesentium repudiandae.
        </CardBody>
        <CardFooter separated>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
    </Column>
  </Container>
);

export const linked = () => (
  <Container>
    <Column>
      <Card href="https://google.com">
        <CardHeader>Lorem ipsum dolor sit.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est, neque
          deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
        </CardBody>
        <CardFooter>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
    </Column>
    <Column>
      <Card>
        <CardHeader href="https://google.com">Lorem ipsum dolor sit.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est, neque
          deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
        </CardBody>
        <CardFooter>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
    </Column>
  </Container>
);
