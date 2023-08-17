import React from 'react';
import { Icon } from '../../commons/src';
import { Tone } from '../../types/src';
import { useToaster } from '../../toaster/src';
import { Button, ButtonCluster, ButtonGroup } from '../../button/src';
import { Text } from '../../text/src';
import { FlexBox } from '../../flexbox/src';
import { Grid, GridItem } from '../../grid/src';
import { Notification } from '../src';

export default {
  component: Notification,
  title: 'Feedback/Notification',
};

const NotificationText = () => (
  <>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed animi dicta, dolores, facilis eaque dolore maxime
    corrupti alias inventore minus dolorum ea accusamus nihil! Harum commodi officiis corporis veritatis autem. Lorem
    ipsum dolor sit, amet consectetur adipisicing elit. Commodi odit voluptate earum architecto soluta cupiditate
    necessitatibus laudantium sapiente expedita doloremque, veniam unde sit eligendi omnis similique natus quasi!
    Sapiente, ullam.
  </>
);

export const basic = () => (
  <Notification width="20rem">
    <NotificationText />
  </Notification>
);

export const sharp = () => (
  <Notification width="20rem" isSharp>
    <NotificationText />
  </Notification>
);

export const tones = () => (
  <Grid gap={16}>
    {Object.keys(Tone)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <GridItem xs={12} sm={12} md={8} lg={6} xl={6} key={i}>
          <Notification key={i} tone={Tone[v]}>
            <NotificationText />
          </Notification>
        </GridItem>
      ))}
  </Grid>
);

export const filled = () => (
  <Grid gap={16}>
    {Object.keys(Tone)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <GridItem xs={12} sm={12} md={8} lg={6} xl={6} key={i}>
          <Notification key={i} tone={Tone[v]} isFilled>
            <NotificationText />
          </Notification>
        </GridItem>
      ))}
  </Grid>
);

export const nonClosable = () => (
  <Notification width="20rem" closable={false} tone="info">
    <NotificationText />
  </Notification>
);

export const customLabel = () => (
  <Notification width="20rem" tone="info" label={<Text.h4>Hello there !</Text.h4>}>
    <NotificationText />
  </Notification>
);

export const customIcon = () => (
  <Notification width="20rem" tone="info" icon={<Icon.Email />}>
    <NotificationText />
  </Notification>
);

export const withoutLabel = () => (
  <Notification width="20rem" hasLabel={false}>
    <NotificationText />
  </Notification>
);

export const withToaster = () => {
  const { toaster } = useToaster();
  React.useEffect(() => {
    return () => {
      toaster.clear();
    };
  }, []);
  const ele = (
    <Notification width="20rem">
      <NotificationText />
      <ButtonCluster isStretched>
        <Button tone="danger" variant="simple">
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

export const customElement = () => (
  <Notification width="30rem" ele={<FlexBox nowrap />}>
    <NotificationText />
    <NotificationText />
  </Notification>
);

export const onCloseAction = () => (
  <Notification width="20rem" onClose={() => alert('Notification will be closed now')}>
    <NotificationText />
  </Notification>
);
