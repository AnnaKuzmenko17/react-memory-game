import useStore from 'src/app/store';

export const useCards = () => {
  const {theme, board, flipCard} = useStore();

  return {board, flipCard, theme};
};
