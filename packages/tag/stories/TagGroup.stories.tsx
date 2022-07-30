import React, { useState } from 'react';
import { CheckCircleIcon } from '@tidy-ui/commons';
import { styled } from '@tidy-ui/theme';
import { Tag, TagGroup } from '../src';

export default {
  component: Tag,
  title: 'Components/Tag/TagGroup',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const basic = () => (
  <TagGroup>
    <Tag magnitude="sm">html</Tag>
    <Tag>typescript</Tag>
    <Tag magnitude="lg">javascript</Tag>
    <Tag disable>cloud</Tag>
    <Tag icon={<CheckCircleIcon />}>kotlin</Tag>
  </TagGroup>
);

export const colors = () => (
  <TagGroup>
    <Tag color="major">html</Tag>
    <Tag color="minor">typescript</Tag>
    <Tag color="neutral">cloud</Tag>
    <Tag color="success">javascript</Tag>
    <Tag color="info">java</Tag>
    <Tag color="warning">sass</Tag>
    <Tag color="danger">css</Tag>
  </TagGroup>
);

export const outlined = () => (
  <TagGroup>
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
  </TagGroup>
);

export const appendable = () => {
  const [tags, setTags] = useState(['react', 'java', 'cloud']);

  const handleTagRemove = (tag: string) => {
    const nextTags = tags.filter((item) => item !== tag);
    setTags(nextTags);
  };

  const handleTagAdd = (newTag?: string) => {
    if (!newTag) return;
    if (tags.includes(newTag)) return;
    const nextTags = newTag ? [...tags, newTag] : tags;
    setTags(nextTags);
  };

  return (
    <Container>
      <TagGroup magnitude="sm" color="minor" onAddNewTag={handleTagAdd}>
        {tags.map((t) => (
          <Tag magnitude="sm" key={t} color="minor" onClose={() => handleTagRemove(t)}>
            {t}
          </Tag>
        ))}
      </TagGroup>
      <TagGroup onAddNewTag={handleTagAdd}>
        {tags.map((t) => (
          <Tag key={t} onClose={() => handleTagRemove(t)}>
            {t}
          </Tag>
        ))}
      </TagGroup>
      <TagGroup magnitude="lg" onAddNewTag={handleTagAdd}>
        {tags.map((t) => (
          <Tag outlined magnitude="lg" key={t} onClose={() => handleTagRemove(t)}>
            {t}
          </Tag>
        ))}
      </TagGroup>
    </Container>
  );
};
