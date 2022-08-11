/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, getByRole, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { CheckCircleIcon } from '@tidy-ui/commons';
import { orchidDark, orchidLight } from '@tidy-ui/commons';
import { Tag, TagGroup } from '../src';

describe('Tag', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag>html</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Closable tag', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag onClose={jest.fn()}>html</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Outlined tag', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag isOutlined>html</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Outlined tag in dark mode', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Tag isOutlined>html</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Disabled tag', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag isDisabled>html</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Tag with icon', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag withIcon={<CheckCircleIcon />}>html</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Tags with all color variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag withColor="major">html</Tag>
        <Tag withColor="minor">typescript</Tag>
        <Tag withColor="neutral">cloud</Tag>
        <Tag withColor="success">javascript</Tag>
        <Tag withColor="info">java</Tag>
        <Tag withColor="warning">sass</Tag>
        <Tag withColor="danger">css</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Tags with all magnitude variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Tag withSize="sm">html</Tag>
        <Tag>typescript</Tag>
        <Tag withSize="lg">javascript</Tag>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Grouped tags with TagGroup', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <TagGroup>
          <Tag withSize="sm">html</Tag>
          <Tag>typescript</Tag>
          <Tag withSize="lg">javascript</Tag>
          <Tag isDisabled>cloud</Tag>
          <Tag withIcon={<CheckCircleIcon />} onClose={jest.fn()}>
            kotlin
          </Tag>
        </TagGroup>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('TagGroup mutating by bluing the input', () => {
    const tags = ['react', 'java', 'cloud', 'scss'];
    const mockOnAddNewTag = jest.fn();
    const mockOnCloseTag = jest.fn();
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <TagGroup withSize="sm" onAddNewTag={mockOnAddNewTag}>
          {tags.map((t) => (
            <Tag withSize="sm" key={t} onClose={() => mockOnCloseTag(t)}>
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

  it('TagGroup mutating by clicking enter', () => {
    const tags = ['react', 'java', 'cloud', 'scss'];
    const mockOnAddNewTag = jest.fn();
    const mockOnCloseTag = jest.fn();
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <TagGroup withSize="sm" onAddNewTag={mockOnAddNewTag}>
          {tags.map((t) => (
            <Tag withSize="sm" key={t} onClose={() => mockOnCloseTag(t)}>
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

  it('TagGroup mutating without any addNewTag function param', () => {
    const tags = ['react', 'java', 'cloud', 'scss'];
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <TagGroup withSize="sm">
          {tags.map((t) => (
            <Tag withSize="sm" key={t} onClose={jest.fn()}>
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
  });
});
