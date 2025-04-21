import React, { useState } from 'react';
import { color, css, hsla, Icon, styled } from '../../commons/src';
import { Screen, TScreen } from '../../types/src';
import { Container } from '../src';
import { IContainerProps } from '../src/types';
import { IconButton, ButtonCluster } from '../../button/src';
import { Text } from '../../text/src';

export default {
  component: Container,
  title: 'Layout/Container',
};

const InnerDiv = styled.div<IContainerProps>`
  height: 100%;
  ${({ theme: { isDark } }) =>
    isDark
      ? css`
          background-color: ${hsla(color.amber[900], 0.2)};
          color: ${hsla(color.amber[300])};
        `
      : css`
          background-color: ${hsla(color.amber[100], 0.8)};
          color: ${hsla(color.amber[900])};
        `}
`;

const Content = () => <InnerDiv />;

const ToolBar = styled.div`
  display: block;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const basic = () => (
  <Container height="100%">
    <Content />
  </Container>
);

export const fixed = () => (
  <Container isFixed height="100%">
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
        <ButtonCluster>
          <IconButton
            icon={<Icon.Remove />}
            variant="outlined"
            onClick={decrement}
            disabled={maxWidth === 0}
            isIconOnly
            girth="sm"
          />
          <Text.Body1 style={{ width: '2rem' }} ctr>
            {Screen[maxWidth]}
          </Text.Body1>
          <IconButton
            icon={<Icon.Add />}
            variant="outlined"
            onClick={increment}
            disabled={maxWidth === 4}
            isIconOnly
            girth="sm"
          />
        </ButtonCluster>
      </ToolBar>
      <Container maxWidth={Screen[maxWidth] as TScreen} height="100%">
        <Content />
      </Container>
    </>
  );
};

export const noGutters = () => (
  <Container gutter="0" height="100%">
    <Content />
  </Container>
);
