import * as React from 'react';
import { TStatus, TTone } from '../theme/types';
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
    status?: TStatus | TTone;
  },
>(
  props: T,
): JSX.Element => {
  switch (props.status) {
    case 'info':
      return <Icon.Info isOutlined />;
    case 'success':
      return <Icon.Success />;
    case 'warning':
      return <Icon.Warning isOutlined />;
    case 'danger':
      return <Icon.Error isOutlined />;
    default:
      return <></>;
  }
};
