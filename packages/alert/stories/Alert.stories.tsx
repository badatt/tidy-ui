import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Status } from '../../types/src';
import { Button, ButtonCluster } from '../../button/src';
import { FlexBox } from '../../flexbox/src';
import { Grid, GridItem } from '../../grid/src';
import { Modal } from '../../modal/src';
import { Text } from '../../text/src';
import { Alert, AlertTitle, AlertFooter } from '../src';

const meta: Meta<typeof Alert> = {
  title: 'Presentation/Alert',
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof Alert>;

const SimpleAlert = (props) => (
  <Alert ele={<FlexBox fld="column" />} isFilled={props.filled} status={props.status} width={props.width}>
    <AlertTitle>
      <Text.h6 tone={props.status}>{props.status}</Text.h6>
    </AlertTitle>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus nostrum nulla dolorum! Consequatur facere sint
    excepturi amet nulla soluta dolorem ad sequi. Dolorem quod velit quam numquam corporis, tempore maxime!
    <AlertFooter>
      <ButtonCluster isStretched>
        <Button variant="simple" tone="neutral" onClick={props.onAccept}>
          Cancel
        </Button>
        <Button tone={props.status} onClick={props.onAccept}>
          Ok
        </Button>
      </ButtonCluster>
    </AlertFooter>
  </Alert>
);

export const basic: Story = {
  render: () => (
    <>
      <SimpleAlert width="450px" />
      <br />
      <Alert>Simple alert</Alert>
    </>
  ),
};

export const status: Story = {
  render: () => (
    <Grid gap={16}>
      {Object.values(Status)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <GridItem key={v} xs={12} sm={12} md={8} lg={6} xl={6}>
            <SimpleAlert status={Status[v]} />
          </GridItem>
        ))}
    </Grid>
  ),
};

export const filled: Story = {
  render: () => (
    <Grid gap={16}>
      {Object.values(Status)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <GridItem key={v} xl={24} xs={24} sm={24} md={24} lg={24}>
            <Alert isFilled status={Status[v]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta magni consequuntur non quis dolor
              perspiciatis, nisi repellat cupiditate maiores, nulla suscipit, dolorum expedita natus accusantium
              blanditiis earum error fugit accusamus?
            </Alert>
          </GridItem>
        ))}
    </Grid>
  ),
};

export const withModal: Story = {
  render: () => {
    const [openNormal, setOpenNormal] = React.useState(false);
    const [openFilled, setOpenFilled] = React.useState(false);

    return (
      <>
        <ButtonCluster>
          <Button onClick={() => setOpenNormal(true)}>Open normal alert</Button>
          <Button onClick={() => setOpenFilled(true)}>Open filled alert</Button>
        </ButtonCluster>
        <Modal isOpen={openNormal}>
          <SimpleAlert status="success" width="350px" onAccept={() => setOpenNormal(false)} />
        </Modal>
        <Modal isOpen={openFilled} onBackdropClick={() => setOpenFilled(false)}>
          <Alert isFilled status="danger" width="350px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Alert>
        </Modal>
      </>
    );
  },
};
