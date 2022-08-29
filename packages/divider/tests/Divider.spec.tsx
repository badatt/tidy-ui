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
  it('Other variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Text>color major</Text>
        <Divider tone="major" />
        <Text>thick density</Text>
        <Divider density="thick" />
        <Text>800 shade</Text>
        <Divider shade={800} />
        <Text>dashed style</Text>
        <Divider variant="dashed" />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
