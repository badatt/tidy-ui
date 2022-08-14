import React, { useState } from 'react';
import { styled } from '@tidy-ui/commons';
import { Tag, TagGroup } from '../src';

export default {
  component: Tag,
  title: 'Presentation/Tag/TagGroup',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

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
      <TagGroup withSize="sm" withColor="info" onAddNewTag={handleTagAdd}>
        {tags.map((t) => (
          <Tag withSize="sm" key={t} withColor="info" onClose={() => handleTagRemove(t)}>
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
      <TagGroup withSize="lg" onAddNewTag={handleTagAdd}>
        {tags.map((t) => (
          <Tag isOutlined withSize="lg" key={t} onClose={() => handleTagRemove(t)}>
            {t}
          </Tag>
        ))}
      </TagGroup>
    </Container>
  );
};
