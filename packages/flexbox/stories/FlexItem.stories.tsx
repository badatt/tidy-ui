import React from 'react';
import { Button, ButtonGroup, ButtonCluster } from '../../button/src';
import { Text } from '../../text/src';
import { Divider } from '../../divider/src';
import { AlignSelf } from '../../types/src';
import { FlexBox, FlexItem } from '../src';
import { IFlexItemProps } from '../src/types';
import { Ctx, FlexBoxProvider } from './FlexBoxProvider';
import { StyledFlexBox, StyledFlexItem, StyledText, StyledTextLabel } from './components';

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
          <StyledFlexBox height={height}>
            {[...Array(count)].map((c, i) => (
              <StyledFlexItem key={i} style={{ padding: '3rem' }}>
                <StyledText>{i}</StyledText>
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
  const [span, setSpan] = React.useState<SpanType>(4);
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
          <StyledFlexBox height={height}>
            {[...Array(count)].map((c, i) => (
              <StyledFlexItem key={i} span={span as SpanType} style={st}>
                <StyledText>{i}</StyledText>
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
          <StyledFlexBox height={height}>
            {[...Array(count)].map((c, i) => {
              const grow = count === 4 ? 1 : Math.floor(Math.random() * Array(count).length);
              return (
                <StyledFlexItem fgo={grow} key={i} style={{ padding: '3rem' }}>
                  <StyledText>{i}</StyledText>
                  <StyledTextLabel>grow={grow}</StyledTextLabel>
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
          <StyledFlexBox height={height}>
            {[...Array(count)].map((c, i) => {
              const order = count === 6 ? 0 : Math.floor(Math.random() * Array(count).length);
              return (
                <StyledFlexItem ord={order} key={i} style={{ padding: '3rem' }}>
                  <StyledText>{i}</StyledText>
                  <StyledTextLabel>order={order}</StyledTextLabel>
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
            <Text.H5>{AlignSelf[v]}</Text.H5>
            <Ctx.Consumer>
              {({ count }) => (
                <StyledFlexBox height={height} alc="normal" jsc="normal">
                  {[...Array(count)].map((c, i) => {
                    const als = i % 2 == 0 ? AlignSelf[v] : 'normal';
                    return (
                      <StyledFlexItem key={i} als={als} style={{ padding: '3rem' }}>
                        <StyledText>{i}</StyledText>
                        <StyledTextLabel tnc>{als}</StyledTextLabel>
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
          <StyledFlexBox height={height}>
            {[...Array(count)].map((c, i) => (
              <StyledFlexItem key={i} style={{ padding: '3rem' }} fuw>
                <StyledText>{i}</StyledText>
              </StyledFlexItem>
            ))}
          </StyledFlexBox>
        )}
      </Ctx.Consumer>
    </FlexBoxProvider>
  );
};
