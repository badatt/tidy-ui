/**
 * @jest-environment jsdom
 */
import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, getByRole, queryByRole, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '@tidy-ui/commons';
import { Panel } from '../src';

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
        <Panel>
          <Panel.Header>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Panel.Header>
          <Panel.Body>{text}</Panel.Body>
        </Panel>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Panel>
          <Panel.Header>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Panel.Header>
          <Panel.Body>{text}</Panel.Body>
        </Panel>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom margin', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Panel margin="0 0 1rem 0">
          <Panel.Header>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Panel.Header>
          <Panel.Body>{text}</Panel.Body>
        </Panel>
        <Panel>
          <Panel.Header>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Panel.Header>
          <Panel.Body>{text}</Panel.Body>
        </Panel>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom dimension', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Panel w="30rem">
          <Panel.Header>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Panel.Header>
          <Panel.Body h="25rem">{text}</Panel.Body>
        </Panel>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom header element', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Panel>
          <Panel.Header ele={<div style={{ fontWeight: 'bold' }} />}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Panel.Header>
          <Panel.Body>{text}</Panel.Body>
        </Panel>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom body element', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Panel expanded>
          <Panel.Header>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Panel.Header>
          <Panel.Body ele={<div style={{ display: 'flex' }} />}>
            <div>{text}</div>
            <div>{text}</div>
            <div>{text}</div>
          </Panel.Body>
        </Panel>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Toggle expand panel', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Panel>
          <Panel.Header>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Panel.Header>
          <Panel.Body>{text}</Panel.Body>
        </Panel>
      </TidyUiProvider>,
    );
    const { container } = tree;
    const panelIcon = getByRole(container, 'button');
    expect(queryByRole(container, 'presentation')).toBeNull();
    expect(panelIcon).toBeVisible();
    act(() => {
      fireEvent.click(panelIcon);
    });
    expect(queryByRole(container, 'presentation')).toBeVisible();
  });
});
