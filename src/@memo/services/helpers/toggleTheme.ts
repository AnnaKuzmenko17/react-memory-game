import {Theme} from '../../store/Theme/old/types';

export const toggleTheme = (theme: Theme) => {
  return theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
};
