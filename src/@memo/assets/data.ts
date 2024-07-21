import princess1 from './images/princess-1.png';
import princess2 from './images/princess-2.png';
import princess3 from './images/princess-3.png';
import princess4 from './images/princess-4.png';
import princess5 from './images/princess-5.png';
import princess6 from './images/princess-6.png';
import princess7 from './images/princess-7.png';
import princess8 from './images/princess-8.png';
import princess9 from './images/princess-9.png';

export interface DataItem {
  id: number;
  name: string;
  img: string;
  dark: string;
  status: CardStatus;
}

export enum CardStatus {
  INITIAL = 'initial',
  FLIPPED = 'flipped',
  MATCH = 'match',
}

export const data: DataItem[] = [
  {
    id: 1,
    name: 'princess1',
    img: princess1,
    dark: 'src/data/images/dark-1.png',
    status: CardStatus.INITIAL,
  },
  {
    id: 2,
    name: 'princess2',
    img: princess2,
    dark: 'src/data/images/dark-2.png',
    status: CardStatus.INITIAL,
  },
  {
    id: 3,
    name: 'princess3',
    img: princess3,
    dark: 'src/data/images/dark-3.png',
    status: CardStatus.INITIAL,
  },
  {
    id: 4,
    name: 'princess4',
    img: princess4,
    dark: 'src/data/images/dark-4.png',
    status: CardStatus.INITIAL,
  },
  {
    id: 5,
    name: 'princess5',
    img: princess5,
    dark: 'src/data/images/dark-5.png',
    status: CardStatus.INITIAL,
  },
  {
    id: 6,
    name: 'princess6',
    img: princess6,
    dark: 'src/data/images/dark-6.png',
    status: CardStatus.INITIAL,
  },
  {
    id: 7,
    name: 'princess7',
    img: princess7,
    dark: 'src/data/images/dark-7.png',
    status: CardStatus.INITIAL,
  },
  {
    id: 8,
    name: 'princess8',
    img: princess8,
    dark: 'src/data/images/dark-8.png',
    status: CardStatus.INITIAL,
  },
  {
    id: 9,
    name: 'princess9',
    img: princess9,
    dark: 'src/data/images/dark-9.png',
    status: CardStatus.INITIAL,
  },
];
