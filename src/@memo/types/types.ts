export interface DataItem {
  id: number;
  name: string;
  status: CardStatus;
}

export enum CardStatus {
  INITIAL = 'initial',
  FLIPPED = 'flipped',
  MATCH = 'match',
}
