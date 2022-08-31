/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Icon, styled, orchidDark, orchidLight, css } from '@tidy-ui/commons';
import { Divider } from '@tidy-ui/divider';
import { Tag, Button, Badge, Text, IconButton } from '@tidy-ui/presentation';
import { Stack } from '../src';
import { IStackProps, TAlign, TJustify, TOrder } from '../src/types';

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

describe('Stack', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Stack divider={<Divider vertical />}>{items.map((v, i) => React.cloneElement(v, { key: i }))}</Stack>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Stack divider={<Divider vertical />}>{items.map((v, i) => React.cloneElement(v, { key: i }))}</Stack>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Order', () => {
    const variants = ['row', 'row-reverse', 'column', 'column-reverse'];
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        {variants.map((v, i) => (
          <div key={i}>
            <Text v="h5" style={{ margin: '1rem 0' }}>
              {v}
            </Text>
            <Stack
              key={i}
              divider={<Divider vertical={v.startsWith('column')} length="1rem" align="center" />}
              gap="0.5rem"
              order={v as TOrder}
            >
              {items.map((v, i) => React.cloneElement(v, { key: i }))}
            </Stack>
            <Divider margin="1rem" />
          </div>
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Gap', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Stack divider={<Divider vertical />} gap="1rem">
          {items.map((v, i) => React.cloneElement(v, { key: i }))}
        </Stack>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Fold', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Stack divider={<Divider vertical />} gap="0.5rem" fold>
          {items.map((v, i) => React.cloneElement(v, { key: i }))}
        </Stack>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Align', () => {
    const variants = ['stretch', 'baseline', 'flex-start', 'flex-end', 'center'];
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        {variants.map((v, i) => (
          <div key={i}>
            <Text v="h5" style={{ margin: '1rem 0' }}>
              {v}
            </Text>
            <Stack key={i} divider={<Divider vertical />} gap="0.5rem" align={v as TAlign} fold>
              {items.map((v, i) => React.cloneElement(v, { key: i }))}
            </Stack>
            <Divider margin="1rem" />
          </div>
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Justify', () => {
    const variants = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'stretch'];
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        {variants.map((v, i) => (
          <div key={i}>
            <Text v="h5" style={{ margin: '1rem 0' }}>
              {v}
            </Text>
            <Stack key={i} divider={<Divider vertical />} gap="0.5rem" justify={v as TJustify} fold>
              {items.map((v, i) => React.cloneElement(v, { key: i }))}
            </Stack>
            <Divider margin="1rem" />
          </div>
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
