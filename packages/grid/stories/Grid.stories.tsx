import React, { createContext, useState } from 'react';
import { color, css, hsla, Icon, styled } from '../../commons/src';
import { Button, ButtonGroup, ButtonCluster, IconButton } from '../../button/src';
import { Divider } from '../../divider/src';
import { Stack } from '../../stack/src';
import { Text } from '../../text/src';
import { Grid, GridItem } from '../src';
import { IGridProps, IItemProps } from '../src/types';

export default {
  component: Grid,
  title: 'Layout/Grid',
};

const StyledGrid = styled(Grid)<IGridProps>`
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

const TextWrap = styled.div<IItemProps>`
  ${({ theme: { isDark } }) =>
    isDark
      ? css`
          background-color: ${hsla(color.red[900], 0.2)};
          border: 1px dashed ${hsla(color.red[900], 0.4)};
        `
      : css`
          background-color: ${hsla(color.red[100], 0.8)};
          border: 1px dashed ${hsla(color.red[400], 0.5)};
        `}
`;

const StyledText = styled(Text.H3)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

const StyledTextLabel = styled(Text.Caption)`
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
        <ButtonCluster>
          <ButtonGroup>
            <Button onClick={increment} width="4rem">
              Add
            </Button>
            <Button onClick={decrement} width="4rem">
              Remove
            </Button>
          </ButtonGroup>
          <Button variant="simple" tone="danger" onClick={reset}>
            Reset ({count})
          </Button>
        </ButtonCluster>
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
              <GridItem key={i}>
                <TextWrap style={{ padding: '3rem' }}>
                  <StyledText>{i}</StyledText>
                </TextWrap>
              </GridItem>
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
          <StyledGrid isFixed>
            {[...Array(count)].map((c, i) => (
              <GridItem key={i}>
                <TextWrap style={{ padding: '3rem' }}>
                  <StyledText>{i}</StyledText>
                </TextWrap>
              </GridItem>
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
              <GridItem key={i}>
                <TextWrap style={{ padding: '3rem' }}>
                  <StyledText>{i}</StyledText>
                </TextWrap>
              </GridItem>
            ))}
          </StyledGrid>
        )}
      </Ctx.Consumer>
    </GridProvider>
  );
};

export const gap = () => {
  const [space, setSpace] = useState(8);
  const increment = () => setSpace(space + 4);
  const decrement = () => space > 4 && setSpace(space - 4);
  const reset = () => setSpace(8);
  return (
    <GridProvider>
      <ToolBar>
        <ButtonGroup>
          <Button variant="simple" tone="minor" onClick={increment}>
            Increase gap
          </Button>
          <Button variant="simple" tone="minor" onClick={decrement}>
            Decrease gap
          </Button>
          <Button variant="simple" tone="neutral" onClick={reset}>
            Reset ({space})
          </Button>
        </ButtonGroup>
      </ToolBar>
      <Ctx.Consumer>
        {({ count }) => (
          <StyledGrid gap={space}>
            {[...Array(count)].map((c, i) => (
              <GridItem key={i}>
                <TextWrap style={{ padding: '3rem' }}>
                  <StyledText>{i}</StyledText>
                  <StyledTextLabel>gap={space}</StyledTextLabel>
                </TextWrap>
              </GridItem>
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
        <Stack divider={<Divider isVertical />} gap="1rem">
          {Object.keys(spanning).map((v, i) => (
            <ButtonCluster key={i}>
              <IconButton
                icon={<Icon ele={<Icon.Remove />} height="1rem" width="1rem" />}
                variant="outlined"
                onClick={() => decrement(v)}
                disabled={span[v] === 1}
                girth="xs"
              />
              <Text.Body1 style={{ width: '3rem' }} ctr>
                {v}={span[v]}
              </Text.Body1>
              <IconButton
                icon={<Icon ele={<Icon.Add />} height="1rem" width="1rem" />}
                variant="outlined"
                onClick={() => increment(v)}
                disabled={span[v] === 24}
                girth="xs"
              />
            </ButtonCluster>
          ))}
          <Button variant="simple" tone="danger" onClick={reset}>
            Reset
          </Button>
        </Stack>
      </ToolBar>
      <Ctx.Consumer>
        {({ count }) => (
          <StyledGrid>
            {[...Array(count)].map((c, i) => (
              <GridItem key={i} xs={span.xs} sm={span.sm} md={span.md} lg={span.lg} xl={span.xl}>
                <TextWrap style={{ padding: '3rem' }}>
                  <StyledText>{i}</StyledText>
                  <StyledTextLabel>
                    {span.xs},{span.sm},{span.md},{span.lg},{span.xl}
                  </StyledTextLabel>
                </TextWrap>
              </GridItem>
            ))}
          </StyledGrid>
        )}
      </Ctx.Consumer>
    </GridProvider>
  );
};

export const customMargin = () => {
  return (
    <GridProvider>
      <Ctx.Consumer>
        {({ count }) => (
          <>
            <StyledGrid margin="0 0 3rem 0">
              {[...Array(count)].map((c, i) => (
                <GridItem key={i}>
                  <TextWrap style={{ padding: '3rem' }}>
                    <StyledText>{i}</StyledText>
                  </TextWrap>
                </GridItem>
              ))}
            </StyledGrid>
            <StyledGrid>
              {[...Array(count)].map((c, i) => (
                <GridItem key={i}>
                  <TextWrap style={{ padding: '3rem' }}>
                    <StyledText>{i}</StyledText>
                  </TextWrap>
                </GridItem>
              ))}
            </StyledGrid>
          </>
        )}
      </Ctx.Consumer>
    </GridProvider>
  );
};
