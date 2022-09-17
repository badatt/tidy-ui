import React from 'react';
import { Icon, styled } from '../../commons/src';
import { Tag } from '../src';
import { Tone } from '../../types/src';
import { Size } from '../src/types';

export default {
  component: Tag,
  title: 'Presentation/Tag/Tag',
};

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const Column = styled.div`
  & > * {
    margin-bottom: 8px;
  }
`;

export const basic = () => <Tag>basic</Tag>;

export const icon = () => <Tag icon={<Icon.CheckCircle />}>with icon</Tag>;

export const tones = () => (
  <Container>
    {Object.keys(Tone)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <Tag tone={Tone[v]}>{Tone[v]}</Tag>
      ))}
  </Container>
);

export const outlined = () => (
  <Container>
    {Object.keys(Tone)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <Tag tone={Tone[v]} outlined>
          {Tone[v]}
        </Tag>
      ))}
  </Container>
);

export const disabled = () => <Tag disabled>disabled</Tag>;

export const sizes = () => (
  <Column>
    {Object.keys(Size)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <Tag size={Size[v]}>size = {Size[v]}</Tag>
      ))}
  </Column>
);

export const customDimensions = () => (
  <Tag h="3rem" w="10rem">
    custom dimension
  </Tag>
);
