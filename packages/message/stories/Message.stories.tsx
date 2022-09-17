import React from 'react';
import { styled } from '@tidy-ui/commons';
import { Message } from '../src';
import { Tone } from '@tidy-ui/types';

export default {
  component: Message,
  title: 'Presentation/Message',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const text = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia nostrum voluptatibus distinctio at sapiente
      ratione blanditiis cum quam fugit commodi odit, hic eius itaque exercitationem vitae voluptates modi accusamus
      eaque!`;

export const basic = () => (
  <Container>
    <Message>{text}</Message>
  </Container>
);

export const sharp = () => (
  <Container>
    <Message sharp>{text}</Message>
  </Container>
);

export const withoutLabel = () => (
  <Container>
    <Message withoutLabel>{text}</Message>
    <Message sharp withoutLabel>
      {text}
    </Message>
  </Container>
);

export const tones = () => (
  <Container>
    {Object.keys(Tone)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <Message tone={Tone[v]}>{text}</Message>
      ))}
  </Container>
);

export const outlined = () => (
  <Container>
    {Object.keys(Tone)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <Message tone={Tone[v]} outlined>
          {text}
        </Message>
      ))}
  </Container>
);

export const closable = () => (
  <Container>
    <Message closable onClose={() => console.log('closed')}>
      {text}
    </Message>
    <Message closable outlined>
      {text}
    </Message>
  </Container>
);

export const customMargin = () => (
  <>
    <Message margin="0 0 1rem 0">{text}</Message>
    <Message outlined>{text}</Message>
  </>
);

export const customDimensions = () => (
  <>
    <Message margin="0 0 1rem 0" h="10rem" w="20rem" closable>
      {text}
    </Message>
    <Message outlined>{text}</Message>
  </>
);

export const customElement = () => (
  <Message ele={<div style={{ display: 'flex', gap: '1rem' }} />}>
    <div>{text}</div>
    <div>{text}</div>
  </Message>
);
