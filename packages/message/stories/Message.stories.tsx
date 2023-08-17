import React from 'react';
import { FlexBox } from '../../flexbox/src';
import { Tone } from '../../types/src';
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
  <Message isSharp>
    <Content />
  </Message>
);

export const withoutLabel = () => (
  <FlexBox gap="1rem">
    <Message hasLabel={false}>
      <Content />
    </Message>
    <Message isSharp hasLabel={false}>
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

export const filled = () => (
  <FlexBox gap="1rem">
    {Object.keys(Tone)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <Message key={i} tone={Tone[v]} isFilled>
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
    <Message closable isFilled tone="info">
      <Content />
    </Message>
  </FlexBox>
);

export const customElement = () => (
  <Message ele={<FlexBox nowrap gap="1rem" />} label="Label">
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
