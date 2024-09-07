import {DataItem} from '@memo/types/types';

export const shuffleCards = (array: DataItem[]) => {
  return [...array]
    .map((value) => ({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({value}) => value);
};
