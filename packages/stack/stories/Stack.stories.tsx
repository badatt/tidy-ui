import React from 'react';
import { Divider } from '../../divider/src';
import { Stack } from '../src';
import { StackAlign, StackJustify, StackOrder } from '../../types/src';
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
    {Object.keys(StackOrder)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <>
          <StackProvider key={i}>
            <Text.h6>{StackOrder[v]}</Text.h6>
            <Ctx.Consumer>
              {({ count }) => (
                <Stack order={StackOrder[v]}>
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
    {Object.keys(StackAlign)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <>
          <StackProvider key={i}>
            <Text.h6>{StackAlign[v]}</Text.h6>
            <Ctx.Consumer>
              {({ count }) => (
                <Stack align={StackAlign[v]} height="10rem">
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
    {Object.keys(StackJustify)
      .filter((i) => !isNaN(Number(i)))
      .map((v, i) => (
        <>
          <StackProvider key={i}>
            <Text.h6>{StackJustify[v]}</Text.h6>
            <Ctx.Consumer>
              {({ count }) => (
                <Stack justify={StackJustify[v]}>
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
