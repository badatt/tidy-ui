import React, { useState } from 'react';
import { AddIcon, amber, css, hsla, RemoveIcon, styled } from '@tidy-ui/commons';
import { Container } from '../src';
import { IContainerProps } from '../src/types';
import { Button, ButtonGroup } from '@tidy-ui/presentation';
import { TScreen } from '@tidy-ui/types';

export default {
  component: Container,
  title: 'Layout/Container',
};

const InnerDiv = styled.div<IContainerProps>`
  height: 100vh;
  ${({ theme: { isDark } }) =>
    isDark
      ? css`
          background-color: ${hsla(amber[900], 0.2)};
          color: ${hsla(amber[300])}; ;
        `
      : css`
          background-color: ${hsla(amber[100], 0.8)};
          color: ${hsla(amber[900])};
        `}
`;

const Content = () => <InnerDiv></InnerDiv>;

const ToolBar = styled.div`
  display: block;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const ToolBarIconWrap = styled.i`
  height: 1rem;
  width: 1rem;
`;

export const basic = () => (
  <Container>
    <Content />
  </Container>
);

export const fixed = () => (
  <Container fixed>
    <Content />
  </Container>
);

export const maxWidth = () => {
  const widths = ['xs', 'sm', 'md', 'lg', 'xl'];
  const [maxWidth, setMaxWidth] = useState(2);
  const increment = () => maxWidth < 4 && setMaxWidth(maxWidth + 1);
  const decrement = () => maxWidth > 0 && setMaxWidth(maxWidth - 1);
  const reset = () => setMaxWidth(2);
  return (
    <>
      <ToolBar>
        <ButtonGroup>
          <ButtonGroup>
            <Button variant="outlined" onClick={decrement}>
              <ToolBarIconWrap>
                <RemoveIcon />
              </ToolBarIconWrap>
            </Button>
            <Button variant="outlined" disabled tone="neutral">
              {widths[maxWidth]}
            </Button>
            <Button variant="outlined" onClick={increment}>
              <ToolBarIconWrap>
                <AddIcon />
              </ToolBarIconWrap>
            </Button>
          </ButtonGroup>
        </ButtonGroup>
      </ToolBar>
      <Container maxWidth={widths[maxWidth] as TScreen}>
        <Content />
      </Container>
    </>
  );
};

export const noGutters = () => (
  <Container gutter="0">
    <Content />
  </Container>
);
