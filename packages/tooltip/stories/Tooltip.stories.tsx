import React from 'react';
import { Button } from '../../button/src';
import { FlexBox } from '../../flexbox/src';
import { Container } from '../../container/src';
import { Tooltip } from '../src';

export default {
  component: Tooltip,
  title: 'Presentation/Tooltip',
};

export const basic = () => (
  <Container gutter="0" h="20rem">
    <FlexBox ctr fuh gap="1rem">
      <Tooltip content="Lorem ipsum dolor sit amet consectetur" direction="right">
        <Button size="lg">Right</Button>
      </Tooltip>
      <Tooltip content="Lorem ipsum dolor sit amet consectetur" direction="top">
        <Button size="lg">Top</Button>
      </Tooltip>
      <Tooltip content="Lorem ipsum dolor sit amet consectetur" direction="bottom">
        <Button size="lg">Bottom</Button>
      </Tooltip>
      <Tooltip content="Lorem ipsum dolor sit amet consectetur" direction="left">
        <Button size="lg">Left</Button>
      </Tooltip>
    </FlexBox>
  </Container>
);
