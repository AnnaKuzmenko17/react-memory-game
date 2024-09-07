import {StateCreator} from 'zustand';

import {TimerState} from './types';

export const createTimerSlice: StateCreator<TimerState> = (set, get) => ({
  time: 0,
  isRunning: false,
  startTimer: () => {
    const interval = setInterval(() => {
      set((state) => ({
        time: state.time + 1,
      }));
    }, 1000);
    set({intervalId: interval});
  },
  resetTimer: () => {
    clearInterval(get().intervalId);
    set({time: 0});
  },
  intervalId: undefined,
});
