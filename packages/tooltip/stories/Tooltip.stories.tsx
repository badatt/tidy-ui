import React from 'react';
import { Button } from '../../button/src';
import { FlexBox } from '../../flexbox/src';
import { Container } from '../../container/src';
import { Tooltip } from '../src';

export default {
  component: Tooltip,
  title: 'Presentation/Tooltip',
};

const text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit minima qui esse laboriosam, itaque sunt quisquam
          perferendis repudiandae repellat earum ratione, nesciunt iure quia quibusdam aliquid facere neque voluptas
          tenetur. Nam consectetur dolore earum excepturi nostrum, libero impedit natus, quia harum illo odio tempora
          suscipit ab quas eveniet esse. Dicta deleniti fugiat amet recusandae, illo officia assumenda temporibus.
          Temporibus, reiciendis.`;

export const basic = () => (
  <Container gutter="0" height="20rem">
    <FlexBox ctr fuh gap="1rem">
      <Tooltip aria-label="Lorem ipsum dolor sit amet consectetur" direction="right">
        <Button size="lg">Right</Button>
      </Tooltip>
      <Tooltip aria-label="Lorem ipsum dolor sit amet consectetur" direction="top">
        <Button size="lg">Top</Button>
      </Tooltip>
      <Tooltip aria-label="Lorem ipsum dolor sit amet consectetur" direction="bottom" width="250px" wrap>
        <Button size="lg">bottom</Button>
      </Tooltip>
      <Tooltip aria-label="Lorem ipsum dolor sit amet consectetur" direction="left">
        <Button size="lg">Left</Button>
      </Tooltip>
    </FlexBox>
  </Container>
);

export const wrapped = () => (
  <Container gutter="0" height="40rem">
    <FlexBox ctr fuh gap="1rem">
      <Tooltip aria-label={text} direction="right" width="250px" wrap>
        <Button size="lg">Right</Button>
      </Tooltip>
      <Tooltip aria-label={text} direction="top" width="250px" wrap>
        <Button size="lg">Top</Button>
      </Tooltip>
      <Tooltip aria-label={text} direction="bottom" width="250px" wrap>
        <Button size="lg">bottom</Button>
      </Tooltip>
      <Tooltip aria-label={text} direction="left" width="250px" wrap>
        <Button size="lg">Left</Button>
      </Tooltip>
    </FlexBox>
  </Container>
);
