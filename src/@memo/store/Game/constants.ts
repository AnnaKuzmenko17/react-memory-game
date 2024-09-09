import {selectCards} from '@memo/services/helpers/selectCards';

export const INITIAL_GAME_STATE = {
  board: selectCards(9),
  selectedCards: [],
  isGameOver: false,
  isGameStarted: false,
  movements: 0,
};
