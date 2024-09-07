import {checkMatch} from '@memo/services/helpers/checkMatch';
import {handleFlip} from '@memo/services/helpers/handleFlip';
import {selectCards} from '@memo/services/helpers/selectCards';
import {CardStatus} from '@memo/types/types';
import {StateCreator} from 'zustand';

import {GameState} from './types';

export const createGameSlice: StateCreator<GameState> = (set, get) => ({
  board: selectCards(9),
  selectedCards: [],
  movements: 0,
  isGameOver: false,
  isGameStarted: false,
  startGame: (level) =>
    set(() => ({
      board: selectCards(level),
      selectedCards: [],
      isGameOver: false,
      isGameStarted: true,
      movements: 0,
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
});
