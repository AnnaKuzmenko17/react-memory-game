import {createGameSlice} from '@memo/store/Game/gameSlice';
import {GameState} from '@memo/store/Game/types';
import {createThemeSlice} from '@memo/store/Theme/themeSlice';
import {ThemeState} from '@memo/store/Theme/types';
import {createTimerSlice} from '@memo/store/Timer/timerSlice';
import {TimerState} from '@memo/store/Timer/types';
import {create} from 'zustand';

export type RootState = GameState & ThemeState & TimerState;

const useStore = create<RootState>((set, get, api) => ({
  ...createGameSlice(set, get, api),
  ...createThemeSlice(set, get, api),
  ...createTimerSlice(set, get, api),
}));

export default useStore;
