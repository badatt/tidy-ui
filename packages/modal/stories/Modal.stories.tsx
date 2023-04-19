import React from 'react';
import { Button } from '../../button/src';
import { Chip } from '../../chip/src';
import { Stack } from '../../stack/src';
import { Paper } from '../../paper/src';
import { Notification } from '../../notification/src';
import { Text } from '../../text/src';
import { Modal } from '../src';

export default {
  component: Modal,
  title: 'Navigation/Modal',
};

const SimplePaper = () => (
  <Paper margin="16px">
    <Text.h6>Lorem ipsum, dolor sit amet </Text.h6>
    <Stack gap="8px">
      <Chip size="xxs" outlined>
        lorem
      </Chip>
      <Chip size="xxs" outlined>
        ipsum
      </Chip>
    </Stack>
    <Text.body1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est similique ipsa accusamus ex expedita dolore
      distinctio molestias aliquam iste impedit vero, sint suscipit illo laboriosam quos facilis, et nemo.
    </Text.body1>
    <Text.body1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est similique ipsa accusamus ex expedita dolore
      distinctio molestias aliquam iste impedit vero, sint suscipit illo laboriosam quos facilis, et nemo.
    </Text.body1>
    <Text.body1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est similique ipsa accusamus ex expedita dolore
      distinctio molestias aliquam iste impedit vero, sint suscipit illo laboriosam quos facilis, et nemo.
    </Text.body1>
  </Paper>
);

export const basic = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <SimplePaper />
      <Button stretched onClick={() => setOpen(true)}>
        Submit
      </Button>
      <Modal isOpen={open}>
        <Notification tone="success" w="300px" onClose={() => setOpen(false)} closable>
          Successfully submitted !
        </Notification>
      </Modal>
    </>
  );
};

export const onBackdropClick = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <SimplePaper />
      <Button stretched onClick={() => setOpen(true)}>
        Submit
      </Button>
      <Modal isOpen={open} onBackdropClick={() => setOpen(false)}>
        <Notification tone="success" w="300px" onClose={() => setOpen(false)} closable>
          Successfully submitted !
        </Notification>
      </Modal>
    </>
  );
};
