import React from 'react';
import { Text } from '../../text/src';
import { Panel, PanelGroup } from '../src';

export default {
  component: Panel,
  title: 'Presentation/Panel/PanelGroup',
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
  <PanelGroup>
    {[...Array(10)].map((v, i) => (
      <Panel key={i}>
        <Panel.Header>
          <Text.body1 udl>
            <ContentHeader />
          </Text.body1>
        </Panel.Header>
        <Panel.Body>
          <ContentBody />
        </Panel.Body>
      </Panel>
    ))}
  </PanelGroup>
);

export const someExpanded = () => (
  <PanelGroup>
    {[...Array(10)].map((v, i) => (
      <Panel key={i} isExpanded={i % 2 === 0}>
        <Panel.Header isToggleVisible>
          <Text.body1 udl>
            <ContentHeader />
          </Text.body1>
        </Panel.Header>
        <Panel.Body>
          <ContentBody />
        </Panel.Body>
      </Panel>
    ))}
  </PanelGroup>
);

export const withSeparator = () => (
  <PanelGroup hasSeparator>
    {[...Array(10)].map((v, i) => (
      <Panel key={i}>
        <Panel.Header isToggleVisible>
          <Text.body1 udl>
            <ContentHeader />
          </Text.body1>
        </Panel.Header>
        <Panel.Body>
          <ContentBody />
        </Panel.Body>
      </Panel>
    ))}
  </PanelGroup>
);
