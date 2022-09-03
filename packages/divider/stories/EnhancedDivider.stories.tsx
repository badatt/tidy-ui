import React from 'react';
import { styled } from '@tidy-ui/commons';
import { Text } from '@tidy-ui/text';
import { Divider } from '../src';

export default {
  component: Divider,
  title: 'Layout/Divider/Enhanced',
};

const Container = styled.div`
  gap: 1rem;
`;

export const basic = () => (
  <Container>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione, id vero quibusdam aperiam officia
      veritatis recusandae magni accusamus rem quo cupiditate architecto hic culpa eum totam reprehenderit, libero
      veniam!
    </Text>
    <Divider.Enhanced justify="start">
      <Text v="caption">Section 1</Text>
    </Divider.Enhanced>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione, id vero quibusdam aperiam officia
      veritatis recusandae magni accusamus rem quo cupiditate architecto hic culpa eum totam reprehenderit, libero
      veniam!
    </Text>
    <Divider.Enhanced variant="dashed">
      <Text v="caption">Section 2</Text>
    </Divider.Enhanced>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione, id vero quibusdam aperiam officia
      veritatis recusandae magni accusamus rem quo cupiditate architecto hic culpa eum totam reprehenderit, libero
      veniam!
    </Text>
    <Divider.Enhanced justify="end">
      <Text v="caption">Section 3</Text>
    </Divider.Enhanced>
    <Text>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, nobis quasi, quis ea obcaecati quae recusandae
      voluptate, fugiat quod atque dolorem similique? Laboriosam sint assumenda eum suscipit rem enim ullam.
    </Text>
    <Divider.Enhanced />
  </Container>
);
