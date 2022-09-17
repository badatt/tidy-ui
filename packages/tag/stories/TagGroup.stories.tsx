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
      <TagGroup size="sm" tone="info" onAddNewTag={handleTagAdd} margin="0 0 1rem 0">
        {tags.map((t) => (
          <Tag size="sm" key={t} tone="info" onClose={() => handleTagRemove(t)}>
            {t}
          </Tag>
        ))}
      </TagGroup>
      <TagGroup onAddNewTag={handleTagAdd} margin="0 0 1rem 0">
        {tags.map((t) => (
          <Tag key={t} onClose={() => handleTagRemove(t)}>
            {t}
          </Tag>
        ))}
      </TagGroup>
      <TagGroup size="lg" onAddNewTag={handleTagAdd}>
        {tags.map((t) => (
          <Tag outlined size="lg" key={t} onClose={() => handleTagRemove(t)}>
            {t}
          </Tag>
        ))}
      </TagGroup>
    </>
  );
};
