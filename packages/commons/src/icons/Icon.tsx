import React from 'react';
import { IBaseProps } from '@tidy-ui/types';
import AddCircleIcon from './AddCircleIcon';
import AddIcon from './AddIcon';
import CancelIcon from './CancelIcon';
import CheckCircleIcon from './CheckCircleIcon';
import CloseIcon from './CloseIcon';
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
export interface IIconProps extends IBaseProps, React.HTMLAttributes<HTMLDivElement> {
  /**
   * Icon element
   */
  ele: JSX.Element;
  /**
   * Height
   */
  h?: string;

  /**
   * Margin
   */
  mgn?: string;
  /**
   * Width
   */
  w?: string;
}

/** @internal */
interface IconComponent
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
  const { ele, style, h, mgn, w, ...rest } = props;
  const styles = { ...style, height: h, margin: mgn, width: w };
  const styledIconElement = React.cloneElement(ele, { style: styles });
  return React.createElement('i', { ref, style: styles, ...rest }, styledIconElement);
}) as IconComponent;

Icon.defaultProps = {
  h: '1em',
  w: '1em',
};

Icon.Add = AddIcon;
Icon.AddCircle = AddCircleIcon;
Icon.Cancel = CancelIcon;
Icon.CheckCircle = CheckCircleIcon;
Icon.Close = CloseIcon;
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
