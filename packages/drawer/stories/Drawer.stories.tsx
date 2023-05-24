import React from 'react';
import { Drawer } from '../src';
import { Button } from '../../button/src';
import { Icon } from '../../commons/src';
import { FlexBox } from '../../flexbox/src';
import { Text } from '../../text/src';
import { Chip } from '../../chip/src';
import { Stack } from '../../stack/src';
import { Paper } from '../../paper/src';

export default {
  component: Drawer,
  title: 'Navigation/Drawer',
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

const MenuItem = ({ children }) => <FlexBox.Item style={{ padding: '0.5rem 1rem' }}>{children}</FlexBox.Item>;

const Menu = () => {
  return (
    <FlexBox fld="column" width="200px">
      {['Account', 'Dashboard', 'Leader', 'Marketplace', 'Settings'].map((c, i) => (
        <MenuItem key={i}>{c}</MenuItem>
      ))}
    </FlexBox>
  );
};

export const basic = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <Button icon={<Icon.Menu />} tone="neutral" onClick={() => setOpen(true)} />
      <SimplePaper />
      <Drawer isOpen={open} onClose={() => setOpen(false)}>
        <Menu />
      </Drawer>
    </>
  );
};

export const rightAnchor = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <Button icon={<Icon.Menu />} tone="neutral" onClick={() => setOpen(true)} />
      <SimplePaper />
      <Drawer isOpen={open} anchor="right" onClose={() => setOpen(false)}>
        <Menu />
      </Drawer>
    </>
  );
};
