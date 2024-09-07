import {CardStatus, DataItem} from '@memo/types/types';

export const handleFlip = (cards: DataItem[], id: string) => {
  return cards.map((item, i) => {
    if (`${item.id}-${i}` === id) {
      return {...item, status: CardStatus.FLIPPED};
    }
    return item;
  });
};
