import React from 'react';
import { Text } from '../../text/src';
import { FlexBox } from '../../flexbox/src';
import { Divider } from '../src';
import { Density, Position, Variant } from '../src/types';
import { Shade, Tone } from '../../types/src';

export default {
  component: Divider,
  title: 'Layout/Divider/Divider',
};

const text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum perferendis voluptates alias nesciunt
            cupiditate distinctio. Illo commodi eius nesciunt consequuntur, explicabo officiis, distinctio deleniti quas
            expedita necessitatibus modi quisquam consequatur!`;

export const basic = () => {
  return (
    <>
      {[...Array(3)].map((v, i) => (
        <React.Fragment key={i}>
          <Text.body1>{text}</Text.body1>
          <Divider />
        </React.Fragment>
      ))}
    </>
  );
};

export const vertical = () => {
  return (
    <FlexBox nowrap>
      {[...Array(3)].map((v, i) => (
        <React.Fragment key={i}>
          <Text.body1>{text}</Text.body1>
          <Divider vertical />
        </React.Fragment>
      ))}
    </FlexBox>
  );
};

export const density = () => {
  return (
    <>
      {Object.keys(Density)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <React.Fragment key={i}>
            <Text.h6>density={Density[v]}</Text.h6>
            <Text.body1>{text}</Text.body1>
            <Divider density={Density[v]} />
          </React.Fragment>
        ))}
    </>
  );
};

export const shades = () => {
  return (
    <>
      {Object.keys(Shade)
        .filter((i) => !isNaN(Number(i)))
        .reverse()
        .map((v, i) => (
          <React.Fragment key={i}>
            <Text.h6>shade={Shade[v]}</Text.h6>
            <Text.body1>{text}</Text.body1>
            <Divider shade={Shade[v]} />
          </React.Fragment>
        ))}
    </>
  );
};

export const tones = () => {
  return (
    <>
      {Object.keys(Tone)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <React.Fragment key={i}>
            <Text.h6>tone={Tone[v]}</Text.h6>
            <Text.body1>{text}</Text.body1>
            <Divider tone={Tone[v]} />
          </React.Fragment>
        ))}
    </>
  );
};

export const variants = () => {
  return (
    <>
      {Object.keys(Variant)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <React.Fragment key={i}>
            <Text.h6>variant={Variant[v]}</Text.h6>
            <Text.body1>{text}</Text.body1>
            <Divider variant={Variant[v]} />
          </React.Fragment>
        ))}
    </>
  );
};

export const customMargin = () => {
  return (
    <>
      {[...Array(3)].map((v, i) => (
        <React.Fragment key={i}>
          <Text.body1>{text}</Text.body1>
          <Divider margin="2rem" />
        </React.Fragment>
      ))}
    </>
  );
};

export const customVerticalAlignment = () => {
  return (
    <FlexBox nowrap>
      {Object.keys(Position)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <React.Fragment key={i}>
            <div>
              <Text.h6>align={Position[v]}</Text.h6>
              <Text.body1>{text}</Text.body1>
            </div>
            <Divider vertical align={Position[v]} length="2rem" />
          </React.Fragment>
        ))}
    </FlexBox>
  );
};

export const customHorizontalAlignment = () => {
  return (
    <FlexBox fld="column">
      {Object.keys(Position)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <React.Fragment key={i}>
            <div>
              <Text.h6>align={Position[v]}</Text.h6>
              <Text.body1>{text}</Text.body1>
            </div>
            <Divider align={Position[v]} length="2rem" />
          </React.Fragment>
        ))}
    </FlexBox>
  );
};
