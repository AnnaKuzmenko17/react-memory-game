import useStore from 'src/app/store';

export const useHomePage = () => {
  const {isGameOver, stopTimer} = useStore();

  if (isGameOver) {
    stopTimer();
  }

  return isGameOver;
};
