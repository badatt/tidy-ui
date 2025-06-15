import type { Meta, StoryObj } from '@storybook/react';
import data from './nobel-laureate.data.json';
import { Table, Td, Th, Tr, Thead, Tbody, Tfoot } from '../src';
import { ITableProps } from '../src/types';

const meta: Meta<ITableProps & { rowCount: number }> = {
  title: 'Presentation/Table',
  component: Table,
  argTypes: {
    caption: { control: 'text' },
    rowCount: { control: 'number', max: 100, min: 1 },
    girth: { control: 'select', options: ['sm', 'md', 'lg'] },
    isStriped: { control: 'boolean' },
    isStretched: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<ITableProps & { rowCount: number }>;

const TableData = (props: { count }) => (
  <>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Gender</Th>
        <Th>Prize year</Th>
        <Th>Prize category</Th>
        <Th>Born</Th>
        <Th>Birth place</Th>
        <Th>Died</Th>
        <Th>Death place</Th>
      </Tr>
    </Thead>
    <Tbody>
      {data.laureates.slice(1, props.count).map((d) => (
        <Tr key={d.id}>
          <Td>
            {d.firstname} {d.surname}
          </Td>
          <Td>{d.gender}</Td>
          <Td>{d.prizes[0].year}</Td>
          <Td>{d.prizes[0].category}</Td>
          <Td>{d.born}</Td>
          <Td>
            {d.bornCity}, {d.bornCountry}
          </Td>
          <Td>{d.died}</Td>
          <Td>
            {d.diedCity}, {d.diedCountry}
          </Td>
        </Tr>
      ))}
    </Tbody>
    <Tfoot></Tfoot>
  </>
);

export const DefaultTable: Story = {
  args: {
    ...Table.defaultProps,
    rowCount: 10,
  },
  render: (args) => {
    return (
      <Table {...args}>
        <TableData count={args.rowCount} />
      </Table>
    );
  },
};
