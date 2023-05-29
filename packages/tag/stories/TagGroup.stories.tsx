import React, { useState } from 'react';
import { Tag, TagGroup } from '../src';

export default {
  component: Tag,
  title: 'Presentation/Tag/TagGroup',
};

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
    <>
      <TagGroup girth="sm" onAddNewTag={handleTagAdd} margin="0 0 1rem 0">
        {tags.map((t) => (
          <Tag isFilled girth="sm" key={t} tone="info" onClose={() => handleTagRemove(t)}>
            {t}
          </Tag>
        ))}
      </TagGroup>
      <TagGroup onAddNewTag={handleTagAdd} margin="0 0 1rem 0">
        {tags.map((t) => (
          <Tag isFilled key={t} tone="major" onClose={() => handleTagRemove(t)}>
            {t}
          </Tag>
        ))}
      </TagGroup>
      <TagGroup girth="lg" onAddNewTag={handleTagAdd}>
        {tags.map((t) => (
          <Tag isFilled girth="lg" key={t} tone="minor" onClose={() => handleTagRemove(t)}>
            {t}
          </Tag>
        ))}
      </TagGroup>
    </>
  );
};
