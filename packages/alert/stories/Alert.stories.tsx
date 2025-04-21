import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { statusArgTypes } from '../../types/src';
import { Button, ButtonCluster } from '../../button/src';
import { FlexBox } from '../../flexbox/src';
import { Modal } from '../../modal/src';
import { Text } from '../../text/src';
import { Alert, AlertTitle, AlertFooter } from '../src';

const meta: Meta<typeof Alert> = {
  title: 'Presentation/Alert',
  component: Alert,
  argTypes: {
    isFilled: { control: 'boolean' },
    isSharp: { control: 'boolean' },
    status: statusArgTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

const SimpleAlert = (props) => (
  <>
    {props.isFilled ? (
      <Alert {...props}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat molestias optio doloribus ratione neque aliquam
      quo sit consequuntur quos amet? Tenetur pariatur nihil aliquam ad illum commodi optio voluptate aliquid! Quos
      fugiat hic iste pariatur perspiciatis odit magni sit enim quibusdam sunt maxime magnam debitis cumque minima quas
      molestias fugit eos, minus praesentium dolore esse sed, repellat soluta suscipit. Explicabo!
      </Alert>
    ) : (
      <Alert
        ele={<FlexBox fld="column" />}
        {...props}
      >
        <AlertTitle>
          <Text.H6 tone={props.status}>{props.status} alert</Text.H6>
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
    )}
  </>
);

export const alert: Story = {
  args: {
    ...Alert.defaultProps,
    width: '480px',
  },
  render: (args) => <SimpleAlert {...args} />,
};

export const withModal: Story = {
  args: {
    ...Alert.defaultProps,
    width: '480px',
  },
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <ButtonCluster>
          <Button onClick={() => setOpen(true)}>Open</Button>
        </ButtonCluster>
        <Modal isOpen={open}>
          <SimpleAlert {...args} onAccept={() => setOpen(false)} />
        </Modal>
      </>
    );
  },
};
