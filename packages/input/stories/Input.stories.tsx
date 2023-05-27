import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FlexBox } from '../../flexbox/src';
import { Text } from '../../text/src';
import { Input } from '../src';
import { Variant } from '../src/types';
import { Girth, Status, TStatus } from '../../commons/src';

const meta: Meta<typeof Input> = {
  title: 'Form/Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const variants: Story = {
  render: () => {
    return (
      <FlexBox gap="1rem" fld="column" width="350px">
        {Object.values(Variant)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Input key={i} variant={Variant[v]} placeholder={Variant[v]} />
          ))}
      </FlexBox>
    );
  },
};

export const Girths: Story = {
  render: () => {
    return (
      <FlexBox gap="1rem" fld="column" width="250px">
        {Object.values(Girth)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Input key={i} girth={Girth[v]} placeholder={Girth[v]} />
          ))}
      </FlexBox>
    );
  },
};

export const statuses: Story = {
  render: () => {
    return (
      <FlexBox gap="1rem" fld="column" width="250px">
        {Object.values(Status)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Input key={i} status={Status[v]} placeholder={Status[v]} />
          ))}
      </FlexBox>
    );
  },
};

export const caption: Story = {
  render: () => {
    const [name, setName] = React.useState('');

    const handleChange = (e) => {
      setName(e.target.value);
    };

    return (
      <FlexBox gap="1rem" fld="column" width="350px">
        <Input caption={`My name is  ${name}`} value={name} onChange={handleChange} placeholder="Enter name" />
      </FlexBox>
    );
  },
};

export const disabled: Story = {
  render: () => {
    return (
      <FlexBox gap="1rem" fld="column" width="350px">
        <Input placeholder="enabled value" />
        <Input disabled placeholder="disabled value" />
      </FlexBox>
    );
  },
};

export const stretched: Story = {
  render: () => {
    return (
      <FlexBox gap="1rem" fld="column">
        <Input width="200px" placeholder="normal value" />
        <Input isStretched placeholder="stretched value" />
      </FlexBox>
    );
  },
};

export const password: Story = {
  render: () => {
    const [name, setName] = React.useState('');
    const [status, setStatus] = React.useState<TStatus>();
    const [caption, setCaption] = React.useState('');

    const handleChange = (e) => {
      setName(e.target.value);
    };

    React.useEffect(() => {
      if (name.length == 0) {
        setStatus(undefined);
        setCaption('');
        return;
      }
      if (name.length < 6) {
        setStatus('danger');
        setCaption('Password must be minimum 6 characters.');
      }
      if (name.length > 18) {
        setStatus('danger');
        setCaption('Password cannot be more than 18 characters.');
      }
      if (6 <= name.length && name.length < 10) {
        setStatus('warning');
        setCaption('Password is weak, I would suggest a strong one.');
      }
      if (10 <= name.length && name.length < 14) {
        setStatus('info');
        setCaption('Password is decent, can live with it.');
      }
      if (14 <= name.length && name.length < 18) {
        setStatus('success');
        setCaption('Password is strong enough');
      }
    }, [name]);

    return (
      <FlexBox gap="1rem" fld="column" width="350px">
        <Input.Password
          caption={caption}
          status={status}
          value={name}
          onChange={handleChange}
          placeholder="Password input"
        />
      </FlexBox>
    );
  },
};

export const types: Story = {
  render: () => {
    const [inputValue, setInputValue] = React.useState();
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };
    return (
      <FlexBox gap="2rem">
        <FlexBox gap="2rem" fld="column" width="350px">
          <Input placeholder="Simple input" onChange={handleChange} />
          <Input.Password placeholder="Password input" onChange={handleChange} />
          <Input.Number placeholder="Number input" onChange={handleChange} />
          <Input.Date onChange={handleChange} />
          <Input.DateTime onChange={handleChange} />
          <Input.Month onChange={handleChange} />
          <Input.Week onChange={handleChange} />
          <Input.Time onChange={handleChange} />
          <Input.Email placeholder="Email input" onChange={handleChange} />
          <Input.Search placeholder="Search input" onChange={handleChange} />
          <Input.Telephone placeholder="Telephone input" onChange={handleChange} />
          <Input.Url placeholder="URL input" onChange={handleChange} />
        </FlexBox>
        <FlexBox>{inputValue && <Text.h6>The value is {inputValue}</Text.h6>}</FlexBox>
      </FlexBox>
    );
  },
};
