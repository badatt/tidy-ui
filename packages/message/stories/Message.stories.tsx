import React from 'react';
import { FlexBox } from '../../flexbox/src';
import { Tone } from '../../commons/src';
import { Message } from '../src';

export default {
  component: Message,
  title: 'Presentation/Message',
};

const Content = () => (
  <>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia nostrum voluptatibus distinctio at sapiente
    ratione blanditiis cum quam fugit commodi odit, hic eius itaque exercitationem vitae voluptates modi accusamus
    eaque!
  </>
);

export const basic = () => (
  <Message>
    <Content />
  </Message>
);

export const sharp = () => (
  <Message sharp>
    <Content />
  </Message>
);

export const withoutLabel = () => (
  <FlexBox gap="1rem">
    <Message withoutLabel>
      <Content />
    </Message>
    <Message sharp withoutLabel>
      <Content />
    </Message>
  </FlexBox>
);

export const tones = () => (
  <FlexBox gap="1rem">
    {Object.keys(Tone)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <Message key={i} tone={Tone[v]}>
          <Content />
        </Message>
      ))}
  </FlexBox>
);

export const outlined = () => (
  <FlexBox gap="1rem">
    {Object.keys(Tone)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <Message key={i} tone={Tone[v]} outlined>
          <Content />
        </Message>
      ))}
  </FlexBox>
);

export const closable = () => (
  <FlexBox gap="1rem">
    <Message closable onClose={() => alert('Message will be closed now')}>
      <Content />
    </Message>
    <Message closable outlined>
      <Content />
    </Message>
  </FlexBox>
);

export const customMargin = () => (
  <>
    <Message margin="0 0 1rem 0">
      <Content />
    </Message>
    <Message outlined>
      <Content />
    </Message>
  </>
);

export const customDimensions = () => (
  <>
    <Message margin="0 0 1rem 0" height="12rem" width="20rem" closable>
      <Content />
    </Message>
    <Message outlined>
      <Content />
    </Message>
  </>
);

export const customElement = () => (
  <Message ele={<FlexBox nowrap gap="1rem" />}>
    <div>
      <Content />
    </div>
    <div>
      <Content />
    </div>
  </Message>
);

export const onCloseAction = () => (
  <Message closable onClose={() => alert('Message will be closed now')}>
    <Content />
  </Message>
);
