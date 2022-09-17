import React from 'react';
import { Stack } from '../../stack/src';
import { Tag } from '../../tag/src';
import { FlexBox } from '../../flexbox/src';
import { Text } from '../../text/src';
import { Panel } from '../src';

export default {
  component: Panel,
  title: 'Presentation/Panel/Panel',
};

const ContentBody = () => (
  <Text.body1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, maxime. Aliquam, ea neque? Quibusdam itaque quos
    earum! Ex, neque, unde officia accusamus necessitatibus, quas incidunt architecto a impedit ut ullam. Veritatis
    saepe placeat ipsum aliquid laudantium quod, reprehenderit recusandae quas mollitia pariatur? Eos dolorum numquam
    voluptatum sapiente, accusantium voluptate animi odio tempora totam reprehenderit adipisci nulla praesentium
    exercitationem architecto quaerat. Explicabo quis dolores incidunt. Animi obcaecati quis pariatur minus, non
    praesentium. Voluptatum magnam laborum nemo molestias amet architecto, maiores blanditiis omnis sunt quae similique
    aliquid delectus est animi eligendi voluptate? Nulla voluptatum excepturi, tempora voluptates cum dolore facere,
    ducimus officiis ut dolores vero necessitatibus numquam aliquam sapiente ab eligendi, alias provident beatae tempore
    iure itaque possimus. Ullam dignissimos explicabo eum. Provident architecto ipsum, nobis explicabo repudiandae
    quaerat nemo deleniti asperiores ex voluptatibus reprehenderit cumque fugit non quos doloribus reiciendis nihil.
    Omnis cupiditate vel iure placeat cumque repellat necessitatibus voluptate qui!
  </Text.body1>
);

const ContentHeader = () => <Text.subtitle2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text.subtitle2>;

export const basic = () => (
  <Panel>
    <Panel.Header>
      <ContentHeader />
    </Panel.Header>
    <Panel.Body>
      <ContentBody />
    </Panel.Body>
  </Panel>
);

export const expanded = () => (
  <Panel expanded>
    <Panel.Header>
      <ContentHeader />
    </Panel.Header>
    <Panel.Body>
      <ContentBody />
    </Panel.Body>
  </Panel>
);

export const customMargin = () => (
  <>
    <Panel margin="0 0 1rem 0">
      <Panel.Header>
        <ContentHeader />
      </Panel.Header>
      <Panel.Body>
        <ContentBody />
      </Panel.Body>
    </Panel>
    <Panel>
      <Panel.Header>
        <ContentHeader />
      </Panel.Header>
      <Panel.Body>
        <ContentBody />
      </Panel.Body>
    </Panel>
  </>
);

export const customDimension = () => (
  <Panel w="30rem">
    <Panel.Header>
      <ContentHeader />
    </Panel.Header>
    <Panel.Body h="25rem">
      <ContentBody />
    </Panel.Body>
  </Panel>
);

export const customHeaderElement = () => (
  <Panel>
    <Panel.Header ele={<FlexBox.Item fgo={1} />}>
      <FlexBox ali="center" gap="5rem">
        <ContentHeader />
        <Stack gap="0.5rem">
          <Tag>Lorem</Tag>
          <Tag tone="success">Ipsum</Tag>
          <Tag tone="info">Dolor</Tag>
        </Stack>
      </FlexBox>
    </Panel.Header>
    <Panel.Body>
      <ContentBody />
    </Panel.Body>
  </Panel>
);

export const customBodyElement = () => (
  <Panel expanded>
    <Panel.Header>
      <ContentHeader />
    </Panel.Header>
    <Panel.Body ele={<FlexBox gap="0.5rem" nowrap />}>
      <div>
        <ContentBody />
      </div>
      <div>
        <ContentBody />
      </div>
      <div>
        <ContentBody />
      </div>
    </Panel.Body>
  </Panel>
);
