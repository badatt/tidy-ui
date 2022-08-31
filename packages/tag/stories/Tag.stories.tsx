import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { styled } from '@tidy-ui/commons';
import { Tag } from '../src';

export default {
  component: Tag,
  title: 'Presentation/Tag/Tag',
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
      <Tag icon={<Icon.CheckCircle />} tone="success">
        Success
      </Tag>
    </Column>
  </Container>
);

export const tones = () => (
  <Container>
    <Tag tone="major">html</Tag>
    <Tag tone="minor">typescript</Tag>
    <Tag tone="neutral">cloud</Tag>
    <Tag tone="success">javascript</Tag>
    <Tag tone="info">java</Tag>
    <Tag tone="warning">sass</Tag>
    <Tag tone="danger">css</Tag>
  </Container>
);

export const outlined = () => (
  <Container>
    <Tag tone="major" outlined>
      html
    </Tag>
    <Tag tone="minor" outlined>
      typescript
    </Tag>
    <Tag tone="neutral" outlined>
      cloud
    </Tag>
    <Tag tone="success" outlined>
      javascript
    </Tag>
    <Tag tone="info" outlined>
      java
    </Tag>
    <Tag tone="warning" outlined>
      sass
    </Tag>
    <Tag tone="danger" outlined>
      css
    </Tag>
  </Container>
);

export const disabled = () => (
  <Container>
    <Column>
      <Tag disabled>typescript</Tag>
    </Column>
  </Container>
);

export const sizes = () => (
  <Container>
    <Column>
      <Tag size="sm">typescript</Tag>
      <Tag size="md">javascript</Tag>
      <Tag size="lg">coffeescript</Tag>
    </Column>
  </Container>
);
