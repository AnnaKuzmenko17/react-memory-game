import {data} from '@memo/data/data';
import {CardStatus, DataItem} from '@memo/types/types';

export const cardItemConfig: DataItem[] = [
  {
    ...data[0],
    status: CardStatus.MATCH,
  },
  {
    ...data[0],
    status: CardStatus.FLIPPED,
  },
  {
    ...data[0],
    status: CardStatus.INITIAL,
  },
];
