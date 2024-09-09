import {checkMatch} from '@memo/services/helpers/checkMatch';
import {handleFlip} from '@memo/services/helpers/handleFlip';
import {selectCards} from '@memo/services/helpers/selectCards';
import {CardStatus} from '@memo/types/types';
import {StateCreator} from 'zustand';

import {INITIAL_GAME_STATE} from './constants';
import {GameState} from './types';

export const createGameSlice: StateCreator<GameState> = (set, get) => ({
  ...INITIAL_GAME_STATE,
  startGame: (level) =>
    set(() => ({
      board: selectCards(level),
      isGameStarted: true,
    })),
  flipCard: (id) => {
    const {board, isGameStarted, selectedCards} = get();
    if (!isGameStarted || selectedCards.length === 2) return;
    const newBoard = handleFlip(board, id);
    const newSelectedCards = newBoard.filter((card) => card.status === CardStatus.FLIPPED);
    set((state) => ({
      board: newBoard,
      selectedCards: newSelectedCards,
      movements: state.movements + 1,
      isGameStarted: true,
    }));
    if (newSelectedCards.length === 2) {
      setTimeout(() => get().checkMatch(), 1000);
    }
  },
  checkMatch: () => {
    const {board, selectedCards} = get();
    const newBoard = checkMatch(board, selectedCards);
    set({board: newBoard, selectedCards: []});
  },
  resetGame: () =>
    set({
      ...INITIAL_GAME_STATE,
    }),
});
