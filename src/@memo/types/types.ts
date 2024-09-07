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
