import React from 'react';
import { styled } from '@tidy-ui/commons';
import { Button, ButtonGroup } from '../src';

export default {
  component: ButtonGroup,
  title: 'Presentation/Button/ButtonGroup',
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
    <ButtonGroup stretched>
      <Button variant="outlined">button 1</Button>
      <Button variant="outlined">button 2</Button>
    </ButtonGroup>
  </Container>
);

export const verticalAligned = () => (
  <Container>
    <ButtonGroup vertical>
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
    <ButtonGroup disabled>
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
        <Button variant="primary">primary 1</Button>
        <Button variant="primary">primary 2</Button>
        <Button variant="primary">primary 3</Button>
        <Button variant="primary">primary 4</Button>
        <Button variant="primary">primary 5</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outlined">outlined 1</Button>
        <Button variant="outlined">outlined 2</Button>
        <Button variant="outlined">outlined 3</Button>
        <Button variant="outlined">outlined 4</Button>
        <Button variant="outlined">outlined 5</Button>
      </ButtonGroup>
      <ButtonGroup unified>
        <Button variant="outlined">unified 1</Button>
        <Button variant="outlined">unified 2</Button>
        <Button variant="outlined">unified 3</Button>
        <Button variant="outlined">unified 4</Button>
        <Button variant="outlined">unified 5</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="simple">simple 1</Button>
        <Button variant="simple">simple 2</Button>
        <Button variant="simple">simple 3</Button>
        <Button variant="simple">simple 4</Button>
        <Button variant="simple">simple 5</Button>
      </ButtonGroup>
      <Container>
        <ButtonGroup vertical>
          <Button variant="primary">primary 1</Button>
          <Button variant="primary">primary 2</Button>
          <Button variant="primary">primary 3</Button>
          <Button variant="primary">primary 4</Button>
          <Button variant="primary">primary 5</Button>
        </ButtonGroup>
        <ButtonGroup vertical>
          <Button variant="outlined">outlined 1</Button>
          <Button variant="outlined">outlined 2</Button>
          <Button variant="outlined">outlined 3</Button>
          <Button variant="outlined">outlined 4</Button>
          <Button variant="outlined">outlined 5</Button>
        </ButtonGroup>
        <ButtonGroup unified vertical>
          <Button variant="outlined">unified 1</Button>
          <Button variant="outlined">unified 2</Button>
          <Button variant="outlined">unified 3</Button>
          <Button variant="outlined">unified 4</Button>
          <Button variant="outlined">unified 5</Button>
        </ButtonGroup>
        <ButtonGroup vertical>
          <Button variant="simple">simple 1</Button>
          <Button variant="simple">simple 2</Button>
          <Button variant="simple">simple 3</Button>
          <Button variant="simple">simple 4</Button>
          <Button variant="simple">simple 5</Button>
        </ButtonGroup>
      </Container>
    </Column>
  </Container>
);
