import React from 'react';
import { Text } from '@tidy-ui/text';
import { Divider } from '../src';
import { Density, Position, Variant } from '../src/types';
import { Shade, Tone } from '@tidy-ui/types';

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
          <Text>{text}</Text>
          <Divider.Enhanced />
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
          <Text>{text}</Text>
          <Divider.Enhanced>
            <Text v="caption">section {i}</Text>
          </Divider.Enhanced>
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
            <Text v="h6">density={Density[v]}</Text>
            <Text>{text}</Text>
            <Divider.Enhanced density={Density[v]}>
              <Text v="caption">section {i}</Text>
            </Divider.Enhanced>
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
            <Text v="h6">shade={Shade[v]}</Text>
            <Text>{text}</Text>
            <Divider.Enhanced shade={Shade[v]}>
              <Text v="caption">section {i}</Text>
            </Divider.Enhanced>
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
            <Text v="h6">tone={Tone[v]}</Text>
            <Text>{text}</Text>
            <Divider.Enhanced tone={Tone[v]}>
              <Text v="caption" tone={Tone[v]}>
                section {i}
              </Text>
            </Divider.Enhanced>
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
            <Text v="h6">variant={Variant[v]}</Text>
            <Text>{text}</Text>
            <Divider.Enhanced variant={Variant[v]}>
              <Text v="caption">section {i}</Text>
            </Divider.Enhanced>
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
          <Text>{text}</Text>
          <Divider.Enhanced margin="2rem">
            <Text v="caption">section {i}</Text>
          </Divider.Enhanced>
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
            <Text v="h6">justify={Position[v]}</Text>
            <Text>{text}</Text>
            <Divider.Enhanced justify={Position[v]}>
              <Text v="caption">section {i}</Text>
            </Divider.Enhanced>
          </React.Fragment>
        ))}
    </>
  );
};
