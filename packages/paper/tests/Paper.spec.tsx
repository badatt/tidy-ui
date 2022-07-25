import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import { orchidLight } from '@tidy-ui/theme';

import { Paper } from '../src';

describe('Paper', () => {
  test('Default render', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Paper>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, veniam ducimus ea reiciendis sed blanditiis
            impedit quisquam velit praesentium, eius dignissimos. Omnis ad doloribus laudantium expedita accusantium
            placeat suscipit dolores. Autem iste voluptas deleniti similique accusamus voluptatem dolorem necessitatibus
            aut natus facere, tenetur sequi culpa beatae praesentium hic aliquam velit molestias illo enim sint
            repellendus earum quasi est repudiandae. Eveniet?
          </Paper>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Rounded paper', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Paper rounded>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, veniam ducimus ea reiciendis sed blanditiis
            impedit quisquam velit praesentium, eius dignissimos. Omnis ad doloribus laudantium expedita accusantium
            placeat suscipit dolores. Autem iste voluptas deleniti similique accusamus voluptatem dolorem necessitatibus
            aut natus facere, tenetur sequi culpa beatae praesentium hic aliquam velit molestias illo enim sint
            repellendus earum quasi est repudiandae. Eveniet?
          </Paper>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
