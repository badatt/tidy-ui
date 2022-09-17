import React, { useState } from 'react';
import { Button, ButtonGroup, ButtonCluster } from '@tidy-ui/button';
import { Text } from '@tidy-ui/text';
import { FlexBox } from '../src';
import { AlignSelf, IFlexItemProps, TAlignSelf } from '../src/types';
import { Ctx, FlexBoxProvider } from './FlexBoxProvider';
import { Divider, StyledFlexBox, StyledFlexItem, StyledText, StyledTextLabel } from './components';

export default {
  component: FlexBox.Item,
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
        <ButtonCluster>
          <ButtonGroup>
            <Button variant="simple" tone="minor" onClick={increment}>
              Increase span
            </Button>
            <Button variant="simple" tone="minor" onClick={decrement}>
              Decrease span
            </Button>
          </ButtonGroup>
          <Button variant="simple" tone="neutral" onClick={reset}>
            Reset ({span})
          </Button>
        </ButtonCluster>
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
              const grow = count === 4 ? 1 : Math.floor(Math.random() * Array(count).length);
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
              const order = count === 6 ? 0 : Math.floor(Math.random() * Array(count).length);
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
  return (
    <>
      {Object.keys(AlignSelf)
        .filter((i) => !isNaN(Number(i)))
        .map((v) => (
          <FlexBoxProvider key={v} size={10}>
            <Text v="h6">{AlignSelf[v]}</Text>
            <Ctx.Consumer>
              {({ count }) => (
                <StyledFlexBox h={height} alc="normal" jsc="normal">
                  {[...Array(count)].map((c, i) => {
                    const als = i % 2 == 0 ? AlignSelf[v] : 'normal';
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
