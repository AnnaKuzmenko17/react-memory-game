import React from 'react';
import {createContext, useReducer} from 'react';
import {CardStatus, DataItem, data} from '../assets/data';

interface GameBoardContextType {
  gameBoard: DataItem[] | [];
  startGame: (level: number) => void;
  flipCard: (id: string) => void;
  checkIfMatch: () => void;
}

interface GameBoardAction {
  type: string;
  level?: number;
  id?: string;
}

interface GameBoardContextProviderProps {
  children: React.ReactNode;
}

interface GameBoardState {
  gameBoard: DataItem[] | [];
}

const INITIAL_GAME_BOARD = [...data, ...data].sort(() => 0.5 - Math.random());

export const GameBoardContext = createContext<GameBoardContextType>({
  gameBoard: [],
  startGame: (level: number) => {},
  flipCard: (id: string) => {},
  checkIfMatch: () => {},
});

const GameBoardReducer = (state: GameBoardState, action: GameBoardAction): GameBoardState => {
  if (action.type === 'START_GAME') {
    const level = action.level;
    let updatedGameBoard = [...data]
      .slice(0, level)
      .concat([...data].slice(0, level))
      .sort(() => 0.5 - Math.random())
      .map((item) => {
        return {...item, status: CardStatus.INITIAL};
      });

    return {gameBoard: updatedGameBoard};
  }

  if (action.type === 'FLIP_CARD') {
    const id = action.id;
    let updatedGameBoard = [...state.gameBoard].map((item, i) => {
      if (`${item.id}-${i}` === action.id) {
        return {...item, status: CardStatus.FLIPPED};
      }
      return item;
    });
    return {gameBoard: updatedGameBoard};
  }

  if (action.type === 'CHECK_MATCH') {
    const flippedCards = [...state.gameBoard].filter((item) => {
      item.status === CardStatus.FLIPPED;
    });
    let updatedGameBoard;

    if (flippedCards.length !== 2) {
      return state;
    } else if (flippedCards.length === 2 && flippedCards[0].name === flippedCards[1].name) {
      updatedGameBoard = [...state.gameBoard].map((item) => {
        if (item.status === CardStatus.FLIPPED) {
          return {...item, status: CardStatus.MATCH};
        }
        return item;
      });
      return {...state, gameBoard: updatedGameBoard};
    } else if (flippedCards.length === 2 && flippedCards[0].name !== flippedCards[1].name) {
      updatedGameBoard = [...state.gameBoard].map((item) => {
        if (item.status === CardStatus.FLIPPED) {
          return {...item, status: CardStatus.INITIAL};
        }
        return item;
      });
      return {...state, gameBoard: updatedGameBoard};
    }
  }

  return state;
};

export const GameBoardContextProvider: React.FC<GameBoardContextProviderProps> = ({children}) => {
  const [gameBoard, dispatchGameBoardAction] = useReducer(GameBoardReducer, {gameBoard: INITIAL_GAME_BOARD});

  const startGame = (level: number) => {
    dispatchGameBoardAction({
      type: 'START_GAME',
      level,
    });
  };

  const flipCard = (id: string) => {
    dispatchGameBoardAction({
      type: 'FLIP_CARD',
      id,
    });
  };

  const checkIfMatch = () => {
    dispatchGameBoardAction({
      type: 'CHECK_MATCH',
    });
  };

  const gameBoardContext: GameBoardContextType = {
    gameBoard: gameBoard.gameBoard,
    startGame,
    flipCard,
    checkIfMatch,
  };

  return <GameBoardContext.Provider value={gameBoardContext}>{children}</GameBoardContext.Provider>;
};
