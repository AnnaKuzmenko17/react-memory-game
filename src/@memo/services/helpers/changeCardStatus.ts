import {CardStatus, DataItem} from '@memo/types/types';

export const changeCardStatus = (cards: DataItem[] | [], statusName: CardStatus) => {
  return cards.map((item) => {
    if (item.status === CardStatus.FLIPPED) {
      return {...item, status: statusName};
    }
    return item;
  });
};
