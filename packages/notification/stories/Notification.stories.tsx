import React from 'react';
import { Icon, styled } from '@tidy-ui/commons';
import { Tone } from '@tidy-ui/types';
import { useToaster } from '../../toaster/src';
import { Button, ButtonCluster, ButtonGroup } from '../../button/src';
import { Text } from '../../text/src';
import { FlexBox } from '../../flexbox/src';
import { Notification } from '../src';

export default {
  component: Notification,
  title: 'Feedback/Notification',
};

const NotificationText = () => (
  <Text>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed animi dicta, dolores, facilis eaque dolore maxime
    corrupti alias inventore minus dolorum ea accusamus nihil! Harum commodi officiis corporis veritatis autem. Lorem
    ipsum dolor sit, amet consectetur adipisicing elit. Commodi odit voluptate earum architecto soluta cupiditate
    necessitatibus laudantium sapiente expedita doloremque, veniam unde sit eligendi omnis similique natus quasi!
    Sapiente, ullam.
  </Text>
);

export const basic = () => (
  <Notification w="20rem">
    <NotificationText />
  </Notification>
);

export const sharp = () => (
  <Notification w="20rem" sharp>
    <NotificationText />
  </Notification>
);

export const tones = () => (
  <>
    {Object.keys(Tone)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <Notification key={i} tone={Tone[v]} w="20rem" margin="0 0 1rem 0">
          <NotificationText />
        </Notification>
      ))}
  </>
);

export const outlined = () => (
  <>
    {Object.keys(Tone)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <Notification key={i} tone={Tone[v]} w="20rem" outlined margin="0 0 1rem 0">
          <NotificationText />
        </Notification>
      ))}
  </>
);

export const nonClosable = () => (
  <Notification w="20rem" closable={false}>
    <NotificationText />
  </Notification>
);

export const customLabel = () => (
  <Notification
    w="20rem"
    label={
      <Text v="h4" mgn="0">
        Hello there !
      </Text>
    }
  >
    <NotificationText />
  </Notification>
);

export const customIcon = () => (
  <Notification w="20rem" icon={<Icon.Add />}>
    <NotificationText />
  </Notification>
);

export const withoutLabel = () => (
  <Notification w="20rem" withoutLabel>
    <NotificationText />
  </Notification>
);

export const withToaster = () => {
  const { toaster } = useToaster();
  const ele = (
    <Notification w="20rem" outlined>
      <NotificationText />
      <ButtonCluster stretched>
        <Button tone="minor" variant="simple">
          Cancel
        </Button>
        <Button tone="success" variant="primary">
          Agree
        </Button>
      </ButtonCluster>
    </Notification>
  );

  return (
    <ButtonGroup>
      <Button onClick={() => toaster.push(ele)}>Add</Button>
      <Button onClick={() => toaster.clear()}>Clear</Button>
    </ButtonGroup>
  );
};

export const customMargin = () => (
  <>
    <Notification w="20rem" margin="0 0 1rem 0">
      <NotificationText />
    </Notification>
    <Notification w="20rem">
      <NotificationText />
    </Notification>
  </>
);

export const customElement = () => (
  <Notification w="30rem" ele={<FlexBox nowrap />}>
    <NotificationText />
    <NotificationText />
  </Notification>
);

export const onCloseAction = () => (
  <Notification w="20rem" onClose={() => alert('Notification close action')}>
    <NotificationText />
  </Notification>
);