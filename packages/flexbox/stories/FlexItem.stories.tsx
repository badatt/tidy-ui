import React from 'react';
import { Text } from '@tidy-ui/presentation';
import { FlexItem } from '../src';
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
          <StyledFlexBox h="25rem">
            {[...Array(count)].map((c, i) => (
              <StyledFlexItem key={i}>
                <StyledText v={label}>{i}</StyledText>
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
          <StyledFlexBox h="25rem">
            {[...Array(count)].map((c, i) => {
              const grow = Math.floor(Math.random() * Array(count).length);
              return (
                <StyledFlexItem fgo={grow} key={i}>
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
          <StyledFlexBox h="25rem">
            {[...Array(count)].map((c, i) => {
              const order = Math.floor(Math.random() * Array(count).length);
              return (
                <StyledFlexItem ord={order} key={i}>
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
                    <StyledFlexItem key={i} als={als}>
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
