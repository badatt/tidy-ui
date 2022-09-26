import React from 'react';
import { FlexBox } from '../../flexbox/src';
import { Chip } from '../src';
import { Tone, Size, Icon } from '../../commons/src';

export default {
  component: Chip,
  title: 'Presentation/Chip',
};

export const basic = () => <Chip>basic</Chip>;

export const sizes = () => {
  return (
    <FlexBox gap="1rem" fld="column" ali="flex-start">
      {Object.keys(Size)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Chip size={Size[v]} key={i}>
            Size-{Size[v]}
          </Chip>
        ))}
    </FlexBox>
  );
};

export const outlined = () => {
  return (
    <FlexBox gap="1rem" fld="column" ali="flex-start">
      {Object.keys(Size)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Chip size={Size[v]} key={i} outlined>
            Size-{Size[v]}
          </Chip>
        ))}
    </FlexBox>
  );
};

export const tones = () => {
  return (
    <>
      <FlexBox gap="1rem" margin="0 0 1rem 0">
        {Object.keys(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Chip key={i} tone={Tone[v]}>
              {Tone[v]}
            </Chip>
          ))}
      </FlexBox>
      <FlexBox gap="1rem">
        {Object.keys(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Chip key={i} tone={Tone[v]} outlined>
              {Tone[v]}
            </Chip>
          ))}
      </FlexBox>
    </>
  );
};

export const withIcon = () => {
  return (
    <>
      <FlexBox gap="1rem" margin="0 0 1rem 0">
        {Object.keys(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Chip key={i} tone={Tone[v]} icon={<Icon.AddCircle />} placement="left">
              {Tone[v]}
            </Chip>
          ))}
      </FlexBox>
      <FlexBox gap="1rem" margin="0 0 1rem 0">
        {Object.keys(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Chip key={i} tone={Tone[v]} icon={<Icon.AddCircle />} placement="right">
              {Tone[v]}
            </Chip>
          ))}
      </FlexBox>
      <FlexBox gap="1rem" margin="0 0 1rem 0">
        {Object.keys(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Chip key={i} tone={Tone[v]} icon={<Icon.AddCircle />} outlined placement="left">
              {Tone[v]}
            </Chip>
          ))}
      </FlexBox>
      <FlexBox gap="1rem" margin="0 0 1rem 0">
        {Object.keys(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Chip key={i} tone={Tone[v]} icon={<Icon.AddCircle />} outlined placement="right">
              {Tone[v]}
            </Chip>
          ))}
      </FlexBox>
      <FlexBox gap="1rem">
        <FlexBox gap="1rem" fld="column" ali="flex-start">
          {Object.keys(Size)
            .filter((i) => !isNaN(Number(i)))
            .map((v, i) => (
              <Chip size={Size[v]} key={i} icon={<Icon.AddCircle />} placement="left">
                Size-{Size[v]}
              </Chip>
            ))}
        </FlexBox>
        <FlexBox gap="1rem" fld="column" ali="flex-start">
          {Object.keys(Size)
            .filter((i) => !isNaN(Number(i)))
            .map((v, i) => (
              <Chip size={Size[v]} key={i} icon={<Icon.AddCircle />} placement="right">
                Size-{Size[v]}
              </Chip>
            ))}
        </FlexBox>
      </FlexBox>
    </>
  );
};

export const clickable = () => {
  return (
    <>
      <FlexBox gap="1rem" margin="0 0 1rem 0">
        {Object.keys(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Chip key={i} tone={Tone[v]} clickable onClick={() => alert(`Clicked ${Tone[v]}`)}>
              {Tone[v]}
            </Chip>
          ))}
      </FlexBox>
      <FlexBox gap="1rem">
        {Object.keys(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Chip key={i} tone={Tone[v]} outlined clickable onClick={() => alert(`Clicked outlined ${Tone[v]}`)}>
              {Tone[v]}
            </Chip>
          ))}
      </FlexBox>
    </>
  );
};

export const disabled = () => <Chip disabled>disabled</Chip>;
