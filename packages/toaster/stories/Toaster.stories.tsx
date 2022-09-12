import React from 'react';
import { Actions, css, hsla, color, styled, TidyUiContext } from '@tidy-ui/commons';
import { Button, ButtonGroup, IconButton } from '@tidy-ui/button';
import { Toaster } from '../src';

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
  const ele = <ToastContent>{Date.now()}</ToastContent>;

  return (
    <div>
      <ButtonGroup>
        <Button onClick={() => null}>Add</Button>
        <Button onClick={() => null}>Pop</Button>
        <Button onClick={() => null}>Clear</Button>
      </ButtonGroup>
      <Toaster timeout="infinite" />
    </div>
  );
};
