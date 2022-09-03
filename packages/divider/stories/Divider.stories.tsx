import React from 'react';
import { styled } from '@tidy-ui/commons';
import { Text } from '@tidy-ui/text';
import { Divider } from '../src';
import { Density, Position, Variant } from '../src/types';
import { Shade, Tone } from '@tidy-ui/types';

export default {
  component: Divider,
  title: 'Layout/Divider/Divider',
};

const Container = styled.div`
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum perferendis voluptates alias nesciunt
            cupiditate distinctio. Illo commodi eius nesciunt consequuntur, explicabo officiis, distinctio deleniti quas
            expedita necessitatibus modi quisquam consequatur!`;

export const basic = () => {
  return (
    <>
      {[...Array(3)].map((v, i) => (
        <React.Fragment key={i}>
          <Text>{text}</Text>
          <Divider />
        </React.Fragment>
      ))}
    </>
  );
};

export const vertical = () => {
  return (
    <Container>
      {[...Array(3)].map((v, i) => (
        <React.Fragment key={i}>
          <Text>{text}</Text>
          <Divider vertical />
        </React.Fragment>
      ))}
    </Container>
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
            <Text v="h6">shade={Shade[v]}</Text>
            <Text>{text}</Text>
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
            <Text v="h6">tone={Tone[v]}</Text>
            <Text>{text}</Text>
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
            <Text v="h6">variant={Variant[v]}</Text>
            <Text>{text}</Text>
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
          <Text>{text}</Text>
          <Divider margin="2rem" />
        </React.Fragment>
      ))}
    </>
  );
};

export const customVerticalAlignment = () => {
  return (
    <Container>
      {Object.keys(Position)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <React.Fragment key={i}>
            <Text>
              <Text v="h6">align={Position[v]}</Text>
              {text}
            </Text>
            <Divider vertical align={Position[v]} length="2rem" />
          </React.Fragment>
        ))}
    </Container>
  );
};

export const customHorizontalAlignment = () => {
  return (
    <Column>
      {Object.keys(Position)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <React.Fragment key={i}>
            <Text>
              <Text v="h6">align={Position[v]}</Text>
              {text}
            </Text>
            <Divider align={Position[v]} length="2rem" />
          </React.Fragment>
        ))}
    </Column>
  );
};
