import { css, styled } from '@tidy-ui/theme';
import React from 'react';
import { IBadgeProps } from './types';

const BadgeRoot = styled.span<IBadgeProps>`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  flex-shrink: 0;
`;

const badgeColor = css<IBadgeProps>`
  ${({ theme: { palette }, color }) => css`
    color: ${palette[color!][100]};
    background-color: ${palette[color!][600]};
  `}
`;

const StandardBadgeAnchor = styled.span<IBadgeProps>`
  display: flex;
  flex-flow: row wrap;
  place-content: center;
  align-items: center;
  position: absolute;
  min-width: 1rem;
  line-height: 1;
  padding: 0px 4px;
  height: 1rem;
  border-radius: 10px;
  z-index: 1;
  top: 0;
  right: 0;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transform: scale(1) translate(50%, -50%);
  transform-origin: 100% 0%;
  font-size: 0.625rem;
  ${badgeColor}
`;

const DotBadgeAnchor = styled.span<IBadgeProps>`
  display: flex;
  flex-flow: row wrap;
  -webkit-box-pack: center;
  place-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: absolute;
  min-width: 8px;
  padding: 0px;
  height: 8px;
  border-radius: 4px;
  z-index: 1;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  top: 0px;
  right: 0px;
  transform: scale(1) translate(50%, -50%);
  transform-origin: 100% 0%;
  ${badgeColor}
`;

const Badge = React.forwardRef<HTMLSpanElement, IBadgeProps>((props, ref) => {
  const { children, content, variant, showZero, invisible, max, ...rest } = props;

  const getContent = () => {
    if (max && Number(content) > max) {
      return `${max}+`;
    } else {
      return content;
    }
  };

  const anchor = () => {
    switch (variant) {
      case 'standard':
        if (content == 0) {
          return showZero && <StandardBadgeAnchor {...rest}>0</StandardBadgeAnchor>;
        } else {
          return <StandardBadgeAnchor {...rest}>{getContent()}</StandardBadgeAnchor>;
        }
      case 'dot':
        return <DotBadgeAnchor {...rest} />;
    }
  };

  return (
    <BadgeRoot ref={ref} role="badge" {...rest}>
      {children}
      {!invisible && anchor()}
    </BadgeRoot>
  );
});

Badge.defaultProps = {
  color: 'major',
  invisible: false,
  showZero: false,
  variant: 'standard',
};

export { Badge };
