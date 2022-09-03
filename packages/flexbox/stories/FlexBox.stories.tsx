import React from 'react';
import { Text } from '@tidy-ui/presentation';
import { FlexBox } from '../src';
import { TAlignContent, TAlignItems, TFlexDirection, TJustifyContent } from '../src/types';
import { Ctx, FlexBoxProvider } from './FlexBoxProvider';
import { Divider, StyledFlexBox, StyledFlexItem, StyledText } from './components';

export default {
  component: FlexBox,
  title: 'Layout/Flexbox/FlexBox',
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
                <StyledText v={label}>{i}</StyledText>
              </StyledFlexItem>
            ))}
          </StyledFlexBox>
        )}
      </Ctx.Consumer>
    </FlexBoxProvider>
  );
};

export const direction = () => {
  const variants = ['row', 'row-reverse', 'column', 'column-reverse'];
  return (
    <>
      {variants.map((v) => (
        <FlexBoxProvider key={v}>
          <Text v="h6">{v}</Text>
          <Ctx.Consumer>
            {({ count }) => (
              <StyledFlexBox height={height} fld={v as TFlexDirection}>
                {[...Array(count)].map((c, i) => (
                  <StyledFlexItem key={i} style={{ padding: '3rem' }}>
                    <StyledText v={label}>{i}</StyledText>
                  </StyledFlexItem>
                ))}
              </StyledFlexBox>
            )}
          </Ctx.Consumer>
          <Divider margin="1rem" />
        </FlexBoxProvider>
      ))}
    </>
  );
};

export const wrap = () => {
  return (
    <>
      {[true, false].map((v, i) => (
        <FlexBoxProvider key={i}>
          <Text v="h6">nowrap={String(v)}</Text>
          <Ctx.Consumer>
            {({ count }) => (
              <StyledFlexBox height={height} nowrap={v}>
                {[...Array(count)].map((c, i) => (
                  <StyledFlexItem key={i} style={{ padding: '3rem' }}>
                    <StyledText v={label}>{i}</StyledText>
                  </StyledFlexItem>
                ))}
              </StyledFlexBox>
            )}
          </Ctx.Consumer>
          <Divider margin="1rem" />
        </FlexBoxProvider>
      ))}
    </>
  );
};

export const centered = () => {
  return (
    <FlexBoxProvider>
      <Ctx.Consumer>
        {({ count }) => (
          <StyledFlexBox ctr>
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

export const fullHeight = () => {
  return (
    <FlexBoxProvider>
      <Ctx.Consumer>
        {({ count }) => (
          <StyledFlexBox fuh>
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

export const gap = () => {
  return (
    <FlexBoxProvider>
      <Ctx.Consumer>
        {({ count }) => (
          <StyledFlexBox gap=".5rem" height={height}>
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

export const columnGap = () => {
  return (
    <FlexBoxProvider>
      <Ctx.Consumer>
        {({ count }) => (
          <StyledFlexBox cgp=".5rem" height={height}>
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

export const rowGap = () => {
  return (
    <FlexBoxProvider>
      <Ctx.Consumer>
        {({ count }) => (
          <StyledFlexBox rgp=".5rem" height={height}>
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

export const alignContent = () => {
  const variants = [
    'normal',
    'baseline',
    'first baseline',
    'last baseline',
    'space-between',
    'space-around',
    'space-evenly',
    'stretch',
    'unsafe',
    'safe',
    'center',
    'start',
    'end',
    'flex-start',
    'flex-end',
  ];
  return (
    <>
      {variants.map((v) => (
        <FlexBoxProvider key={v}>
          <Text v="h6">{v}</Text>
          <Ctx.Consumer>
            {({ count }) => (
              <StyledFlexBox height={height} alc={v as TAlignContent}>
                {[...Array(count)].map((c, i) => (
                  <StyledFlexItem key={i} style={{ padding: '3rem' }}>
                    <StyledText v={label}>{i}</StyledText>
                  </StyledFlexItem>
                ))}
              </StyledFlexBox>
            )}
          </Ctx.Consumer>
          <Divider margin="1rem" />
        </FlexBoxProvider>
      ))}
    </>
  );
};

export const alignItems = () => {
  const variants = [
    'normal',
    'stretch',
    'baseline',
    'first baseline',
    'last baseline',
    'safe',
    'unsafe',
    'flex-start',
    'flex-end',
    'center',
    'start',
    'end',
    'self-start',
    'self-end',
  ];
  return (
    <>
      {variants.map((v) => (
        <FlexBoxProvider key={v}>
          <Text v="h6">{v}</Text>
          <Ctx.Consumer>
            {({ count }) => (
              <StyledFlexBox height={height} ali={v as TAlignItems}>
                {[...Array(count)].map((c, i) => (
                  <StyledFlexItem key={i} style={{ padding: '3rem' }}>
                    <StyledText v={label}>{i}</StyledText>
                  </StyledFlexItem>
                ))}
              </StyledFlexBox>
            )}
          </Ctx.Consumer>
          <Divider margin="1rem" />
        </FlexBoxProvider>
      ))}
    </>
  );
};

export const justifyContent = () => {
  const variants = [
    'center',
    'start',
    'end',
    'flex-start',
    'flex-end',
    'left',
    'right',
    'normal',
    'space-between',
    'space-around',
    'space-evenly',
    'stretch',
    'safe',
    'unsafe',
  ];
  return (
    <>
      {variants.map((v) => (
        <FlexBoxProvider key={v}>
          <Text v="h6">{v}</Text>
          <Ctx.Consumer>
            {({ count }) => (
              <StyledFlexBox height={height} jsc={v as TJustifyContent}>
                {[...Array(count)].map((c, i) => (
                  <StyledFlexItem key={i} style={{ padding: '3rem' }}>
                    <StyledText v={label}>{i}</StyledText>
                  </StyledFlexItem>
                ))}
              </StyledFlexBox>
            )}
          </Ctx.Consumer>
          <Divider margin="1rem" />
        </FlexBoxProvider>
      ))}
    </>
  );
};
