import React from 'react';
import { css, hsla, color, styled } from '../../commons/src';
import { Button, ButtonGroup } from '../../button/src';
import { Tag } from '../../tag/src';
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

export const basic = () => {
  const { toaster } = useToaster();
  const ele = <ToastContent>{Date.now()}</ToastContent>;

  return (
    <ButtonGroup>
      <Button onClick={() => toaster.push(ele)}>Add</Button>
      <Button onClick={() => toaster.clear()}>Clear</Button>
    </ButtonGroup>
  );
};

export const closable = () => {
  const { toaster } = useToaster();
  const ele = <Tag>{Date.now()}</Tag>;

  return (
    <ButtonGroup>
      <Button onClick={() => toaster.push(ele)}>Add</Button>
      <Button onClick={() => toaster.clear()}>Clear</Button>
    </ButtonGroup>
  );
};
