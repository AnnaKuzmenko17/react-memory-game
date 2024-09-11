import useStore from 'src/app/store';

export const useSwitchButton = () => {
  const {theme, toggleTheme} = useStore();

  return {
    theme,
    toggleTheme,
  };
};
