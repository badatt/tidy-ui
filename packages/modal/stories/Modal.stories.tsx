import React from 'react';
import { Button } from '../../button/src';
import { FlexBox } from '../../flexbox/src';
import { Chip } from '../../chip/src';
import { Stack } from '../../stack/src';
import { Paper } from '../../paper/src';
import { Alert, AlertFooter } from '../../alert/src';
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
      <Chip girth="xxs">lorem</Chip>
      <Chip girth="xxs">ipsum</Chip>
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
    <FlexBox width="400px">
      <SimplePaper />
      <Button isStretched variant="primary" tone="major" onClick={() => setOpen(true)}>
        Submit
      </Button>
      <Modal isOpen={open}>
        <Alert ele={<FlexBox fld="column" />} status="success" width="400px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perferendis quaerat ad reprehenderit vel enim
          adipisci nostrum dolorum! Atque id voluptate autem vitae possimus hic totam, blanditiis quisquam neque culpa.
          <AlertFooter width="100%">
            <Button isStretched variant="simple" onClick={() => setOpen(false)}>
              Ok
            </Button>
          </AlertFooter>
        </Alert>
      </Modal>
    </FlexBox>
  );
};

export const onBackdropClick = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <FlexBox width="400px">
      <SimplePaper />
      <Button isStretched variant="primary" tone="major" onClick={() => setOpen(true)}>
        Submit
      </Button>
      <Modal isOpen={open} onBackdropClick={() => setOpen(false)} width="400px" background="white">
        <Alert ele={<FlexBox fld="column" />} status="danger" width="400px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla delectus quisquam fugit alias numquam eligendi
          minima fuga libero, labore magnam recusandae voluptas autem. Debitis laboriosam aperiam, odio unde repellat
          facere.
          <AlertFooter width="100%">
            <Text.caption>Please contact support for any queries.</Text.caption>
          </AlertFooter>
        </Alert>
      </Modal>
    </FlexBox>
  );
};
