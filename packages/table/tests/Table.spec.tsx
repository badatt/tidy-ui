/**
 * @jest-environment jsdom
 */
import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Table, Tbody, Td, Tfoot, Th, Thead, Tr } from '../src';

const TableData = () => (
  <>
    <Thead>
      <Tr>
        <Th ele={<div />}>Col 1</Th>
        <Th>Col 2</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td ele={<div />}>Val 1</Td>
        <Td>Val 2</Td>
      </Tr>
    </Tbody>
    <Tfoot></Tfoot>
  </>
);

describe('Table', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Table>
          <TableData />
        </Table>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Table>
          <TableData />
        </Table>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Striped render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Table isStriped>
          <TableData />
        </Table>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Stretched render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Table isStretched>
          <TableData />
        </Table>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode striped render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Table isStriped>
          <TableData />
        </Table>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Caption', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Table caption="sample caption">
          <TableData />
        </Table>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Column adjustment', () => {
    const { container } = render(
      <TidyUiProvider theme={orchidLight}>
        <Table caption="sample caption">
          <TableData />
        </Table>
      </TidyUiProvider>,
    );
    const resizer = container.querySelector('div[data-tui-name="Resizer"]')!;
    act(() => {
      fireEvent.mouseDown(resizer);
      fireEvent.mouseMove(resizer);
      fireEvent.mouseUp(resizer);
    });
  });
});
