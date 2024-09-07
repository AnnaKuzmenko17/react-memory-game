import {Theme} from '@memo/store/Theme/types';

import {CardItems} from './CardItems';

export const Cards = () => {
  return (
    <>
      <CardItems theme={Theme.LIGHT} />
      <CardItems theme={Theme.DARK} />
    </>
  );
};
