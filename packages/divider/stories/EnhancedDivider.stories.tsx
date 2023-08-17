import React from 'react';
import { Text } from '../../text/src';
import { Divider, DividerEnhanced } from '../src';
import { Density, Shade, Tone, BorderStyle } from '../../types/src';

enum Position {
  'center',
  'start',
  'end',
}

export default {
  component: Divider,
  title: 'Layout/Divider/Enhanced',
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
          <DividerEnhanced />
        </React.Fragment>
      ))}
    </>
  );
};

export const contained = () => {
  return (
    <>
      {[...Array(3)].map((v, i) => (
        <React.Fragment key={i}>
          <Text.body1>{text}</Text.body1>
          <DividerEnhanced>
            <Text.caption>section {i}</Text.caption>
          </DividerEnhanced>
        </React.Fragment>
      ))}
    </>
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
            <DividerEnhanced density={Density[v]}>
              <Text.span>section {i}</Text.span>
            </DividerEnhanced>
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
            <DividerEnhanced shade={Shade[v]}>
              <Text.caption>section {i}</Text.caption>
            </DividerEnhanced>
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
            <DividerEnhanced tone={Tone[v]}>
              <Text.caption tone={Tone[v]}>section {i}</Text.caption>
            </DividerEnhanced>
          </React.Fragment>
        ))}
    </>
  );
};

export const variants = () => {
  return (
    <>
      {Object.keys(BorderStyle)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <React.Fragment key={i}>
            <Text.h6>variant={BorderStyle[v]}</Text.h6>
            <Text.body1>{text}</Text.body1>
            <DividerEnhanced variant={BorderStyle[v]}>
              <Text.caption>section {i}</Text.caption>
            </DividerEnhanced>
          </React.Fragment>
        ))}
    </>
  );
};

export const justify = () => {
  return (
    <>
      {Object.keys(Position)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <React.Fragment key={i}>
            <Text.h6>justify={Position[v]}</Text.h6>
            <Text.body1>{text}</Text.body1>
            <DividerEnhanced justify={Position[v]}>
              <Text.caption>section {i}</Text.caption>
            </DividerEnhanced>
          </React.Fragment>
        ))}
    </>
  );
};
