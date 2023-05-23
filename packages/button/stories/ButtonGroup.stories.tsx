import React from 'react';
import { FlexBox } from '../../flexbox/src';
import { Button, ButtonGroup, IconButton } from '../src';
import { Icon } from '../../commons/src';

export default {
  component: ButtonGroup,
  title: 'Presentation/Button/ButtonGroup',
};

export const basic = () => (
  <ButtonGroup>
    {[...Array(5)].map((c, i) => (
      <Button key={i}>Button {i}</Button>
    ))}
    <IconButton icon={<Icon.AddCircle />}></IconButton>
  </ButtonGroup>
);

export const stretched = () => (
  <ButtonGroup isStretched>
    <Button>button 1</Button>
    <Button>button 2</Button>
  </ButtonGroup>
);

export const verticalAligned = () => (
  <FlexBox>
    <ButtonGroup isVertical>
      {[...Array(5)].map((c, i) => (
        <Button key={i}>Button {i}</Button>
      ))}
    </ButtonGroup>
  </FlexBox>
);

export const disabled = () => (
  <ButtonGroup disabled>
    {[...Array(5)].map((c, i) => (
      <Button key={i}>Button {i}</Button>
    ))}
  </ButtonGroup>
);

export const others = () => (
  <FlexBox gap="1rem">
    <FlexBox gap="1rem" fld="column">
      <ButtonGroup>
        {[...Array(5)].map((c, i) => (
          <Button variant="primary" key={i}>
            primary {i}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup>
        {[...Array(5)].map((c, i) => (
          <Button key={i}>outlined {i}</Button>
        ))}
      </ButtonGroup>
      <ButtonGroup isUnified>
        {[...Array(5)].map((c, i) => (
          <Button key={i}>unified {i}</Button>
        ))}
      </ButtonGroup>
      <ButtonGroup>
        {[...Array(5)].map((c, i) => (
          <Button variant="simple" key={i}>
            simple {i}
          </Button>
        ))}
      </ButtonGroup>
      <FlexBox gap="1rem">
        <ButtonGroup isVertical>
          {[...Array(5)].map((c, i) => (
            <Button variant="primary" key={i}>
              primary {i}
            </Button>
          ))}
        </ButtonGroup>
        <ButtonGroup isVertical>
          {[...Array(5)].map((c, i) => (
            <Button key={i}>outlined {i}</Button>
          ))}
        </ButtonGroup>
        <ButtonGroup isUnified isVertical>
          {[...Array(5)].map((c, i) => (
            <Button key={i}>unified {i}</Button>
          ))}
        </ButtonGroup>
        <ButtonGroup isVertical>
          {[...Array(5)].map((c, i) => (
            <Button variant="simple" key={i}>
              simple {i}
            </Button>
          ))}
        </ButtonGroup>
      </FlexBox>
    </FlexBox>
  </FlexBox>
);
