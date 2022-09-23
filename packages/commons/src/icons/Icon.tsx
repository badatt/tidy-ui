import React from 'react';
import { IBaseProps } from '@tidy-ui/types';
import AddCircleIcon from './AddCircleIcon';
import AddIcon from './AddIcon';
import CancelIcon from './CancelIcon';
import CheckCircleIcon from './CheckCircleIcon';
import CloseIcon from './CloseIcon';
import CopyAllIcon from './CopyAllIcon';
import DangerousIcon from './DangerousIcon';
import ExpandLessIcon from './ExpandLessIcon';
import ExpandMoreIcon from './ExpandMoreIcon';
import InfoIcon from './InfoIcon';
import LaunchIcon from './LaunchIcon';
import LinkIcon from './LinkIcon';
import RemoveIcon from './RemoveIcon';
import RotatingCircleIcon from './RotatingCircleIcon';
import WarningIcon from './WarningIcon';

/**
 * Icon props
 */
interface IIconProps extends IBaseProps, React.HTMLAttributes<HTMLDivElement> {
  /**
   * Icon element
   */
  ele: JSX.Element;

  /**
   * Margin
   */
  margin?: string;
}

/** @internal */
export interface IconComponent
  extends React.ForwardRefExoticComponent<Omit<IIconProps, 'children'> & React.RefAttributes<HTMLDivElement>> {
  /** @internal */
  Add: typeof AddIcon;
  /** @internal */
  AddCircle: typeof AddCircleIcon;
  /** @internal */
  Cancel: typeof CancelIcon;
  /** @internal */
  CheckCircle: typeof CheckCircleIcon;
  /** @internal */
  Close: typeof CloseIcon;
  /** @internal */
  CopyAll: typeof CopyAllIcon;
  /** @internal */
  Dangerous: typeof DangerousIcon;
  /** @internal */
  ExpandLess: typeof ExpandLessIcon;
  /** @internal */
  ExpandMore: typeof ExpandMoreIcon;
  /** @internal */
  Info: typeof InfoIcon;
  /** @internal */
  Launch: typeof LaunchIcon;
  /** @internal */
  Link: typeof LinkIcon;
  /** @internal */
  Remove: typeof RemoveIcon;
  /** @internal */
  RotatingCircle: typeof RotatingCircleIcon;
  /** @internal */
  Warning: typeof WarningIcon;
}

/**
 * Icon wrapper component
 */
const Icon = React.forwardRef<HTMLDivElement, Omit<IIconProps, 'children'>>((props, ref) => {
  const { ele, style, h, margin, w, ...rest } = props;
  const styles = { ...style, height: h, margin, width: w };
  return React.cloneElement(ele, { ref, style: styles, ...rest });
}) as IconComponent;

Icon.defaultProps = {
  h: '1.25em',
  w: '1.25em',
};

Icon.Add = AddIcon;
Icon.AddCircle = AddCircleIcon;
Icon.Cancel = CancelIcon;
Icon.CheckCircle = CheckCircleIcon;
Icon.Close = CloseIcon;
Icon.CopyAll = CopyAllIcon;
Icon.Dangerous = DangerousIcon;
Icon.ExpandLess = ExpandLessIcon;
Icon.ExpandMore = ExpandMoreIcon;
Icon.Info = InfoIcon;
Icon.Launch = LaunchIcon;
Icon.Link = LinkIcon;
Icon.Remove = RemoveIcon;
Icon.RotatingCircle = RotatingCircleIcon;
Icon.Warning = WarningIcon;

export { Icon };
