import React from 'react';
import { Icon } from '../../commons/src';
import { Button, ButtonGroup } from '../../button/src';
import { FlexBox } from '../../flexbox/src';
import { Message } from '../../message/src';
import { Notification } from '../../notification/src';
import { Text } from '../../text/src';
import { Toaster, useToaster } from '../src';

export default {
  component: Toaster,
  title: 'Feedback/Toaster',
};

export const basic = () => {
  const { toaster } = useToaster();
  const ele = (
    <Message withoutLabel ele={<FlexBox gap="0.5rem" />} tone="success">
      <Icon ele={<Icon.CheckCircle />} />
      <Text.body1>Successfully uploaded</Text.body1>
    </Message>
  );

  return (
    <ButtonGroup>
      <Button onClick={() => toaster.push(ele)}>Add</Button>
      <Button onClick={() => toaster.clear()}>Clear</Button>
    </ButtonGroup>
  );
};

export const closable = () => {
  const { toaster } = useToaster();

  const ele = (
    <Notification width="18rem" outlined>
      <Text.body1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam omnis iusto doloribus voluptatibus natus! At,
        ducimus? Corrupti, alias. Officia maiores esse fuga totam dolore eius vitae iusto labore sequi ad.
      </Text.body1>
    </Notification>
  );

  return (
    <ButtonGroup>
      <Button onClick={() => toaster.push(ele)}>Add</Button>
      <Button onClick={() => toaster.clear()}>Clear</Button>
    </ButtonGroup>
  );
};
