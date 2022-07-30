import React from 'react';
import { styled } from '@tidy-ui/theme';
import { Button, ButtonGroup } from '../src';

export default {
  component: ButtonGroup,
  title: 'Components/Button/ButtonGroup',
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
    <ButtonGroup>
      <Button>button 1</Button>
      <Button>button 2</Button>
      <Button>button 3</Button>
      <Button>button 4</Button>
      <Button>button 5</Button>
    </ButtonGroup>
  </Container>
);

export const stretched = () => (
  <Container>
    <ButtonGroup isStretched>
      <Button withType="outlined">button 1</Button>
      <Button withType="outlined">button 2</Button>
    </ButtonGroup>
  </Container>
);

export const verticalAligned = () => (
  <Container>
    <ButtonGroup isVertical>
      <Button>button 1</Button>
      <Button>button 2</Button>
      <Button>button 3</Button>
      <Button>button 4</Button>
      <Button>button 5</Button>
    </ButtonGroup>
  </Container>
);

export const disabled = () => (
  <Container>
    <ButtonGroup isDisabled>
      <Button>button 1</Button>
      <Button>button 2</Button>
      <Button>button 3</Button>
      <Button>button 4</Button>
      <Button>button 5</Button>
    </ButtonGroup>
  </Container>
);

export const others = () => (
  <Container>
    <Column>
      <ButtonGroup>
        <Button withType="primary">primary 1</Button>
        <Button withType="primary">primary 2</Button>
        <Button withType="primary">primary 3</Button>
        <Button withType="primary">primary 4</Button>
        <Button withType="primary">primary 5</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button withType="outlined">outlined 1</Button>
        <Button withType="outlined">outlined 2</Button>
        <Button withType="outlined">outlined 3</Button>
        <Button withType="outlined">outlined 4</Button>
        <Button withType="outlined">outlined 5</Button>
      </ButtonGroup>
      <ButtonGroup isUnified>
        <Button withType="outlined">unified 1</Button>
        <Button withType="outlined">unified 2</Button>
        <Button withType="outlined">unified 3</Button>
        <Button withType="outlined">unified 4</Button>
        <Button withType="outlined">unified 5</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button withType="simple">simple 1</Button>
        <Button withType="simple">simple 2</Button>
        <Button withType="simple">simple 3</Button>
        <Button withType="simple">simple 4</Button>
        <Button withType="simple">simple 5</Button>
      </ButtonGroup>
      <Container>
        <ButtonGroup isVertical>
          <Button withType="primary">primary 1</Button>
          <Button withType="primary">primary 2</Button>
          <Button withType="primary">primary 3</Button>
          <Button withType="primary">primary 4</Button>
          <Button withType="primary">primary 5</Button>
        </ButtonGroup>
        <ButtonGroup isVertical>
          <Button withType="outlined">outlined 1</Button>
          <Button withType="outlined">outlined 2</Button>
          <Button withType="outlined">outlined 3</Button>
          <Button withType="outlined">outlined 4</Button>
          <Button withType="outlined">outlined 5</Button>
        </ButtonGroup>
        <ButtonGroup isUnified isVertical>
          <Button withType="outlined">unified 1</Button>
          <Button withType="outlined">unified 2</Button>
          <Button withType="outlined">unified 3</Button>
          <Button withType="outlined">unified 4</Button>
          <Button withType="outlined">unified 5</Button>
        </ButtonGroup>
        <ButtonGroup isVertical>
          <Button withType="simple">simple 1</Button>
          <Button withType="simple">simple 2</Button>
          <Button withType="simple">simple 3</Button>
          <Button withType="simple">simple 4</Button>
          <Button withType="simple">simple 5</Button>
        </ButtonGroup>
      </Container>
    </Column>
  </Container>
);
