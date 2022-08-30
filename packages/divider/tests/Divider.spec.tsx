/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight } from '@tidy-ui/commons';
import { Divider } from '../src';
import { Text } from '@tidy-ui/presentation';
import { TVariant } from '../src/types';

describe('Divider', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione, id vero quibusdam aperiam officia
          veritatis recusandae magni accusamus rem quo cupiditate architecto hic culpa eum totam reprehenderit, libero
          veniam!
        </Text>
        <Divider />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione, id vero quibusdam aperiam officia
          veritatis recusandae magni accusamus rem quo cupiditate architecto hic culpa eum totam reprehenderit, libero
          veniam!
        </Text>
        <div style={{ display: 'flex' }}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi quam modi natus ipsum corrupti quis
            laudantium reiciendis error quas, voluptate eligendi possimus temporibus ipsam! Eveniet voluptates natus
            minima! Possimus.
          </Text>
          <Divider vertical />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis accusantium ab magni assumenda, iure corporis
            natus voluptas laborum error corrupti inventore hic aliquid, debitis adipisci necessitatibus repellendus
            dolores ratione architecto.
          </Text>
        </div>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione, id vero quibusdam aperiam officia
          veritatis recusandae magni accusamus rem quo cupiditate architecto hic culpa eum totam reprehenderit, libero
          veniam!
        </Text>
        <Divider />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione, id vero quibusdam aperiam officia
          veritatis recusandae magni accusamus rem quo cupiditate architecto hic culpa eum totam reprehenderit, libero
          veniam!
        </Text>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Tone', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Text>color major</Text>
        <Divider tone="major" />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Density', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Text>thick density</Text>
        <Divider density="thick" />
        <Text>thin density</Text>
        <Divider density="thin" />
        <Text>medium density</Text>
        <Divider density="medium" />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Shade', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Text>800 shade</Text>
        <Divider shade={800} />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Variants', () => {
    const variants = ['dashed', 'dotted', 'double', 'groove', 'hidden', 'ridge', 'solid'];
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        {variants.map((v, i) => (
          <div key={i}>
            <Text>{v} style</Text>
            <Divider variant={v as TVariant} />
            <Text>{v} style</Text>
          </div>
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
