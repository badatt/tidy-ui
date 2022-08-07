import React from 'react';
import { Text } from '@tidy-ui/text';
import { styled } from '@tidy-ui/theme';
import { Panel, PanelBody, PanelHeader } from '../src';

export default {
  component: Panel,
  title: 'Components/Panel/Panel',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const basic = () => (
  <Container>
    <Panel>
      <PanelHeader>
        <Text as="h6">Lorem ipsum dolor sit, amet consectetur adipisicing elit</Text>
      </PanelHeader>
      <PanelBody>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam amet pariatur ducimus exercitationem
          quos rem vel nulla nostrum soluta? Repellat sit quam vero! Recusandae placeat adipisci quo qui odit!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quasi explicabo id amet sed labore, ex
          cumque repellendus inventore quas commodi at quis aspernatur libero voluptate maiores alias ipsum ducimus!
        </Text>
      </PanelBody>
    </Panel>
    <Panel isExpanded>
      <PanelHeader>
        <Text as="h6">Lorem ipsum dolor sit, amet consectetur adipisicing elit</Text>
      </PanelHeader>
      <PanelBody>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam amet pariatur ducimus exercitationem
          quos rem vel nulla nostrum soluta? Repellat sit quam vero! Recusandae placeat adipisci quo qui odit!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quasi explicabo id amet sed labore, ex
          cumque repellendus inventore quas commodi at quis aspernatur libero voluptate maiores alias ipsum ducimus!
        </Text>
      </PanelBody>
    </Panel>
  </Container>
);