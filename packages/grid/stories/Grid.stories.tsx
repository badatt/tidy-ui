import React, { createContext, useState } from 'react';
import { AddIcon, amber, css, hsla, red, RemoveIcon, styled } from '@tidy-ui/commons';
import { Button, ButtonGroup, ButtonToolbar, Text } from '@tidy-ui/presentation';
import { Item, Grid } from '../src';
import { IGridProps, IItemProps } from '../src/types';

export default {
  component: Grid,
  title: 'Layout/Grid',
};

const StyledGrid = styled(Grid)<IGridProps>`
  margin-bottom: 2rem;
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

const TextWrap = styled.div<IItemProps>`
  ${({ theme: { isDark } }) =>
    isDark
      ? css`
          background-color: ${hsla(red[900], 0.2)};
          border: 1px dashed ${hsla(red[900], 0.4)};
        `
      : css`
          background-color: ${hsla(red[100], 0.8)};
          border: 1px dashed ${hsla(red[400], 0.5)};
        `}
`;

const StyledText = styled(Text)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

const StyledTextLabel = styled(Text)`
  position: absolute;
  transform: translate(-50%, 100%);
  top: 50%;
  left: 50%;
`;

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

const baseCount = 24;

const Ctx = createContext({ count: baseCount });

/** @internal */
const GridProvider = ({ children, size = baseCount }) => {
  const [count, setCount] = useState(size);

  /** @internal */
  const increment = () => setCount(count + 1);
  /** @internal */
  const decrement = () => count > 1 && setCount(count - 1);
  /** @internal */
  const reset = () => setCount(size || baseCount);
  return (
    <Ctx.Provider value={{ count }}>
      <div style={{ position: 'relative', marginBottom: '1rem' }}>
        <ButtonGroup>
          <Button variant="outlined" onClick={increment}>
            Add
          </Button>
          <Button variant="outlined" onClick={decrement}>
            Remove
          </Button>
          <Button variant="simple" tone="danger" onClick={reset}>
            Reset ({count})
          </Button>
        </ButtonGroup>
      </div>
      {children}
    </Ctx.Provider>
  );
};

export const basic = () => {
  return (
    <GridProvider>
      <Ctx.Consumer>
        {({ count }) => (
          <StyledGrid>
            {[...Array(count)].map((c, i) => (
              <Item key={i}>
                <TextWrap style={{ padding: '3rem' }}>
                  <StyledText v="h3">{i}</StyledText>
                </TextWrap>
              </Item>
            ))}
          </StyledGrid>
        )}
      </Ctx.Consumer>
    </GridProvider>
  );
};

export const fixed = () => {
  return (
    <GridProvider>
      <Ctx.Consumer>
        {({ count }) => (
          <StyledGrid fixed>
            {[...Array(count)].map((c, i) => (
              <Item key={i}>
                <TextWrap style={{ padding: '3rem' }}>
                  <StyledText v="h3">{i}</StyledText>
                </TextWrap>
              </Item>
            ))}
          </StyledGrid>
        )}
      </Ctx.Consumer>
    </GridProvider>
  );
};

export const gutter = () => {
  return (
    <GridProvider>
      <Ctx.Consumer>
        {({ count }) => (
          <StyledGrid gutter="5rem">
            {[...Array(count)].map((c, i) => (
              <Item key={i}>
                <TextWrap style={{ padding: '3rem' }}>
                  <StyledText v="h3">{i}</StyledText>
                </TextWrap>
              </Item>
            ))}
          </StyledGrid>
        )}
      </Ctx.Consumer>
    </GridProvider>
  );
};

export const spacing = () => {
  const [space, setSpace] = useState(8);
  const increment = () => setSpace(space + 4);
  const decrement = () => space > 4 && setSpace(space - 4);
  const reset = () => setSpace(8);
  return (
    <GridProvider>
      <ToolBar>
        <ButtonGroup>
          <Button variant="simple" tone="minor" onClick={increment}>
            Increase span
          </Button>
          <Button variant="simple" tone="minor" onClick={decrement}>
            Decrease span
          </Button>
          <Button variant="simple" tone="neutral" onClick={reset}>
            Reset ({space})
          </Button>
        </ButtonGroup>
      </ToolBar>
      <Ctx.Consumer>
        {({ count }) => (
          <StyledGrid spacing={space}>
            {[...Array(count)].map((c, i) => (
              <Item key={i}>
                <TextWrap style={{ padding: '3rem' }}>
                  <StyledText v="h3">{i}</StyledText>
                  <StyledTextLabel>spacing={space}</StyledTextLabel>
                </TextWrap>
              </Item>
            ))}
          </StyledGrid>
        )}
      </Ctx.Consumer>
    </GridProvider>
  );
};

export const customLayout = () => {
  const spanning: IItemProps = { xs: 12, sm: 8, md: 6, lg: 4, xl: 2 };
  const [span, setSpan] = useState(spanning);
  const increment = (s: string) => span[s] < 24 && setSpan({ ...span, [s]: span[s] + 1 });
  const decrement = (s: string) => span[s] > 1 && setSpan({ ...span, [s]: span[s] - 1 });
  const reset = () => setSpan(spanning);
  return (
    <GridProvider>
      <ToolBar>
        <ButtonToolbar>
          {Object.keys(spanning).map((v, i) => (
            <ButtonGroup key={i}>
              <Button variant="outlined" tone="neutral" onClick={() => decrement(v)}>
                <ToolBarIconWrap>
                  <RemoveIcon />
                </ToolBarIconWrap>
              </Button>
              <Button variant="outlined" disabled tone="neutral">
                {v}={span[v]}
              </Button>
              <Button variant="outlined" tone="neutral" onClick={() => increment(v)}>
                <ToolBarIconWrap>
                  <AddIcon />
                </ToolBarIconWrap>
              </Button>
            </ButtonGroup>
          ))}
          <Button variant="simple" tone="danger" onClick={reset}>
            Reset
          </Button>
        </ButtonToolbar>
      </ToolBar>
      <Ctx.Consumer>
        {({ count }) => (
          <StyledGrid>
            {[...Array(count)].map((c, i) => (
              <Item key={i} xs={span.xs} sm={span.sm} md={span.md} lg={span.lg} xl={span.xl}>
                <TextWrap style={{ padding: '3rem' }}>
                  <StyledText v="h3">{i}</StyledText>
                  <StyledTextLabel>
                    {span.xs},{span.sm},{span.md},{span.lg},{span.xl}
                  </StyledTextLabel>
                </TextWrap>
              </Item>
            ))}
          </StyledGrid>
        )}
      </Ctx.Consumer>
    </GridProvider>
  );
};
