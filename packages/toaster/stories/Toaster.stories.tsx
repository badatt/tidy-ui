import React from 'react';
import { Actions, css, hsla, color, styled, TidyUiContext } from '@tidy-ui/commons';
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

export const dummy = () => {
  const { dispatch } = React.useContext(TidyUiContext);

  const addToast = () => {
    dispatch({
      type: Actions.Toaster.AddToast,
      payload: {
        id: Math.random().toString(),
        item: 'Toast',
      },
    });
  };

  return <Button onClick={addToast}>Add Toast</Button>;
};

export const withToaster = () => {
  const { toaster } = useToaster();

  const ele = <ToastContent>{Date.now()}</ToastContent>;

  return (
    <div>
      <ButtonGroup>
        <Button onClick={() => toaster.push(ele)}>Add</Button>
        <Button onClick={() => toaster.pop()}>Pop</Button>
        <Button onClick={() => toaster.clear()}>Clear</Button>
      </ButtonGroup>
      <Toaster timeout="infinite" />
    </div>
  );
};
