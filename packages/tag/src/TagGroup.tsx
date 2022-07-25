import React, { forwardRef, useState } from 'react';
import { css, hsla, styled } from '@tidy-ui/theme';
import { AddCircleIcon } from '@tidy-ui/commons';
import { ITagGroupProps } from './types';
import { sizeStyles } from './style';

const TagGroupRoot = styled.div<ITagGroupProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;

const AddNewTagIcon = styled.i<ITagGroupProps>`
  ${({ theme: { isDark, palette }, magnitude, color }) => css`
    cursor: pointer;
    height: ${sizeStyles[magnitude!].addNewIconSize};
    width: ${sizeStyles[magnitude!].addNewIconSize};
    color: ${isDark ? palette[color!][400] : palette[color!][600]};
  `}
`;

const NewTagInput = styled.input<ITagGroupProps>`
  ${({ theme: { isDark, palette }, color, magnitude }) => css`
    width: ${sizeStyles[magnitude!].addNewTagInputWidth};
    outline: none;
    color: ${isDark ? palette[color!][400] : palette[color!][600]};
    background-color: ${isDark ? hsla(palette[color!].shades[900], 0.1) : palette[color!][50]};
    border: 1px solid ${palette[color!][400]};
    transition: border-color 0.3s ease-in-out;
    padding: ${sizeStyles[magnitude!].padding};
    border-radius: ${sizeStyles[magnitude!].borderRadius};
    font-size: ${sizeStyles[magnitude!].fontSize};
    line-height: ${sizeStyles[magnitude!].lineHeight};
    &:focus {
      border: 0;
      outline: 2px solid ${palette[color!][500]};
    }
    &:hover {
      border: 0;
      outline: 2px solid ${palette[color!][500]};
    }
  `}
`;

const TagGroup = forwardRef<HTMLDivElement, ITagGroupProps>((props, ref) => {
  const { children, onAddNewTag, ...rest } = props;

  const [typing, setTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleNewTagButtonClick = () => {
    setTyping(true);
  };

  const handleInputConfirm = () => {
    setTyping(false);
    onAddNewTag?.(inputValue);
    setInputValue('');
  };

  const handleEnterKeyPress = (e: any) => {
    if (e.keyCode == 13) {
      handleInputConfirm();
    }
  };

  const renderTagGroupActions = () => {
    if (typing) {
      return (
        <NewTagInput
          {...rest}
          value={inputValue}
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
    <TagGroupRoot ref={ref} role="tag-group" {...rest}>
      {children}
      {onAddNewTag && renderTagGroupActions()}
    </TagGroupRoot>
  );
});

TagGroup.defaultProps = {
  color: 'major',
  magnitude: 'md',
};

export { TagGroup };
