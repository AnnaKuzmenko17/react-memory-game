import useStore from 'src/app/store';

export const useHeader = () => {
  const {isGameStarted} = useStore();
  return isGameStarted;
};
