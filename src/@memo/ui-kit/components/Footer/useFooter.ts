import useStore from 'src/app/store';

export const useFooter = () => {
  const {time, movements} = useStore();

  return {time, movements};
};
