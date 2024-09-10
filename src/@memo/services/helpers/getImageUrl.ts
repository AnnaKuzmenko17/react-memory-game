import {Theme} from '@memo/store/Theme/types';

export const getImageUrl = (theme: Theme, name: string) => {
  return `/images/${theme === Theme.LIGHT ? name : name + '-dark'}.png`;
};
