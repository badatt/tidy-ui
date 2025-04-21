import React from 'react';
import { Text } from '../../text/src';
import { Divider } from '../../divider/src';
import { FlexBox } from '../src';
import { AlignContent, AlignItems, FlexDirection, JustifyContent } from '../../types/src';
import { Ctx, FlexBoxProvider } from './FlexBoxProvider';
import { StyledFlexBox, StyledFlexItem, StyledText } from './components';

export default {
  component: FlexBox,
  title: 'Layout/Flexbox/FlexBox',
};

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

export const direction = () => {
  return (
    <>
      {Object.keys(FlexDirection)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <FlexBoxProvider key={i}>
            <Text.H6>{FlexDirection[v]}</Text.H6>
            <Ctx.Consumer>
              {({ count }) => (
                <StyledFlexBox height={height} fld={FlexDirection[v]}>
                  {[...Array(count)].map((c, i) => (
                    <StyledFlexItem key={i} style={{ padding: '3rem' }}>
                      <StyledText>{i}</StyledText>
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
          <Text.H6>nowrap={String(v)}</Text.H6>
          <Ctx.Consumer>
            {({ count }) => (
              <StyledFlexBox height={height} nowrap={v}>
                {[...Array(count)].map((c, i) => (
                  <StyledFlexItem key={i} style={{ padding: '3rem' }}>
                    <StyledText>{i}</StyledText>
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
                <StyledText>{i}</StyledText>
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
                <StyledText>{i}</StyledText>
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
                <StyledText>{i}</StyledText>
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
                <StyledText>{i}</StyledText>
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
                <StyledText>{i}</StyledText>
              </StyledFlexItem>
            ))}
          </StyledFlexBox>
        )}
      </Ctx.Consumer>
    </FlexBoxProvider>
  );
};

export const alignContent = () => {
  return (
    <>
      {Object.keys(AlignContent)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <FlexBoxProvider key={v}>
            <Text.H6>{AlignContent[v]}</Text.H6>
            <Ctx.Consumer>
              {({ count }) => (
                <StyledFlexBox height={height} alc={AlignContent[v]}>
                  {[...Array(count)].map((c, i) => (
                    <StyledFlexItem key={i} style={{ padding: '3rem' }}>
                      <StyledText>{i}</StyledText>
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
  return (
    <>
      {Object.keys(AlignItems)
        .filter((i) => !isNaN(Number(i)))
        .map((v) => (
          <FlexBoxProvider key={v}>
            <Text.H6>{AlignItems[v]}</Text.H6>
            <Ctx.Consumer>
              {({ count }) => (
                <StyledFlexBox height={height} ali={AlignItems[v]}>
                  {[...Array(count)].map((c, i) => (
                    <StyledFlexItem key={i} style={{ padding: '3rem' }}>
                      <StyledText>{i}</StyledText>
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
  return (
    <>
      {Object.keys(JustifyContent)
        .filter((i) => !isNaN(Number(i)))
        .map((v) => (
          <FlexBoxProvider key={v}>
            <Text.H6>{JustifyContent[v]}</Text.H6>
            <Ctx.Consumer>
              {({ count }) => (
                <StyledFlexBox height={height} jsc={JustifyContent[v]}>
                  {[...Array(count)].map((c, i) => (
                    <StyledFlexItem key={i} style={{ padding: '3rem' }}>
                      <StyledText>{i}</StyledText>
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
