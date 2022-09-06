import React from 'react';
import { styled } from '@tidy-ui/commons';
import { Anchor } from '../src';

export default {
  component: Anchor,
  title: 'Presentation/Button/Anchor',
};

export const basic = () => <Anchor href="/?path=/story/anchor--basic">Basic</Anchor>;

export const disabled = () => (
  <Anchor href="/?path=/story/anchor--basic" disabled>
    disabled
  </Anchor>
);

export const launchNewTab = () => (
  <Anchor href="https://www.google.com/" launch>
    Google
  </Anchor>
);
