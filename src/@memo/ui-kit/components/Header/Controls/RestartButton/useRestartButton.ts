import useStore from 'src/app/store';

export const useRestartButton = () => {
  const {resetGame, resetTimer} = useStore();

  const handleRestart = () => {
    resetGame();
    resetTimer();
  }
  
  return handleRestart;
};
