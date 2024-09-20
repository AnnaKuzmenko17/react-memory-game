import useStore from 'src/app/store';

export const useGamePage = () => {
  const {isGameOver, stopTimer} = useStore();

  if (isGameOver) {
    stopTimer();
  }

  return isGameOver;
};
