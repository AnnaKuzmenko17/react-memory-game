import {DataItem} from '@memo/types/types';

export interface GameState {
  board: DataItem[] | [];
  selectedCards: DataItem[] | [];
  movements: number;
  isGameStarted: boolean;
  isGameOver: boolean;
  startGame: (level: number) => void;
  flipCard: (id: string) => void;
  checkMatch: () => void;
}
