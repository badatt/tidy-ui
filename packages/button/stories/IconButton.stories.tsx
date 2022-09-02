import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { styled } from '@tidy-ui/commons';
import { IconButton } from '../src';
import { Size, Tone } from '@tidy-ui/types';

export default {
  component: IconButton,
  title: 'Presentation/Button/IconButton',
};

const Container = styled.div`
  display: flex;
  gap: 16px;
`;

const Column = styled.div`
  & > * {
    margin-bottom: 8px;
  }
`;

export const basic = () => (
  <Container>
    <IconButton icon={<Icon.Add />}>Add</IconButton>
  </Container>
);

export const tones = () => {
  return (
    <Container>
      {Object.values(Tone).map((v, i) => (
        <IconButton icon={<Icon.AddCircle />} tone={v} key={i}>
          {v}
        </IconButton>
      ))}
    </Container>
  );
};

export const placement = () => (
  <Container>
    <IconButton icon={<Icon.AddCircle />}>Left</IconButton>
    <IconButton icon={<Icon.AddCircle />} placement="right">
      Right
    </IconButton>
  </Container>
);

export const sizes = () => (
  <Column>
    {Object.values(Size).map((v, i) => (
      <IconButton icon={<Icon.AddCircle />} size={v} key={i}>
        {v}
      </IconButton>
    ))}
  </Column>
);

export const types = () => (
  <Container>
    <IconButton icon={<Icon.AddCircle />} variant="primary">
      Primary
    </IconButton>
    <IconButton icon={<Icon.Close />} variant="outlined">
      Outlined
    </IconButton>
  </Container>
);

export const disabled = () => (
  <Container>
    <IconButton icon={<Icon.Add />} disabled>
      Disabled
    </IconButton>
  </Container>
);

export const iconOnly = () => {
  return (
    <Column>
      {Object.values(Size).map((v, i) => (
        <IconButton icon={<Icon.Add />} iconOnly size={v} key={i} />
      ))}
    </Column>
  );
};
