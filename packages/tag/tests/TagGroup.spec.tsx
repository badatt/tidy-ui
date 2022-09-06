/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, getAllByRole, getByRole, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Icon, orchidDark, orchidLight, TidyUiProvider } from '@tidy-ui/commons';
import { Tag, TagGroup } from '../src';

describe('TagGroup', () => {
  it('Grouped tags with TagGroup', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <TagGroup>
          <Tag size="sm">html</Tag>
          <Tag>typescript</Tag>
          <Tag size="lg">javascript</Tag>
          <Tag disabled>cloud</Tag>
          <Tag icon={<Icon ele={<Icon.CheckCircle />} />} onClose={jest.fn()}>
            kotlin
          </Tag>
        </TagGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Grouped tags with TagGroup margin', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <TagGroup margin="0 0 1rem 0">
          <Tag size="sm">html</Tag>
          <Tag>typescript</Tag>
          <Tag size="lg">javascript</Tag>
          <Tag disabled>cloud</Tag>
          <Tag icon={<Icon ele={<Icon.CheckCircle />} />} onClose={jest.fn()}>
            kotlin
          </Tag>
        </TagGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('TagGroup mutating by bluing the input', () => {
    const tags = ['react', 'java', 'cloud', 'scss'];
    const mockOnAddNewTag = jest.fn();
    const mockOnCloseTag = jest.fn();
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <TagGroup size="sm" onAddNewTag={mockOnAddNewTag}>
          {tags.map((t) => (
            <Tag size="sm" key={t} onClose={() => mockOnCloseTag(t)}>
              {t}
            </Tag>
          ))}
        </TagGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    const { container } = tree;
    const addNewTagBtn = getAllByRole(container, 'button');

    fireEvent.click(addNewTagBtn[addNewTagBtn.length - 1]);
    const newTagInput = getByRole(container, 'textbox');
    fireEvent.change(newTagInput, { target: { value: 'css' } });
    fireEvent.blur(newTagInput);
    expect(mockOnAddNewTag).toHaveBeenCalledTimes(1);
  });

  it('TagGroup mutating by clicking enter', () => {
    const tags = ['react', 'java', 'cloud', 'scss'];
    const mockOnAddNewTag = jest.fn();
    const mockOnCloseTag = jest.fn();
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <TagGroup size="sm" onAddNewTag={mockOnAddNewTag}>
          {tags.map((t) => (
            <Tag size="sm" key={t} onClose={() => mockOnCloseTag(t)}>
              {t}
            </Tag>
          ))}
        </TagGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    const { container } = tree;
    const addNewTagBtn = getAllByRole(container, 'button');

    fireEvent.click(addNewTagBtn[addNewTagBtn.length - 1]);
    const newTagInput = getByRole(container, 'textbox');
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
      <TidyUiProvider theme={orchidDark}>
        <TagGroup size="sm">
          {tags.map((t) => (
            <Tag size="sm" key={t} onClose={jest.fn()}>
              {t}
            </Tag>
          ))}
        </TagGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    const { container } = tree;
    const addNewTagBtn = getAllByRole(container, 'button');

    fireEvent.click(addNewTagBtn[addNewTagBtn.length - 1]);
    const newTagInput = getByRole(container, 'textbox');
    fireEvent.change(newTagInput, { target: { value: 'css' } });
    fireEvent.blur(newTagInput);
  });
});
