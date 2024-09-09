import {CardStatus, DataItem} from '@memo/types/types';

export const checkWin = (cards: DataItem[] | []) => {
  const matchCards = cards.filter((card) => card.status === CardStatus.MATCH);

  return cards.length === matchCards.length;
};
