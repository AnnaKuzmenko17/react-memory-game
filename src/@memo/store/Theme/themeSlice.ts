import {StateCreator} from 'zustand';

import {Theme, ThemeState} from './types';

export const createThemeSlice: StateCreator<ThemeState> = (set) => ({
  theme: Theme.LIGHT,
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
    })),
});
