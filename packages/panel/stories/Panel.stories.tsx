import React from 'react';
import { Text } from '../../text/src';
import { FlexBox } from '../../flexbox/src';
import { Panel } from '../src';

export default {
  component: Panel,
  title: 'Presentation/Panel/Panel',
};

const ContentBody = () => (
  <>
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
  </>
);

const ContentHeader = () => <>Lorem ipsum dolor sit amet consectetur adipisicing elit.</>;

export const basic = () => (
  <Panel>
    <Panel.Header>
      <Text.body1 udl>
        <ContentHeader />
      </Text.body1>
    </Panel.Header>
    <Panel.Body>
      <ContentBody />
    </Panel.Body>
  </Panel>
);

export const withToggleVisible = () => (
  <Panel>
    <Panel.Header isToggleVisible>
      <Text.body1 udl>
        <ContentHeader />
      </Text.body1>
    </Panel.Header>
    <Panel.Body>
      <ContentBody />
    </Panel.Body>
  </Panel>
);

export const expanded = () => (
  <Panel isExpanded>
    <Panel.Header>
      <Text.body1 udl>
        <ContentHeader />
      </Text.body1>
    </Panel.Header>
    <Panel.Body>
      <ContentBody />
    </Panel.Body>
  </Panel>
);

export const customHeader = () => (
  <Panel>
    <Panel.Header ele={<Text.h6 />}>
      <ContentHeader />
    </Panel.Header>
    <Panel.Body>
      <ContentBody />
    </Panel.Body>
  </Panel>
);

export const customBody = () => (
  <Panel isExpanded>
    <Panel.Header>
      <Text.body1 udl>
        <ContentHeader />
      </Text.body1>
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
