import React from 'react';
import { Icon, styled } from '../../commons/src';
import { IconButton } from '../src';
import { Size, Tone } from '../../types/src';

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
      {Object.values(Tone)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <IconButton icon={<Icon.AddCircle />} tone={Tone[v]} key={i}>
            {Tone[v]}
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
    {Object.values(Size)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <IconButton icon={<Icon.AddCircle />} size={Size[v]} key={i}>
          {Size[v]}
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

export const customDimension = () => (
  <Container>
    <IconButton icon={<Icon.Add />} h="3rem" w="10rem">
      Disabled
    </IconButton>
  </Container>
);

export const iconOnly = () => {
  return (
    <Column>
      {Object.values(Size)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <IconButton icon={<Icon.Add />} iconOnly size={Size[v]} key={i} />
        ))}
    </Column>
  );
};
