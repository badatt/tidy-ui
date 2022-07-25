import React from 'react';

import { styled } from '@tidy-ui/theme';

import { Paper } from '../src';

export default {
  component: Paper,
  title: 'Paper',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.01071em;
  line-height: 1.43;
`;

export const basic = () => (
  <Container>
    <Paper>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga amet et tempore laborum ratione nemo quidem ut
        quibusdam? Quod optio voluptas est molestias nam. Iure est nihil illo ad sed. Repellendus, voluptatibus
        adipisci, sequi, quibusdam consequuntur quod aperiam architecto veniam commodi unde repudiandae ratione dicta
        iusto? Dolorum quaerat repellat, assumenda unde animi, eos natus nesciunt dignissimos alias minima excepturi?
        Eveniet.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa officiis non, dignissimos nobis velit id
        explicabo eveniet molestias aliquid labore optio dolor? Corporis deleniti molestiae illum cum voluptates quam. A
        delectus modi eos, excepturi quas saepe nihil facere iusto doloribus quo consequuntur architecto impedit culpa
        dignissimos recusandae eveniet. Esse dicta a, consequuntur porro natus itaque rem sit velit voluptatum? Maiores
        suscipit dolores cumque delectus eaque ratione commodi possimus tenetur, corporis ducimus minima alias magnam
        iste est inventore tempora.
      </p>
    </Paper>
  </Container>
);
