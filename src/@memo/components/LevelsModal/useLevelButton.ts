import useStore from 'src/app/store';

export const useLevelButton = (level: number) => {
  const {resetTimer, startGame, startTimer} = useStore();

  const handleStart = () => {
    resetTimer();
    startGame(level);
    startTimer();
  };

  return handleStart;
};
