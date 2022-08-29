import React from 'react';
import { styled } from '@tidy-ui/commons';
import { Tag, Text } from '@tidy-ui/presentation';
import { Divider } from '../src';

export default {
  component: Divider,
  title: 'Layout/Divider',
};

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const Column = styled.div`
  & > * {
    margin-bottom: 8px;
  }
`;

export const basic = () => (
  <Container>
    <Column>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione, id vero quibusdam aperiam officia
        veritatis recusandae magni accusamus rem quo cupiditate architecto hic culpa eum totam reprehenderit, libero
        veniam!
      </Text>
      <Divider density="thick" />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione, id vero quibusdam aperiam officia
        veritatis recusandae magni accusamus rem quo cupiditate architecto hic culpa eum totam reprehenderit, libero
        veniam!
      </Text>
      <Divider />
      <div style={{ display: 'flex' }}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi quam modi natus ipsum corrupti quis
          laudantium reiciendis error quas, voluptate eligendi possimus temporibus ipsam! Eveniet voluptates natus
          minima! Possimus.
        </Text>
        <Divider vertical />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis accusantium ab magni assumenda, iure corporis
          natus voluptas laborum error corrupti inventore hic aliquid, debitis adipisci necessitatibus repellendus
          dolores ratione architecto.
        </Text>
      </div>
    </Column>
  </Container>
);

export const variants = () => (
  <Container>
    <Column>
      <Text>color major</Text>
      <Divider tone="major" />
      <Text>thick density</Text>
      <Divider density="thick" />
      <Text>800 shade</Text>
      <Divider shade={800} />
      <Text>dashed style</Text>
      <Divider variant="dashed" />
    </Column>
  </Container>
);
