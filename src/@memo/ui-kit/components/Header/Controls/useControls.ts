import useStore from 'src/app/store';

export const useControls = () => {
  const {isGameStarted} = useStore();

  return isGameStarted;
};
