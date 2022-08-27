import React, { useState } from 'react';
import { Button, ButtonGroup, Text } from '@tidy-ui/presentation';
import { FlexBox, FlexItem } from '../src';
import { IFlexItemProps, TAlignSelf } from '../src/types';
import { Ctx, FlexBoxProvider } from './FlexBoxProvider';
import { Divider, StyledFlexBox, StyledFlexItem, StyledText, StyledTextLabel } from './components';

export default {
  component: FlexItem,
  title: 'Layout/Flexbox/FlexItem',
};

const label = 'h3';
const height = '25rem';

export const basic = () => {
  return (
    <FlexBoxProvider>
      <Ctx.Consumer>
        {({ count }) => (
          <StyledFlexBox h={height}>
            {[...Array(count)].map((c, i) => (
              <StyledFlexItem key={i} style={{ padding: '3rem' }}>
                <StyledText v={label}>{i}</StyledText>
              </StyledFlexItem>
            ))}
          </StyledFlexBox>
        )}
      </Ctx.Consumer>
    </FlexBoxProvider>
  );
};

export const span = () => {
  type SpanType = Required<IFlexItemProps>['span'];
  const [span, setSpan] = useState<SpanType>(4);
  const increment = () => setSpan((span + 1) as SpanType);
  const decrement = () => span > 0 && setSpan((span - 1) as SpanType);
  const reset = () => setSpan(4);
  const st = span > 0 ? { padding: '3rem 0' } : { padding: '3rem 3rem' };
  return (
    <FlexBoxProvider size={4}>
      <FlexBox jsc="flex-end">
        <ButtonGroup>
          <Button variant="simple" tone="minor" onClick={increment}>
            Increase span
          </Button>
          <Button variant="simple" tone="minor" onClick={decrement}>
            Decrease span
          </Button>
          <Button variant="simple" tone="neutral" onClick={reset}>
            Reset ({span})
          </Button>
        </ButtonGroup>
      </FlexBox>
      <Ctx.Consumer>
        {({ count }) => (
          <StyledFlexBox h={height}>
            {[...Array(count)].map((c, i) => (
              <StyledFlexItem key={i} span={span as SpanType} style={st}>
                <StyledText v={label}>{i}</StyledText>
                <StyledTextLabel>span={span}</StyledTextLabel>
              </StyledFlexItem>
            ))}
          </StyledFlexBox>
        )}
      </Ctx.Consumer>
    </FlexBoxProvider>
  );
};

export const flexGrow = () => {
  return (
    <FlexBoxProvider size={4}>
      <Ctx.Consumer>
        {({ count }) => (
          <StyledFlexBox h={height}>
            {[...Array(count)].map((c, i) => {
              const grow = Math.floor(Math.random() * Array(count).length);
              return (
                <StyledFlexItem fgo={grow} key={i} style={{ padding: '3rem' }}>
                  <StyledText v={label}>{i}</StyledText>
                  <StyledTextLabel v="caption">grow={grow}</StyledTextLabel>
                </StyledFlexItem>
              );
            })}
          </StyledFlexBox>
        )}
      </Ctx.Consumer>
    </FlexBoxProvider>
  );
};

export const order = () => {
  return (
    <FlexBoxProvider size={6}>
      <Ctx.Consumer>
        {({ count }) => (
          <StyledFlexBox h={height}>
            {[...Array(count)].map((c, i) => {
              const order = Math.floor(Math.random() * Array(count).length);
              return (
                <StyledFlexItem ord={order} key={i} style={{ padding: '3rem' }}>
                  <StyledText v={label}>{i}</StyledText>
                  <StyledTextLabel v="caption">order={order}</StyledTextLabel>
                </StyledFlexItem>
              );
            })}
          </StyledFlexBox>
        )}
      </Ctx.Consumer>
    </FlexBoxProvider>
  );
};

export const alignSelf = () => {
  const variants = [
    'auto',
    'normal',
    'stretch',
    'baseline',
    'first baseline',
    'last baseline',
    'unsafe',
    'safe',
    'center',
    'start',
    'end',
    'self-start',
    'self-end',
    'flex-start',
    'flex-end',
  ];
  return (
    <>
      {variants.map((v) => (
        <FlexBoxProvider key={v} size={10}>
          <Text v="h6">{v}</Text>
          <Ctx.Consumer>
            {({ count }) => (
              <StyledFlexBox h={height} alc="normal" jsc="normal">
                {[...Array(count)].map((c, i) => {
                  const als = i % 2 == 0 ? (v as TAlignSelf) : 'normal';
                  return (
                    <StyledFlexItem key={i} als={als} style={{ padding: '3rem' }}>
                      <StyledText v={label}>{i}</StyledText>
                      <StyledTextLabel v="caption" tnc>
                        {als}
                      </StyledTextLabel>
                    </StyledFlexItem>
                  );
                })}
              </StyledFlexBox>
            )}
          </Ctx.Consumer>
          <Divider margin="1rem" />
        </FlexBoxProvider>
      ))}
    </>
  );
};

export const fullWidth = () => {
  return (
    <FlexBoxProvider>
      <Ctx.Consumer>
        {({ count }) => (
          <StyledFlexBox h={height}>
            {[...Array(count)].map((c, i) => (
              <StyledFlexItem key={i} style={{ padding: '3rem' }} fuw>
                <StyledText v={label}>{i}</StyledText>
              </StyledFlexItem>
            ))}
          </StyledFlexBox>
        )}
      </Ctx.Consumer>
    </FlexBoxProvider>
  );
};
