import useStore from 'src/app/store';

export const useWinModal = () => {
  const {time, movements} = useStore();

  return {time, movements};
};
