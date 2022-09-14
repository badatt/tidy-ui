import React from 'react';
import { css, hsla, color, styled } from '@tidy-ui/commons';
import { Button, ButtonGroup, IconButton } from '@tidy-ui/button';
import { Toaster, useToaster } from '../src';

const ToastContent = styled.div`
  ${({ theme: { palette, layout } }) => css`
    display: flex;
    padding: 0.5rem 0.5rem;
    border-radius: ${layout.radius};
    color: ${palette.text.primary};
    background-color: ${hsla(color.purple[800], 0.3)};
  `}
`;

export default {
  component: Toaster,
  title: 'Feedback/Toaster',
};

export const withToaster = () => {
  const { toaster } = useToaster();
  const ele = <ToastContent>{Date.now()}</ToastContent>;

  return (
    <ButtonGroup>
      <Button onClick={() => toaster.push(ele)}>Add</Button>
      <Button onClick={() => toaster.clear()}>Clear</Button>
    </ButtonGroup>
  );
};
