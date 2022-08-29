import React from 'react';
import { Text } from '@tidy-ui/text';
import { styled } from '@tidy-ui/commons';
import { Panel } from '../src';

export default {
  component: Panel,
  title: 'Presentation/Panel/Panel',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const basic = () => (
  <Container>
    <Panel>
      <Panel.Header>
        <Text v="h6">Lorem ipsum dolor sit, amet consectetur adipisicing elit</Text>
      </Panel.Header>
      <Panel.Body>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam amet pariatur ducimus exercitationem
          quos rem vel nulla nostrum soluta? Repellat sit quam vero! Recusandae placeat adipisci quo qui odit!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quasi explicabo id amet sed labore, ex
          cumque repellendus inventore quas commodi at quis aspernatur libero voluptate maiores alias ipsum ducimus!
        </Text>
      </Panel.Body>
    </Panel>
    <Panel expanded>
      <Panel.Header>
        <Text v="h6">Lorem ipsum dolor sit, amet consectetur adipisicing elit</Text>
      </Panel.Header>
      <Panel.Body>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam amet pariatur ducimus exercitationem
          quos rem vel nulla nostrum soluta? Repellat sit quam vero! Recusandae placeat adipisci quo qui odit!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quasi explicabo id amet sed labore, ex
          cumque repellendus inventore quas commodi at quis aspernatur libero voluptate maiores alias ipsum ducimus!
        </Text>
      </Panel.Body>
    </Panel>
  </Container>
);
