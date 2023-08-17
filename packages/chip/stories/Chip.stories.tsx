import React from 'react';
import { FlexBox } from '../../flexbox/src';
import { Chip } from '../src';
import { Icon } from '../../commons/src';
import { Tone, Girth } from '../../types/src';

export default {
  component: Chip,
  title: 'Presentation/Chip',
};

export const basic = () => <Chip>basic</Chip>;

export const girths = () => {
  return (
    <FlexBox gap="1rem" fld="column" ali="flex-start">
      {Object.keys(Girth)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Chip girth={Girth[v]} key={i}>
            Girth-{Girth[v]}
          </Chip>
        ))}
    </FlexBox>
  );
};

export const filled = () => {
  return (
    <FlexBox gap="1rem" fld="column" ali="flex-start">
      {Object.keys(Girth)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Chip girth={Girth[v]} key={i} isFilled>
            Girth-{Girth[v]}
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
            <Chip key={i} tone={Tone[v]} isFilled>
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
            <Chip isFilled key={i} tone={Tone[v]} icon={<Icon.AddCircle />} placement="left">
              {Tone[v]}
            </Chip>
          ))}
      </FlexBox>
      <FlexBox gap="1rem" margin="0 0 1rem 0">
        {Object.keys(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Chip isFilled key={i} tone={Tone[v]} icon={<Icon.AddCircle />} placement="right">
              {Tone[v]}
            </Chip>
          ))}
      </FlexBox>
      <FlexBox gap="1rem">
        <FlexBox gap="1rem" fld="column" ali="flex-start">
          {Object.keys(Girth)
            .filter((i) => !isNaN(Number(i)))
            .map((v, i) => (
              <Chip girth={Girth[v]} key={i} icon={<Icon.AddCircle />} placement="left">
                Girth-{Girth[v]}
              </Chip>
            ))}
        </FlexBox>
        <FlexBox gap="1rem" fld="column" ali="flex-start">
          {Object.keys(Girth)
            .filter((i) => !isNaN(Number(i)))
            .map((v, i) => (
              <Chip isFilled girth={Girth[v]} key={i} icon={<Icon.AddCircle />} placement="right">
                Girth-{Girth[v]}
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
            <Chip
              key={i}
              tone={Tone[v]}
              isClickable
              icon={<Icon.AddCircle />}
              placement="left"
              onClick={() => alert(`Clicked ${Tone[v]}`)}
            >
              {Tone[v]}
            </Chip>
          ))}
      </FlexBox>
      <FlexBox gap="1rem">
        {Object.keys(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Chip
              isFilled
              key={i}
              tone={Tone[v]}
              isClickable
              icon={<Icon.AddCircle />}
              placement="left"
              onClick={() => alert(`Clicked outlined ${Tone[v]}`)}
            >
              {Tone[v]}
            </Chip>
          ))}
      </FlexBox>
    </>
  );
};

export const disabled = () => (
  <FlexBox gap="1rem">
    <Chip disabled>disabled</Chip>
    <Chip disabled isFilled>
      disabled
    </Chip>
  </FlexBox>
);
