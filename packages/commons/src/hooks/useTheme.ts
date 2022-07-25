import { useTheme as useStyledTheme } from 'styled-components';
import { ITidyUITheme } from '@tidy-ui/types';

const useTheme = () => {
  const theme = useStyledTheme() as ITidyUITheme;
  return {
    isDark: theme.isDark,
    name: theme.name,
  };
};

export default useTheme;
