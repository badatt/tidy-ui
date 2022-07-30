import React from 'react';
import { styled } from '@tidy-ui/theme';
import { Anchor } from '../src';

export default {
  component: Anchor,
  title: 'Components/Button/Anchor',
};

const Container = styled.div`
  display: flex;
  gap: 16px;
`;

export const basic = () => (
  <Container>
    <Anchor href="/?path=/story/anchor--basic">Basic</Anchor>
  </Container>
);

export const disabled = () => (
  <Container>
    <Anchor href="/?path=/story/anchor--basic" isDisabled>
      disabled
    </Anchor>
  </Container>
);

export const launchNewTab = () => (
  <Container>
    <Anchor href="https://www.google.com/" isLaunch>
      Google
    </Anchor>
  </Container>
);
