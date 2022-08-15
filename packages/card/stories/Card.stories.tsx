import React from 'react';
import { styled } from '@tidy-ui/commons';
import { Card, CardBody, CardFooter, CardHeader } from '../src';

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
        <CardHeader>Lorem ipsum dolor sit.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est, neque
          deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
        </CardBody>
        <CardFooter>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
      <Card isSharp>
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

export const accentVariants = () => (
  <Container>
    <Column>
      <Card withAccent="major">
        <CardHeader>Lorem ipsum dolor sit amet.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis adipisci enim ipsam temporibus
          molestiae dolor veniam repellendus tempora. Sit consequuntur ratione quam. Dolor quo quis enim ipsum
          praesentium repudiandae.
        </CardBody>
        <CardFooter>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
      <Card withAccent="minor">
        <CardHeader>Lorem ipsum dolor sit amet.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis adipisci enim ipsam temporibus
          molestiae dolor veniam repellendus tempora. Sit consequuntur ratione quam. Dolor quo quis enim ipsum
          praesentium repudiandae.
        </CardBody>
        <CardFooter>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
      <Card withAccent="info">
        <CardHeader>Lorem ipsum dolor sit amet.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis adipisci enim ipsam temporibus
          molestiae dolor veniam repellendus tempora. Sit consequuntur ratione quam. Dolor quo quis enim ipsum
          praesentium repudiandae.
        </CardBody>
        <CardFooter>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
      <Card withAccent="success">
        <CardHeader>Lorem ipsum dolor sit amet.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis adipisci enim ipsam temporibus
          molestiae dolor veniam repellendus tempora. Sit consequuntur ratione quam. Dolor quo quis enim ipsum
          praesentium repudiandae.
        </CardBody>
        <CardFooter>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
      <Card withAccent="warning">
        <CardHeader>Lorem ipsum dolor sit amet.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis adipisci enim ipsam temporibus
          molestiae dolor veniam repellendus tempora. Sit consequuntur ratione quam. Dolor quo quis enim ipsum
          praesentium repudiandae.
        </CardBody>
        <CardFooter>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
      <Card withAccent="danger">
        <CardHeader>Lorem ipsum dolor sit amet.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis adipisci enim ipsam temporibus
          molestiae dolor veniam repellendus tempora. Sit consequuntur ratione quam. Dolor quo quis enim ipsum
          praesentium repudiandae.
        </CardBody>
        <CardFooter>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
      <Card withAccent="neutral">
        <CardHeader>Lorem ipsum dolor sit amet.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis adipisci enim ipsam temporibus
          molestiae dolor veniam repellendus tempora. Sit consequuntur ratione quam. Dolor quo quis enim ipsum
          praesentium repudiandae.
        </CardBody>
        <CardFooter>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
    </Column>
  </Container>
);

export const linked = () => (
  <Container>
    <Column>
      <Card withHref="https://google.com">
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
        <CardHeader withHref="https://google.com">Lorem ipsum dolor sit.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est, neque
          deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
        </CardBody>
        <CardFooter>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
    </Column>
  </Container>
);

export const divided = () => (
  <Container>
    <Column>
      <Card>
        <CardHeader isDivided>Lorem ipsum dolor sit.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est, neque
          deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
        </CardBody>
        <CardFooter isDivided>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
      <Card isSharp>
        <CardHeader isDivided>Lorem ipsum dolor sit.</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est, neque
          deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
        </CardBody>
        <CardFooter isDivided>Lorem ipsum dolor sit amet consectetur.</CardFooter>
      </Card>
    </Column>
  </Container>
);
