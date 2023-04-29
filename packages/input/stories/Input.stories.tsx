import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FlexBox } from '../../flexbox/src';
import { Input } from '../src';
import { Variant } from '../src/types';
import { Size } from '../../commons/src';

const meta: Meta<typeof Input> = {
  title: 'Form/Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

const Password = () => {
  const [name, setName] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [caption, setCaption] = React.useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  React.useEffect(() => {
    if (name.length == 0) {
      setStatus('');
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
    <Input.Password
      caption={caption}
      status={status}
      value={name}
      onChange={handleChange}
      placeholder="Password input"
    />
  );
};

export const types: Story = {
  render: () => {
    const handleChange = (e) => {
      console.log(e.target.value);
    };
    return (
      <FlexBox gap="2rem" fld="column" w="350px">
        <Input placeholder="Simple input" />
        <Password />
        <Input.Number placeholder="Number input" onChange={handleChange} />
        <Input.Date onChange={handleChange} />
        <Input.DateTime onChange={handleChange} />
        <Input.Month onChange={handleChange} />
        <Input.Week onChange={handleChange} />
        <Input.Time onChange={handleChange} />
        <Input.Email placeholder="Email input" onChange={handleChange} />
        <Input.Search placeholder="Search input" />
        <Input type="file" placeholder="File input" />
        <Input type="tel" placeholder="Telephone input" />
        <Input type="url" placeholder="URL input" />
      </FlexBox>
    );
  },
};

export const variants: Story = {
  render: () => {
    return (
      <FlexBox gap="1rem" fld="column" w="350px">
        {Object.values(Variant)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Input key={i} variant={Variant[v]} placeholder={Variant[v]} />
          ))}
      </FlexBox>
    );
  },
};

export const sizes: Story = {
  render: () => {
    return (
      <FlexBox gap="1rem" fld="column" w="250px">
        {Object.values(Size)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Input key={i} sz={Size[v]} placeholder={Size[v]} />
          ))}
      </FlexBox>
    );
  },
};

export const statuses: Story = {
  render: () => {
    const [name, setName] = React.useState('');
    const [status, setStatus] = React.useState('');

    const handleChange = (e) => {
      setName(e.target.value);
    };

    React.useEffect(() => {
      if (3 < name.length && name.length < 7) {
        setStatus('warning');
      } else if (7 <= name.length && name.length < 14) {
        setStatus('success');
      } else if (14 <= name.length) {
        setStatus('danger');
      } else {
        setStatus('');
      }
    }, [name]);

    return (
      <FlexBox gap="1rem" fld="column" w="350px">
        <Input caption={`${status}`} status={status} value={name} onChange={handleChange} placeholder="Enter name" />
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
      <FlexBox gap="1rem" fld="column" w="350px">
        <Input caption={`My name is  ${name}`} value={name} onChange={handleChange} placeholder="Enter name" />
      </FlexBox>
    );
  },
};

export const disabled: Story = {
  render: () => {
    return (
      <FlexBox gap="1rem" fld="column" w="350px">
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
        <Input w="200px" placeholder="normal value" />
        <Input stretched placeholder="stretched value" />
      </FlexBox>
    );
  },
};
