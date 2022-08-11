import React, { forwardRef, useState } from 'react';
import { AddCircleIcon } from '@tidy-ui/commons';
import { AddNewTagIcon, NewTagInput, TagGroupRoot } from './components';
import { ITagGroupProps } from './types';

/**
 * TagGroup is used to group Tag components, appendable TagGroup can mutate contained Tags
 *
 */
const TagGroup = forwardRef<HTMLDivElement, ITagGroupProps>((props, ref) => {
  const { children, className, onAddNewTag, ...rest } = props;

  const [typing, setTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');

  /**
   * Handler for click add new tag button
   */
  const handleNewTagButtonClick = () => {
    setTyping(true);
  };

  /**
   * Confirms input value
   */
  const handleInputConfirm = () => {
    setTyping(false);
    onAddNewTag?.(inputValue);
    setInputValue('');
  };

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  /**
   * Handler for key press
   *
   * @param {any} e keypress event
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEnterKeyPress = (e: any) => {
    if (e.keyCode == 13) {
      handleInputConfirm();
    }
  };

  /**
   * Decides whether button or input to render
   *
   * @returns {JSX.Element} renders wither button or input
   */
  const renderTagGroupActions = () => {
    if (typing) {
      return (
        <NewTagInput
          {...rest}
          value={inputValue}
          // eslint-disable-next-line  @typescript-eslint/no-explicit-any
          onChange={(e: any) => setInputValue(e.target.value)}
          onBlur={handleInputConfirm}
          onKeyDown={handleEnterKeyPress}
          role="add-new-input"
        />
      );
    }

    return (
      <AddNewTagIcon {...rest} onClick={handleNewTagButtonClick} role="add-new-btn">
        <AddCircleIcon />
      </AddNewTagIcon>
    );
  };

  return (
    <TagGroupRoot className={className} ref={ref} role="tag-group" {...rest}>
      {children}
      {renderTagGroupActions()}
    </TagGroupRoot>
  );
});

TagGroup.defaultProps = {
  withColor: 'major',
  withSize: 'md',
};

export { TagGroup };
