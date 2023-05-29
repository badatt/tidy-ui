import React from 'react';
import { Divider } from '../../divider/src';
import { Stack } from '../src';
import { Align, Justify, Order } from '../src/types';
import { StackProvider, Ctx } from './StackProvider';
import { StackItem, StyledText } from './components';
import { Text } from '../../text/src';

export default {
  component: Stack,
  title: 'Layout/Stack',
};

export const basic = () => (
  <StackProvider>
    <Ctx.Consumer>
      {({ count }) => (
        <Stack>
          {[...Array(count)].map((v, i) => (
            <StackItem key={i}>
              <StyledText>{i}</StyledText>
            </StackItem>
          ))}
        </Stack>
      )}
    </Ctx.Consumer>
  </StackProvider>
);

export const divider = () => (
  <StackProvider>
    <Ctx.Consumer>
      {({ count }) => (
        <Stack divider={<Divider isVertical />}>
          {[...Array(count)].map((v, i) => (
            <StackItem key={i}>
              <StyledText>{i}</StyledText>
            </StackItem>
          ))}
        </Stack>
      )}
    </Ctx.Consumer>
  </StackProvider>
);

export const gap = () => (
  <StackProvider>
    <Ctx.Consumer>
      {({ count }) => (
        <Stack gap="1rem">
          {[...Array(count)].map((v, i) => (
            <StackItem key={i}>
              <StyledText>{i}</StyledText>
            </StackItem>
          ))}
        </Stack>
      )}
    </Ctx.Consumer>
  </StackProvider>
);

export const fold = () => (
  <StackProvider size={24}>
    <Ctx.Consumer>
      {({ count }) => (
        <Stack canFold>
          {[...Array(count)].map((v, i) => (
            <StackItem key={i}>
              <StyledText>{i}</StyledText>
            </StackItem>
          ))}
        </Stack>
      )}
    </Ctx.Consumer>
  </StackProvider>
);

export const order = () => (
  <>
    {Object.keys(Order)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <>
          <StackProvider key={i}>
            <Text.h6>{Order[v]}</Text.h6>
            <Ctx.Consumer>
              {({ count }) => (
                <Stack order={Order[v]}>
                  {[...Array(count)].map((v, i) => (
                    <StackItem key={i}>
                      <StyledText>{i}</StyledText>
                    </StackItem>
                  ))}
                </Stack>
              )}
            </Ctx.Consumer>
          </StackProvider>
          <Divider margin="2rem" />
        </>
      ))}
  </>
);

export const align = () => (
  <>
    {Object.keys(Align)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <>
          <StackProvider key={i}>
            <Text.h6>{Align[v]}</Text.h6>
            <Ctx.Consumer>
              {({ count }) => (
                <Stack align={Align[v]} height="10rem">
                  {[...Array(count)].map((v, i) => (
                    <StackItem key={i}>
                      <StyledText>{i}</StyledText>
                    </StackItem>
                  ))}
                </Stack>
              )}
            </Ctx.Consumer>
          </StackProvider>
          <Divider margin="2rem" />
        </>
      ))}
  </>
);

export const justify = () => (
  <>
    {Object.keys(Justify)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <>
          <StackProvider key={i}>
            <Text.h6>{Justify[v]}</Text.h6>
            <Ctx.Consumer>
              {({ count }) => (
                <Stack justify={Justify[v]}>
                  {[...Array(count)].map((v, i) => (
                    <StackItem key={i}>
                      <StyledText>{i}</StyledText>
                    </StackItem>
                  ))}
                </Stack>
              )}
            </Ctx.Consumer>
          </StackProvider>
          <Divider margin="2rem" />
        </>
      ))}
  </>
);

export const customSize = () => (
  <StackProvider>
    <Ctx.Consumer>
      {({ count }) => (
        <Stack canFold height="25rem" width="75rem" align="baseline" gap="0.5rem" style={{ border: '1px dashed gray' }}>
          {[...Array(count)].map((v, i) => (
            <StackItem key={i}>
              <StyledText>{i}</StyledText>
            </StackItem>
          ))}
        </Stack>
      )}
    </Ctx.Consumer>
  </StackProvider>
);
