import React from 'react';
import { styled, Icon, css } from '@tidy-ui/commons';
import { Divider } from '@tidy-ui/divider';
import { Tag, Button, Badge, Text, IconButton } from '@tidy-ui/presentation';
import { Stack } from '../src';
import { IStackProps, TAlign, TJustify, TOrder } from '../src/types';

export default {
  component: Stack,
  title: 'Layout/Stack',
};

const DangerIcon = styled(Icon.Dangerous)<IStackProps>`
  height: 1rem;
  width: 1rem;
  ${({ theme: { palette } }) =>
    css`
      color: ${palette['neutral'][500]};
    `}
`;

const items = [
  <Text>One</Text>,
  <Tag size="sm">Two</Tag>,
  <Text>Three</Text>,
  <Button size="xs">Four</Button>,
  <Text>Five</Text>,
  <Text>Six</Text>,
  <Badge data={9}>
    <DangerIcon />
  </Badge>,
  <Text>Seven</Text>,
  <Text>Eight</Text>,
  <IconButton size="xs" icon={<DangerIcon />}>
    Nine
  </IconButton>,
  <Text>Ten</Text>,
  <Tag size="sm">Eleven</Tag>,
  <Text>Twelve</Text>,
  <Button size="xs">Thirteen</Button>,
  <Text>Fourteen</Text>,
  <Text>Fifteen</Text>,
  <Badge data={9}>
    <DangerIcon />
  </Badge>,
  <Text>Sixteen</Text>,
  <Text>Seventeen</Text>,
  <IconButton size="xs" icon={<DangerIcon />}>
    Eighteen
  </IconButton>,
];

export const basic = () => (
  <Stack divider={<Divider vertical />}>{items.map((v, i) => React.cloneElement(v, { key: i }))}</Stack>
);

export const order = () => {
  const variants = ['row', 'row-reverse', 'column', 'column-reverse'];
  return (
    <>
      {variants.map((v, i) => (
        <div key={i}>
          <Text v="h5" style={{ margin: '1rem 0' }}>
            {v}
          </Text>
          <Divider margin="1rem" />
          <Stack
            key={i}
            divider={<Divider vertical={v.startsWith('row')} length="1rem" align="center" />}
            gap="0.5rem"
            order={v as TOrder}
          >
            {items.map((v, i) => React.cloneElement(v, { key: i }))}
          </Stack>
        </div>
      ))}
    </>
  );
};

export const gap = () => (
  <Stack divider={<Divider vertical />} gap="1rem">
    {items.map((v, i) => React.cloneElement(v, { key: i }))}
  </Stack>
);

export const fold = () => (
  <Stack divider={<Divider vertical />} gap="0.5rem" fold>
    {[...items, ...items].map((v, i) => React.cloneElement(v, { key: i }))}
  </Stack>
);

export const align = () => {
  const variants = ['stretch', 'baseline', 'flex-start', 'flex-end', 'center'];
  return (
    <>
      {variants.map((v, i) => (
        <div key={i}>
          <Text v="h5" style={{ margin: '1rem 0' }}>
            {v}
          </Text>
          <Divider margin="1rem" />
          <Stack key={i} divider={<Divider vertical />} gap="0.5rem" align={v as TAlign} fold>
            {items.map((v, i) => React.cloneElement(v, { key: i }))}
          </Stack>
        </div>
      ))}
    </>
  );
};

export const justify = () => {
  const variants = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'stretch'];
  return (
    <>
      {variants.map((v, i) => (
        <div key={i}>
          <Text v="h5" style={{ margin: '1rem 0' }}>
            {v}
          </Text>
          <Divider margin="1rem" />
          <Stack key={i} divider={<Divider vertical />} gap="0.5rem" justify={v as TJustify} fold>
            {items.map((v, i) => React.cloneElement(v, { key: i }))}
          </Stack>
        </div>
      ))}
    </>
  );
};
