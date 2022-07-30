import React, { useState } from 'react';
import { CheckCircleIcon } from '@tidy-ui/commons';
import { styled } from '@tidy-ui/theme';
import { Tag } from '../src';

export default {
  component: Tag,
  title: 'Components/Tag/Tag',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const basic = () => (
  <Container>
    <Tag magnitude="sm">html</Tag>
    <Tag>typescript</Tag>
    <Tag magnitude="lg">javascript</Tag>
    <Tag disable>cloud</Tag>
    <Tag icon={<CheckCircleIcon />}>kotlin</Tag>
  </Container>
);

export const colors = () => (
  <Container>
    <Tag color="major">html</Tag>
    <Tag color="minor">typescript</Tag>
    <Tag color="neutral">cloud</Tag>
    <Tag color="success">javascript</Tag>
    <Tag color="info">java</Tag>
    <Tag color="warning">sass</Tag>
    <Tag color="danger">css</Tag>
  </Container>
);

export const outlined = () => (
  <Container>
    <Tag color="major" outlined>
      html
    </Tag>
    <Tag color="minor" outlined>
      typescript
    </Tag>
    <Tag color="neutral" outlined>
      cloud
    </Tag>
    <Tag color="success" outlined>
      javascript
    </Tag>
    <Tag color="info" outlined>
      java
    </Tag>
    <Tag color="warning" outlined>
      sass
    </Tag>
    <Tag color="danger" outlined>
      css
    </Tag>
  </Container>
);
