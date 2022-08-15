import React from 'react';
import { styled } from '@tidy-ui/commons';
import { Text } from '@tidy-ui/presentation';
import { Divider } from '../src';

export default {
  component: Divider,
  title: 'Layout/Divider/Divider',
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
      <Divider />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione, id vero quibusdam aperiam officia
        veritatis recusandae magni accusamus rem quo cupiditate architecto hic culpa eum totam reprehenderit, libero
        veniam!
      </Text>
    </Column>
  </Container>
);

export const variants = () => (
  <Container>
    <Column>
      <Text>color major</Text>
      <Divider withColor="major" />
      <Text>thick density</Text>
      <Divider withDensity="thick" />
      <Text>800 shade</Text>
      <Divider withShade={800} />
      <Text>dashed style</Text>
      <Divider withStyle="dashed" />
    </Column>
  </Container>
);
