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
      {[...Array(5)].map((c, i) => (
        <Button variant="outlined" key={i}>
          Button {i}
        </Button>
      ))}
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
      {[...Array(5)].map((c, i) => (
        <Button variant="outlined" key={i}>
          Button {i}
        </Button>
      ))}
    </ButtonGroup>
  </Container>
);

export const disabled = () => (
  <Container>
    <ButtonGroup disabled>
      {[...Array(5)].map((c, i) => (
        <Button variant="outlined" key={i}>
          Button {i}
        </Button>
      ))}
    </ButtonGroup>
  </Container>
);

export const customDimensions = () => (
  <Container>
    <ButtonGroup h="5rem" w="30rem">
      {[...Array(5)].map((c, i) => (
        <Button variant="outlined" key={i}>
          Button {i}
        </Button>
      ))}
    </ButtonGroup>
  </Container>
);

export const others = () => (
  <Container>
    <Column>
      <ButtonGroup>
        {[...Array(5)].map((c, i) => (
          <Button variant="primary" key={i}>
            primary {i}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup>
        {[...Array(5)].map((c, i) => (
          <Button variant="outlined" key={i}>
            outlined {i}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup unified>
        {[...Array(5)].map((c, i) => (
          <Button variant="outlined" key={i}>
            unified {i}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup>
        {[...Array(5)].map((c, i) => (
          <Button variant="simple" key={i}>
            simple {i}
          </Button>
        ))}
      </ButtonGroup>
      <Container>
        <ButtonGroup vertical>
          {[...Array(5)].map((c, i) => (
            <Button variant="primary" key={i}>
              primary {i}
            </Button>
          ))}
        </ButtonGroup>
        <ButtonGroup vertical>
          {[...Array(5)].map((c, i) => (
            <Button variant="outlined" key={i}>
              outlined {i}
            </Button>
          ))}
        </ButtonGroup>
        <ButtonGroup unified vertical>
          {[...Array(5)].map((c, i) => (
            <Button variant="outlined" key={i}>
              unified {i}
            </Button>
          ))}
        </ButtonGroup>
        <ButtonGroup vertical>
          {[...Array(5)].map((c, i) => (
            <Button variant="simple" key={i}>
              simple {i}
            </Button>
          ))}
        </ButtonGroup>
      </Container>
    </Column>
  </Container>
);
