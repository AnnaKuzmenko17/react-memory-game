export interface TimerState {
  time: number;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
  intervalId: number | undefined;
}
