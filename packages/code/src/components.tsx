import { applyStandardOverrideStyles, color, css, hsla, Icon, styled } from '@tidy-ui/commons';
import { IconStyle } from './styles';
import { ICodeProps } from './types';

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
  &:hover ${CopyIcon} {
    visibility: visible;
  }
  ${applyStandardOverrideStyles}
`;

const Content = styled.pre<ICodeProps>`
  overflow: auto;
  padding: 1rem;
  line-height: 1.45;
  ${({ theme: { font, layout, isDark } }) => css`
    font-family: ${font.mono};
    font-size: ${font.size};
    border-radius: ${layout.radius};
    background-color: ${isDark ? hsla(color.slate[700]) : hsla(color.slate[200])};
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
    color: ${palette.neutral[200]};
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
