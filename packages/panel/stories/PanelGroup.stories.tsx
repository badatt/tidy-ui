import React from 'react';
import { Text } from '@tidy-ui/text';
import { styled } from '@tidy-ui/commons';
import { Panel, PanelBody, PanelGroup, PanelHeader } from '../src';

export default {
  component: Panel,
  title: 'Presentation/Panel/PanelGroup',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const basic = () => (
  <Container>
    <PanelGroup>
      <Panel>
        <PanelHeader>
          <Text as="h6">Lorem ipsum dolor sit, amet consectetur adipisicing</Text>
        </PanelHeader>
        <PanelBody>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam amet pariatur ducimus
            exercitationem quos rem vel nulla nostrum soluta? Repellat sit quam vero! Recusandae placeat adipisci quo
            qui odit!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quasi explicabo id amet sed labore, ex
            cumque repellendus inventore quas commodi at quis aspernatur libero voluptate maiores alias ipsum ducimus!
          </Text>
        </PanelBody>
      </Panel>
      <Panel expanded>
        <PanelHeader>
          <Text as="h6">Lorem ipsum dolor sit, amet consectetur adipisicing</Text>
        </PanelHeader>
        <PanelBody>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae libero numquam voluptates debitis
            aspernatur at ullam perferendis, quibusdam eligendi non voluptatibus iure nulla. Veniam excepturi adipisci
            fugiat ea voluptas est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, culpa. Alias
            quis explicabo rem hic magnam delectus recusandae, beatae, quisquam praesentium nemo assumenda et!
            Perspiciatis ab dicta asperiores ullam culpa.
          </Text>
        </PanelBody>
      </Panel>
      <Panel>
        <PanelHeader>
          <Text as="h6">Lorem ipsum dolor sit, amet consectetur adipisicing</Text>
        </PanelHeader>
        <PanelBody>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae libero numquam voluptates debitis
            aspernatur at ullam perferendis, quibusdam eligendi non voluptatibus iure nulla. Veniam excepturi adipisci
            fugiat ea voluptas est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, culpa. Alias
            quis explicabo rem hic magnam delectus recusandae, beatae, quisquam praesentium nemo assumenda et!
            Perspiciatis ab dicta asperiores ullam culpa.
          </Text>
        </PanelBody>
      </Panel>
      <Panel>
        <PanelHeader>
          <Text as="h6">Lorem ipsum dolor sit, amet consectetur adipisicing</Text>
        </PanelHeader>
        <PanelBody>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae libero numquam voluptates debitis
            aspernatur at ullam perferendis, quibusdam eligendi non voluptatibus iure nulla. Veniam excepturi adipisci
            fugiat ea voluptas est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, culpa. Alias
            quis explicabo rem hic magnam delectus recusandae, beatae, quisquam praesentium nemo assumenda et!
            Perspiciatis ab dicta asperiores ullam culpa.
          </Text>
        </PanelBody>
      </Panel>
      <Panel>
        <PanelHeader>
          <Text as="h6">Lorem ipsum dolor sit, amet consectetur adipisicing</Text>
        </PanelHeader>
        <PanelBody>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae libero numquam voluptates debitis
            aspernatur at ullam perferendis, quibusdam eligendi non voluptatibus iure nulla. Veniam excepturi adipisci
            fugiat ea voluptas est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, culpa. Alias
            quis explicabo rem hic magnam delectus recusandae, beatae, quisquam praesentium nemo assumenda et!
            Perspiciatis ab dicta asperiores ullam culpa.
          </Text>
        </PanelBody>
      </Panel>
    </PanelGroup>
  </Container>
);
