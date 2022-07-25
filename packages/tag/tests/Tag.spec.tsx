/**
 * @jest-environment jsdom
 */
import React, { useState } from 'react';
import { fireEvent, getByRole, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import { orchidLight, orchidDark } from '@tidy-ui/theme';
import { CheckCircleIcon } from '@tidy-ui/commons';
import { Tag, TagGroup } from '../src';

describe('Tag', () => {
  test('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag>html</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('Closable tag', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag onClose={() => console.log('Called onClose')}>html</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('Outlined tag', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag outlined>html</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('Outlined tag in dark mode', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Tag outlined>html</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('Disabled tag', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag disable>html</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('Tag with icon', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag icon={<CheckCircleIcon />}>html</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('Tags with all color variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag color="major">html</Tag>
        <Tag color="minor">typescript</Tag>
        <Tag color="neutral">cloud</Tag>
        <Tag color="success">javascript</Tag>
        <Tag color="info">java</Tag>
        <Tag color="warning">sass</Tag>
        <Tag color="danger">css</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('Tags with all magnitude variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag magnitude="sm">html</Tag>
        <Tag>typescript</Tag>
        <Tag magnitude="lg">javascript</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('Grouped tags with TagGroup', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <TagGroup>
          <Tag magnitude="sm">html</Tag>
          <Tag>typescript</Tag>
          <Tag magnitude="lg">javascript</Tag>
          <Tag disable>cloud</Tag>
          <Tag icon={<CheckCircleIcon />} onClose={() => console.log('Clicked onClose')}>
            kotlin
          </Tag>
        </TagGroup>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  /* test('TagGroup mutating containing Tags', () => {
    const tags = ['react', 'java', 'cloud', 'scss'];
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <TagGroup magnitude="sm" onAddNewTag={jest.fn()}>
          {tags.map((t) => (
            <Tag magnitude="sm" key={t} onClose={jest.fn()}>
              {t}
            </Tag>
          ))}
        </TagGroup>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('TagGroup mutating containing Tags in dark mode', () => {
    const tags = ['react', 'java', 'cloud', 'scss'];
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <TagGroup magnitude="sm" onAddNewTag={() => console.log('onAddNewTag')}>
          {tags.map((t) => (
            <Tag magnitude="sm" key={t} onClose={jest.fn()}>
              {t}
            </Tag>
          ))}
        </TagGroup>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  }); */

  test('TagGroup mutating by bluing the input', () => {
    const tags = ['react', 'java', 'cloud', 'scss'];
    const mockOnAddNewTag = jest.fn();
    const mockOnCloseTag = jest.fn();
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <TagGroup magnitude="sm" onAddNewTag={mockOnAddNewTag}>
          {tags.map((t) => (
            <Tag magnitude="sm" key={t} onClose={() => mockOnCloseTag(t)}>
              {t}
            </Tag>
          ))}
        </TagGroup>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
    const { container } = tree;
    const addNewTagBtn = getByRole(container, 'add-new-btn');

    addNewTagBtn.click();
    const newTagInput = getByRole(container, 'add-new-input');
    fireEvent.change(newTagInput, { target: { value: 'css' } });
    fireEvent.blur(newTagInput);
    expect(mockOnAddNewTag).toHaveBeenCalledTimes(1);
  });

  test('TagGroup mutating by clicking enter', () => {
    const tags = ['react', 'java', 'cloud', 'scss'];
    const mockOnAddNewTag = jest.fn();
    const mockOnCloseTag = jest.fn();
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <TagGroup magnitude="sm" onAddNewTag={mockOnAddNewTag}>
          {tags.map((t) => (
            <Tag magnitude="sm" key={t} onClose={() => mockOnCloseTag(t)}>
              {t}
            </Tag>
          ))}
        </TagGroup>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
    const { container } = tree;
    const addNewTagBtn = getByRole(container, 'add-new-btn');

    addNewTagBtn.click();
    const newTagInput = getByRole(container, 'add-new-input');
    fireEvent.focus(newTagInput);
    fireEvent.keyDown(newTagInput, { keyCode: '3' });
    fireEvent.keyDown(newTagInput, { keyCode: '4' });
    fireEvent.keyDown(newTagInput, { keyCode: '5' });
    fireEvent.keyDown(newTagInput, { keyCode: '13' });
    expect(mockOnAddNewTag).toHaveBeenCalledTimes(1);
  });

  test('TagGroup mutating without any addNewTag function param', () => {
    const tags = ['react', 'java', 'cloud', 'scss'];
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <TagGroup magnitude="sm" onAddNewTag={jest.fn()}>
          {tags.map((t) => (
            <Tag magnitude="sm" key={t} onClose={jest.fn()}>
              {t}
            </Tag>
          ))}
        </TagGroup>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
