import React, { useState } from 'react';
import { color, css, hsla, Icon, styled } from '@tidy-ui/commons';
import { Screen } from '@tidy-ui/types';
import { Container } from '../src';
import { IContainerProps } from '../src/types';
import { Button, ButtonGroup } from '@tidy-ui/button';
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
          background-color: ${hsla(color.amber[900], 0.2)};
          color: ${hsla(color.amber[300])}; ;
        `
      : css`
          background-color: ${hsla(color.amber[100], 0.8)};
          color: ${hsla(color.amber[900])};
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
  const [maxWidth, setMaxWidth] = useState(Screen.md);
  const increment = () => maxWidth < 4 && setMaxWidth(maxWidth + 1);
  const decrement = () => maxWidth > 0 && setMaxWidth(maxWidth - 1);
  return (
    <>
      <ToolBar>
        <ButtonGroup>
          <ButtonGroup>
            <Button variant="outlined" onClick={decrement} disabled={maxWidth === 0}>
              <ToolBarIconWrap>
                <Icon.Remove />
              </ToolBarIconWrap>
            </Button>
            <Button variant="outlined" disabled tone="neutral">
              {Screen[maxWidth]}
            </Button>
            <Button variant="outlined" onClick={increment} disabled={maxWidth === 4}>
              <ToolBarIconWrap>
                <Icon.Add />
              </ToolBarIconWrap>
            </Button>
          </ButtonGroup>
        </ButtonGroup>
      </ToolBar>
      <Container maxWidth={Screen[maxWidth] as TScreen}>
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
