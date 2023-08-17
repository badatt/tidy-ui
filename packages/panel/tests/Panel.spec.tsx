/**
 * @jest-environment jsdom
 */
import React from 'react';
import { act } from 'react-dom/test-utils';
import { cleanup, fireEvent, getByRole, queryByRole, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Tone } from '../../types/src';
import { Panel } from '../src';

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

  it('Visible', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Panel>
          <Panel.Header>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Panel.Header>
          <Panel.Body isVisible>{text}</Panel.Body>
        </Panel>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Toggle visible', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Panel>
          <Panel.Header isToggleVisible>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Panel.Header>
          <Panel.Body isVisible>{text}</Panel.Body>
        </Panel>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Visible with height', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Panel>
          <Panel.Header>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Panel.Header>
          <Panel.Body isVisible height="5rem">
            {text}
          </Panel.Body>
        </Panel>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Accent', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.values(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Panel key={i}>
              <Panel.Header accent={Tone[v]}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas odit minima facere quo, quidem
                officiis et. Optio maiores eius deserunt, perspiciatis magnam tenetur nemo assumenda non commodi fugiat?
                Animi, necessitatibus!
              </Panel.Header>
              <Panel.Body accent={Tone[v]}>{text}</Panel.Body>
            </Panel>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom dimension', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Panel width="30rem">
          <Panel.Header>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Panel.Header>
          <Panel.Body height="25rem">{text}</Panel.Body>
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
        <Panel isExpanded>
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
          <Panel.Header accent="major" isToggleVisible>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Panel.Header>
          <Panel.Body accent="major">{text}</Panel.Body>
        </Panel>
      </TidyUiProvider>,
    );
    const { container } = tree;

    act(() => {
      userEvent.hover(container);
      const panelIcon = getByRole(container, 'button');
      expect(queryByRole(container, 'presentation')).toBeNull();
      expect(panelIcon).toBeVisible();
      fireEvent.click(panelIcon);
    });
    expect(queryByRole(container, 'presentation')).toBeVisible();
  });

  it('Toggle expand panel with custom height', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Panel>
          <Panel.Header accent="major" isToggleVisible>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Panel.Header>
          <Panel.Body accent="major" height="250px">
            {text}
          </Panel.Body>
        </Panel>
      </TidyUiProvider>,
    );
    const { container } = tree;

    act(() => {
      userEvent.hover(container);
      const panelIcon = getByRole(container, 'button');
      expect(queryByRole(container, 'presentation')).toBeNull();
      expect(panelIcon).toBeVisible();
      fireEvent.click(panelIcon);
    });
    expect(queryByRole(container, 'presentation')).toBeVisible();
  });
});
