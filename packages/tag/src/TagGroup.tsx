import React from 'react';
import { Icon } from '@tidy-ui/commons';
import { AddNewTagIcon, NewTagInput, TagGroupRoot } from './components';
import { ITagGroupProps } from './types';

/**
 * TagGroup is used to group Tag components, appendable TagGroup can mutate contained Tags
 *
 */
const TagGroup = React.forwardRef<HTMLDivElement, ITagGroupProps>((props, ref) => {
  const { children, onAddNewTag, ...rest } = props;
  const { girth, tone } = rest;

  const [typing, setTyping] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

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
          role="textbox"
          {...{ girth }}
        />
      );
    }

    return (
      <Icon
        role="button"
        height="1.8em"
        width="1.8em"
        onClick={handleNewTagButtonClick}
        ele={<AddNewTagIcon {...{ tone }} />}
      />
    );
  };

  return (
    <TagGroupRoot ref={ref} role="listbox" {...rest}>
      {children}
      {renderTagGroupActions()}
    </TagGroupRoot>
  );
});

TagGroup.defaultProps = {
  girth: 'md',
  tone: 'neutral',
};

TagGroup.displayName = 'TagGroup';

export { TagGroup };
