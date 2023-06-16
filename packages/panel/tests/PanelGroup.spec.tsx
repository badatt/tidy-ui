/**
 * @jest-environment jsdom
 */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Panel, PanelGroup } from '../src';

afterEach(cleanup);

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, maxime. Aliquam, ea neque? Quibusdam
          itaque quos earum! Ex, neque, unde officia accusamus necessitatibus, quas incidunt architecto a impedit ut
          ullam. Veritatis saepe placeat ipsum aliquid laudantium quod, reprehenderit recusandae quas mollitia pariatur?
          Eos dolorum numquam voluptatum sapiente, accusantium voluptate animi odio tempora totam reprehenderit adipisci
          nulla praesentium exercitationem architecto quaerat. Explicabo quis dolores incidunt. Animi obcaecati quis
          pariatur minus, non praesentium. Voluptatum magnam laborum nemo molestias amet architecto, maiores blanditiis
          omnis sunt quae similique aliquid delectus est animi eligendi voluptate? Nulla voluptatum excepturi, tempora
          voluptates cum dolore facere, ducimus officiis ut dolores vero necessitatibus numquam aliquam sapiente ab
          eligendi, alias provident beatae tempore iure itaque possimus. Ullam dignissimos explicabo eum. Provident
          architecto ipsum, nobis explicabo repudiandae quaerat nemo deleniti asperiores ex voluptatibus reprehenderit
          cumque fugit non quos doloribus reiciendis nihil. Omnis cupiditate vel iure placeat cumque repellat
          necessitatibus voluptate qui!`;

describe('Panel', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <PanelGroup>
          {[...Array(10)].map((v, i) => (
            <Panel key={i}>
              <Panel.Header>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Panel.Header>
              <Panel.Body>{text}</Panel.Body>
            </Panel>
          ))}
        </PanelGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <PanelGroup>
          {[...Array(10)].map((v, i) => (
            <Panel key={i}>
              <Panel.Header>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Panel.Header>
              <Panel.Body>{text}</Panel.Body>
            </Panel>
          ))}
        </PanelGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Some expanded', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <PanelGroup>
          {[...Array(10)].map((v, i) => (
            <Panel key={i} isExpanded={i % 2 === 0}>
              <Panel.Header>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Panel.Header>
              <Panel.Body>{text}</Panel.Body>
            </Panel>
          ))}
        </PanelGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom margin', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <PanelGroup margin="0 0 1rem 0">
          {[...Array(3)].map((v, i) => (
            <Panel key={i}>
              <Panel.Header>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Panel.Header>
              <Panel.Body>{text}</Panel.Body>
            </Panel>
          ))}
        </PanelGroup>
        <PanelGroup>
          {[...Array(4)].map((v, i) => (
            <Panel key={i}>
              <Panel.Header>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Panel.Header>
              <Panel.Body>{text}</Panel.Body>
            </Panel>
          ))}
        </PanelGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('With eparator', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <PanelGroup hasSeparator>
          {[...Array(10)].map((v, i) => (
            <Panel key={i}>
              <Panel.Header>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Panel.Header>
              <Panel.Body>{text}</Panel.Body>
            </Panel>
          ))}
        </PanelGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('With eparator in dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <PanelGroup hasSeparator>
          {[...Array(10)].map((v, i) => (
            <Panel key={i}>
              <Panel.Header>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Panel.Header>
              <Panel.Body>{text}</Panel.Body>
            </Panel>
          ))}
        </PanelGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
