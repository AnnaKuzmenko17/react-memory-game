import useStore from 'src/app/store';

export const useLevelButton = (level: number) => {
  const {startGame, startTimer} = useStore();

  const handleStart = () => {
    startGame(level);
    startTimer();
  };

  return handleStart;
};
