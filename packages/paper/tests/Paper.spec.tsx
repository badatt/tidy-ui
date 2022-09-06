/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight, TidyUiProvider } from '@tidy-ui/commons';
import { Paper } from '../src';

const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, veniam ducimus ea reiciendis sed blanditiis
          impedit quisquam velit praesentium, eius dignissimos. Omnis ad doloribus laudantium expedita accusantium
          placeat suscipit dolores. Autem iste voluptas deleniti similique accusamus voluptatem dolorem necessitatibus
          aut natus facere, tenetur sequi culpa beatae praesentium hic aliquam velit molestias illo enim sint
          repellendus earum quasi est repudiandae. Eveniet?`;

describe('Paper', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Paper>{text}</Paper>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Paper>{text}</Paper>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Paper with sharp edges', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Paper sharp>{text}</Paper>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom element', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Paper ele={<div style={{ display: 'flex', gap: '1rem' }} />}>
          <div>{text}</div>
          <div>{text}</div>
          <div>{text}</div>
        </Paper>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
