/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight } from '@tidy-ui/commons';
import { Paper } from '../src';

describe('Paper', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Paper>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, veniam ducimus ea reiciendis sed blanditiis
          impedit quisquam velit praesentium, eius dignissimos. Omnis ad doloribus laudantium expedita accusantium
          placeat suscipit dolores. Autem iste voluptas deleniti similique accusamus voluptatem dolorem necessitatibus
          aut natus facere, tenetur sequi culpa beatae praesentium hic aliquam velit molestias illo enim sint
          repellendus earum quasi est repudiandae. Eveniet?
        </Paper>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dark mode basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Paper>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, veniam ducimus ea reiciendis sed blanditiis
          impedit quisquam velit praesentium, eius dignissimos. Omnis ad doloribus laudantium expedita accusantium
          placeat suscipit dolores. Autem iste voluptas deleniti similique accusamus voluptatem dolorem necessitatibus
          aut natus facere, tenetur sequi culpa beatae praesentium hic aliquam velit molestias illo enim sint
          repellendus earum quasi est repudiandae. Eveniet?
        </Paper>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Paper with sharp edges', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Paper isSharp>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, veniam ducimus ea reiciendis sed blanditiis
          impedit quisquam velit praesentium, eius dignissimos. Omnis ad doloribus laudantium expedita accusantium
          placeat suscipit dolores. Autem iste voluptas deleniti similique accusamus voluptatem dolorem necessitatibus
          aut natus facere, tenetur sequi culpa beatae praesentium hic aliquam velit molestias illo enim sint
          repellendus earum quasi est repudiandae. Eveniet?
        </Paper>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
