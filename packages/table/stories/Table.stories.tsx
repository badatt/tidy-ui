import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import data from './nobel-laureate.data.json';
import { Text } from '../../text/src';
import { TabsGroup, Tabs, Tab, TabPanel, TabPanels } from '../../tabs/src';
import { Table, Td, Th, Tr, Thead, Tbody, Tfoot } from '../src';

const meta: Meta<typeof Table> = {
  title: 'Presentation/Table',
  component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

const TableData = (props: { count }) => (
  <>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Gender</Th>
        <Th>Prize year</Th>
        <Th>Prize category</Th>
        <Th>Motivation</Th>
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
          <Td ele={<Text.Body1 width="250px" tnc />}>{d.prizes[0].motivation}</Td>
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

export const basic: Story = {
  render: () => {
    return (
      <Table>
        <TableData count={100} />
      </Table>
    );
  },
};

export const striped: Story = {
  render: () => {
    return (
      <Table isStriped>
        <TableData count={100} />
      </Table>
    );
  },
};

export const girths: Story = {
  render: () => {
    return (
      <TabsGroup>
        <Tabs hasFullWidth>
          <Tab>Medium (md)</Tab>
          <Tab>Small (sm)</Tab>
          <Tab>Large (lg)</Tab>
        </Tabs>
        <TabPanels>
          <TabPanel>
            <Table>
              <TableData count={100} />
            </Table>
          </TabPanel>
          <TabPanel>
            <Table girth="sm">
              <TableData count={100} />
            </Table>
          </TabPanel>
          <TabPanel>
            <Table girth="lg">
              <TableData count={100} />
            </Table>
          </TabPanel>
        </TabPanels>
      </TabsGroup>
    );
  },
};

export const caption: Story = {
  render: () => {
    return (
      <Table caption="Nobel laureates and their personal details">
        <TableData count={10} />
      </Table>
    );
  },
};
