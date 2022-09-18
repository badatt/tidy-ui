import { color, css, hsla, Icon, styled } from '@tidy-ui/commons';
import { ICodeProps } from './types';

const IconStyle = css<ICodeProps>`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  height: 1.8rem;
  width: 1.8rem;
  padding: 0.25rem;
  border-radius: 4px;
`;

const CopyIcon = styled(Icon.CopyAll)`
  visibility: hidden;
  cursor: pointer;
  ${({ theme: { isDark } }) => css`
    color: ${isDark ? hsla(color.slate[300]) : hsla(color.slate[600])};
    border: 1px solid ${isDark ? hsla(color.slate[600]) : hsla(color.slate[400])};
    background-color: ${isDark ? hsla(color.slate[700]) : hsla(color.slate[300])};
  `}
  ${IconStyle}
`;

const CopySuccessIcon = styled(Icon.CheckCircle)`
  ${({ theme: { palette, isDark } }) => css`
    color: ${palette.success[600]};
    border: 1px solid ${palette.success[600]};
    background-color: ${isDark ? hsla(color.slate[700]) : hsla(color.slate[300])};
  `}
  ${IconStyle}
`;

const CodeRoot = styled.div<ICodeProps>`
  overflow: auto;
  position: relative;
  ${({ margin, h, w }) => css`
    height: ${h};
    width: ${w};
    margin: ${margin};
  `}
  &:hover ${CopyIcon} {
    visibility: visible;
  }
`;

const Content = styled.pre<ICodeProps>`
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  overflow: auto;
  padding: 1rem;
  line-height: 1.45;
  ${({ theme: { layout, isDark } }) => css`
    border-radius: ${layout.radius};
    background-color: ${isDark ? hsla(color.slate[800]) : hsla(color.slate[200])};
  `}
`;

/**
 * Tooltip props
 */
interface IToolTipProps {
  /**
   * If `true`, set the tool tip visible
   */
  visible: boolean;
}

const ToolTip = styled.div<ICodeProps & IToolTipProps>`
  position: absolute;
  top: 0.8rem;
  right: 2.6rem;
  font-size: 0.6rem;
  border-radius: 5px;
  padding: 6px 8px;
  transition: opacity 0.3s;
  ${({ theme: { isDark, palette }, visible }) => css`
    opacity: ${visible ? '1' : '0'};
    color: ${isDark ? palette.neutral[200] : palette.neutral[200]};
    background-color: ${isDark ? palette.neutral[500] : palette.neutral[800]};
  `}
  &::after {
    content: '';
    position: absolute;
    left: 100%;
    top: 50%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    ${({ theme: { isDark, palette } }) => css`
      border-color: transparent transparent transparent ${isDark ? palette.neutral[500] : palette.neutral[800]};
    `}
  }
`;

export { CodeRoot, Content, CopyIcon, CopySuccessIcon, ToolTip };
