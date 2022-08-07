import { useTheme as useStyledTheme } from 'styled-components';
import { ITidyUITheme } from '@tidy-ui/types';

/**
 * React hook to get the theme attributes
 *
 * @returns {{isDark: boolean; name: string}} theme props
 */
const useTheme = () => {
  const theme = useStyledTheme() as ITidyUITheme;
  return {
    isDark: theme.isDark,
    name: theme.name,
  };
};

export default useTheme;
