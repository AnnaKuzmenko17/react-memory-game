import {CardStatus, DataItem} from '@memo/types/types';

import {changeCardStatus} from './changeCardStatus';

export const checkMatch = (cards: DataItem[] | [], selectedCards: DataItem[] | []) => {
  if (selectedCards[0].id === selectedCards[1].id) {
    return changeCardStatus(cards, CardStatus.MATCH);
  } else {
    return changeCardStatus(cards, CardStatus.INITIAL);
  }
};
