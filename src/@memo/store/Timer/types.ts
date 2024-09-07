export interface TimerState {
  time: number;
  startTimer: () => void;
  resetTimer: () => void;
  intervalId: number | undefined;
}
