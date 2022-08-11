import React from 'react';
import { CheckCircleIcon } from '@tidy-ui/commons';
import { styled } from '@tidy-ui/commons';
import { Tag } from '../src';

export default {
  component: Tag,
  title: 'Components/Tag/Tag',
};

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const Column = styled.div`
  & > * {
    margin-bottom: 8px;
  }
`;

export const basic = () => (
  <Container>
    <Column>
      <Tag>typescript</Tag>
      <Tag withIcon={<CheckCircleIcon />} withColor="success">
        Success
      </Tag>
    </Column>
  </Container>
);

export const colorVariants = () => (
  <Container>
    <Tag withColor="major">html</Tag>
    <Tag withColor="minor">typescript</Tag>
    <Tag withColor="neutral">cloud</Tag>
    <Tag withColor="success">javascript</Tag>
    <Tag withColor="info">java</Tag>
    <Tag withColor="warning">sass</Tag>
    <Tag withColor="danger">css</Tag>
  </Container>
);

export const outlined = () => (
  <Container>
    <Tag withColor="major" isOutlined>
      html
    </Tag>
    <Tag withColor="minor" isOutlined>
      typescript
    </Tag>
    <Tag withColor="neutral" isOutlined>
      cloud
    </Tag>
    <Tag withColor="success" isOutlined>
      javascript
    </Tag>
    <Tag withColor="info" isOutlined>
      java
    </Tag>
    <Tag withColor="warning" isOutlined>
      sass
    </Tag>
    <Tag withColor="danger" isOutlined>
      css
    </Tag>
  </Container>
);

export const disabled = () => (
  <Container>
    <Column>
      <Tag isDisabled>typescript</Tag>
    </Column>
  </Container>
);

export const sizeVariants = () => (
  <Container>
    <Column>
      <Tag withSize="sm">typescript</Tag>
      <Tag withSize="md">javascript</Tag>
      <Tag withSize="lg">coffeescript</Tag>
    </Column>
  </Container>
);
