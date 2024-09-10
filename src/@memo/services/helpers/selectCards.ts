import {data} from '@memo/data/data';

import {shuffleCards} from './shuffleCards';

export const selectCards = (n: number) => {
  if (n === 9) return shuffleCards([...data, ...data]);

  const selectedCards = shuffleCards(data).slice(0, n);
  return shuffleCards([...selectedCards, ...selectedCards]);
};
