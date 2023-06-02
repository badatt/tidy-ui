import React from 'react';
import { IBaseProps } from '@tidy-ui/types';
import AddCircleIcon from './AddCircleIcon';
import AddIcon from './AddIcon';
import CalendarMonthIcon from './CalendarMonthIcon';
import CancelIcon from './CancelIcon';
import CheckCircleIcon from './CheckCircleIcon';
import CloseIcon from './CloseIcon';
import CopyAllIcon from './CopyAllIcon';
import DangerousIcon from './DangerousIcon';
import EmailIcon from './EmailIcon';
import ErrorIcon from './ErrorIcon';
import ExpandLessIcon from './ExpandLessIcon';
import ExpandMoreIcon from './ExpandMoreIcon';
import FileUploadIcon from './FileUploadIcon';
import InfoIcon from './InfoIcon';
import LaunchIcon from './LaunchIcon';
import LinkIcon from './LinkIcon';
import MenuIcon from './MenuIcon';
import PersonIcon from './PersonIcon';
import PhoneIcon from './PhoneIcon';
import RemoveIcon from './RemoveIcon';
import RotatingCircleIcon from './RotatingCircleIcon';
import SearchIcon from './SearchIcon';
import SuccessIcon from './SuccessIcon';
import TimeIcon from './TimeIcon';
import VisibilityIcon from './VisibilityIcon';
import VisibilityOffIcon from './VisibilityOffIcon';
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
  CalendarMonth: typeof CalendarMonthIcon;
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
  Email: typeof EmailIcon;
  /** @internal */
  Error: typeof ErrorIcon;
  /** @internal */
  ExpandLess: typeof ExpandLessIcon;
  /** @internal */
  ExpandMore: typeof ExpandMoreIcon;
  /** @internal */
  FileUpload: typeof FileUploadIcon;
  /** @internal */
  Info: typeof InfoIcon;
  /** @internal */
  Launch: typeof LaunchIcon;
  /** @internal */
  Link: typeof LinkIcon;
  /** @internal */
  Menu: typeof MenuIcon;
  /** @internal */
  Person: typeof PersonIcon;
  /** @internal */
  Phone: typeof PhoneIcon;
  /** @internal */
  Remove: typeof RemoveIcon;
  /** @internal */
  RotatingCircle: typeof RotatingCircleIcon;
  /** @internal */
  Search: typeof SearchIcon;
  /** @internal */
  Success: typeof SuccessIcon;
  /** @internal */
  Time: typeof TimeIcon;
  /** @internal */
  Visibility: typeof VisibilityIcon;
  /** @internal */
  VisibilityOff: typeof VisibilityOffIcon;
  /** @internal */
  Warning: typeof WarningIcon;
}

/**
 * Icon wrapper component
 */
const Icon = React.forwardRef<HTMLDivElement, Omit<IIconProps, 'children'>>((props, ref) => {
  const { ele, style, height, margin, width, display, ...rest } = props;
  const styles = { ...style, display, height, margin, width };
  const styledIconElement = React.cloneElement(ele, { style: styles });
  return React.createElement('span', { ref, style: styles, ...rest }, styledIconElement);
}) as IconComponent;

Icon.defaultProps = {
  display: 'flex',
  height: '1.25em',
  width: '1.25em',
};

Icon.Add = AddIcon;
Icon.AddCircle = AddCircleIcon;
Icon.CalendarMonth = CalendarMonthIcon;
Icon.Cancel = CancelIcon;
Icon.CheckCircle = CheckCircleIcon;
Icon.Close = CloseIcon;
Icon.CopyAll = CopyAllIcon;
Icon.Dangerous = DangerousIcon;
Icon.Email = EmailIcon;
Icon.Error = ErrorIcon;
Icon.ExpandLess = ExpandLessIcon;
Icon.ExpandMore = ExpandMoreIcon;
Icon.FileUpload = FileUploadIcon;
Icon.Info = InfoIcon;
Icon.Launch = LaunchIcon;
Icon.Link = LinkIcon;
Icon.Menu = MenuIcon;
Icon.Person = PersonIcon;
Icon.Phone = PhoneIcon;
Icon.Remove = RemoveIcon;
Icon.RotatingCircle = RotatingCircleIcon;
Icon.Search = SearchIcon;
Icon.Success = SuccessIcon;
Icon.Time = TimeIcon;
Icon.Visibility = VisibilityIcon;
Icon.VisibilityOff = VisibilityOffIcon;
Icon.Warning = WarningIcon;

export { Icon };
