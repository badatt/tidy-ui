import React from 'react';
import { Divider } from '../../divider/src';
import { FlexBox } from '../../flexbox/src';
import { Tone } from '../../commons/src';
import { Breadcrumb } from '../src';

export default {
  component: Breadcrumb,
  title: 'Navigation/Breadcrumb',
};

export const basic = () => (
  <Breadcrumb>
    <Breadcrumb.Item href="#">link 1</Breadcrumb.Item>
    <Breadcrumb.Item href="#">link 2</Breadcrumb.Item>
    <Breadcrumb.Item href="#">link 3</Breadcrumb.Item>
    <Breadcrumb.Item href="#">link 4</Breadcrumb.Item>
  </Breadcrumb>
);

export const limit = () => (
  <Breadcrumb limit={5}>
    <Breadcrumb.Item href="#">link 1</Breadcrumb.Item>
    <Breadcrumb.Item href="#">link 2</Breadcrumb.Item>
    <Breadcrumb.Item href="#">link 3</Breadcrumb.Item>
    <Breadcrumb.Item href="#">link 4</Breadcrumb.Item>
    <Breadcrumb.Item href="#">link 5</Breadcrumb.Item>
    <Breadcrumb.Item href="#">link 6</Breadcrumb.Item>
  </Breadcrumb>
);

export const tones = () => (
  <FlexBox fld="column" gap="1rem">
    {Object.keys(Tone)
      .filter((t) => !isNaN(Number(t)))
      .map((t, i) => (
        <Breadcrumb key={i} tone={Tone[t]}>
          <Breadcrumb.Item href="#">link 1</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 2</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 3</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 4</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 5</Breadcrumb.Item>
          <Breadcrumb.Item href="#">link 6</Breadcrumb.Item>
        </Breadcrumb>
      ))}
  </FlexBox>
);

export const manualActive = () => (
  <Breadcrumb noActive>
    <Breadcrumb.Item href="#">link 1</Breadcrumb.Item>
    <Breadcrumb.Item href="#">link 2</Breadcrumb.Item>
    <Breadcrumb.Item href="#">link 3</Breadcrumb.Item>
    <Breadcrumb.Item href="#" active>
      link 4
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#">link 5</Breadcrumb.Item>
    <Breadcrumb.Item href="#">item 6</Breadcrumb.Item>
  </Breadcrumb>
);

export const customSeparator = () => (
  <Breadcrumb separator={<Divider vertical />}>
    <Breadcrumb.Item href="#">link 1</Breadcrumb.Item>
    <Breadcrumb.Item href="#">link 2</Breadcrumb.Item>
    <Breadcrumb.Item href="#">link 3</Breadcrumb.Item>
    <Breadcrumb.Item href="#">link 4</Breadcrumb.Item>
    <Breadcrumb.Item href="#">link 5</Breadcrumb.Item>
    <Breadcrumb.Item href="#" active>
      active item
    </Breadcrumb.Item>
  </Breadcrumb>
);
