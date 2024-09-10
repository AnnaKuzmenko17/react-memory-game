import useStore from 'src/app/store';

export const useTheme = () => {
  const {theme} = useStore();

  return theme;
};
