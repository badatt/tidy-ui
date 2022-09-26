import * as React from 'react';
import { TTone } from '../theme/types';
import { Icon } from './Icon';

/**
 * Toned icons
 *
 * @template T
 * @param {props} props for toned icon
 * @returns {JSX.Element} icon
 */
export default <
  T extends {
    /**
     * Tone of the icon
     */
    tone?: TTone;
  },
>(
  props: T,
): JSX.Element => {
  switch (props.tone) {
    case 'info':
      return <Icon.Info />;
    case 'success':
      return <Icon.CheckCircle />;
    case 'warning':
      return <Icon.Warning />;
    case 'danger':
      return <Icon.Dangerous />;
    default:
      return <></>;
  }
};
