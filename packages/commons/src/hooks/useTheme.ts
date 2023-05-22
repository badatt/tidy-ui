import { useTheme as useStyledTheme } from 'styled-components';
import { ITidyUITheme } from '../theme/types';

/**
 * React hook to get the theme attributes
 *
 * @returns {ITidyUITheme} theme props
 */
const useTheme = () => {
  const theme = useStyledTheme() as ITidyUITheme;
  return {
    font: theme.font,
    isDark: theme.isDark,
    layout: theme.layout,
    name: theme.name,
    palette: theme.palette,
    typography: theme.typography,
  };
};

export default useTheme;
