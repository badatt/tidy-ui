import React from 'react';
import { Divider } from '../../divider/src';
import { FlexBox } from '../../flexbox/src';
import { Tone } from '../../types/src';
import { Breadcrumb, BreadcrumbItem } from '../src';

export default {
  component: Breadcrumb,
  title: 'Navigation/Breadcrumb',
};

export const basic = () => (
  <Breadcrumb>
    <BreadcrumbItem href="#">link 1</BreadcrumbItem>
    <BreadcrumbItem href="#">link 2</BreadcrumbItem>
    <BreadcrumbItem href="#">link 3</BreadcrumbItem>
    <BreadcrumbItem href="#">link 4</BreadcrumbItem>
  </Breadcrumb>
);

export const limit = () => (
  <Breadcrumb limit={5}>
    <BreadcrumbItem href="#">link 1</BreadcrumbItem>
    <BreadcrumbItem href="#">link 2</BreadcrumbItem>
    <BreadcrumbItem href="#">link 3</BreadcrumbItem>
    <BreadcrumbItem href="#">link 4</BreadcrumbItem>
    <BreadcrumbItem href="#">link 5</BreadcrumbItem>
    <BreadcrumbItem href="#">link 6</BreadcrumbItem>
  </Breadcrumb>
);

export const tones = () => (
  <FlexBox fld="column" gap="1rem">
    {Object.keys(Tone)
      .filter((t) => !isNaN(Number(t)))
      .map((t, i) => (
        <Breadcrumb key={i} tone={Tone[t]}>
          <BreadcrumbItem href="#">link 1</BreadcrumbItem>
          <BreadcrumbItem href="#">link 2</BreadcrumbItem>
          <BreadcrumbItem href="#">link 3</BreadcrumbItem>
          <BreadcrumbItem href="#">link 4</BreadcrumbItem>
          <BreadcrumbItem href="#">link 5</BreadcrumbItem>
          <BreadcrumbItem href="#">link 6</BreadcrumbItem>
        </Breadcrumb>
      ))}
  </FlexBox>
);

export const manualActive = () => (
  <Breadcrumb isLastItemNotActive>
    <BreadcrumbItem href="#">link 1</BreadcrumbItem>
    <BreadcrumbItem href="#">link 2</BreadcrumbItem>
    <BreadcrumbItem href="#">link 3</BreadcrumbItem>
    <BreadcrumbItem href="#" isActive>
      link 4
    </BreadcrumbItem>
    <BreadcrumbItem href="#">link 5</BreadcrumbItem>
    <BreadcrumbItem href="#">item 6</BreadcrumbItem>
  </Breadcrumb>
);

export const customSeparator = () => (
  <Breadcrumb separator={<Divider isVertical />}>
    <BreadcrumbItem href="#">link 1</BreadcrumbItem>
    <BreadcrumbItem href="#">link 2</BreadcrumbItem>
    <BreadcrumbItem href="#">link 3</BreadcrumbItem>
    <BreadcrumbItem href="#">link 4</BreadcrumbItem>
    <BreadcrumbItem href="#">link 5</BreadcrumbItem>
    <BreadcrumbItem href="#" isActive>
      active item
    </BreadcrumbItem>
  </Breadcrumb>
);
