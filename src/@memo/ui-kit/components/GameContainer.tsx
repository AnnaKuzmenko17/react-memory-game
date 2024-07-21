import {useContext} from 'react';
import {Button} from './Button';
import {Cards} from './Cards';
import styles from './GameContainer.module.css';
import {LevelOptions} from './LevelOptions';
import {GameBoardContext} from '../../store/GameBoardContext';
import {CardStatus} from '../../assets/data';
import {Timer} from './Timer';
import {TimewatchContextProvider} from '../../store/TimewatchContext';

export const GameContainer = () => {
  const GameBoardCtx = useContext(GameBoardContext);
  let board = GameBoardCtx.gameBoard;
  let gameIsOver = board.filter((item) => item.status === CardStatus.INITIAL).length === 0;
  return (
    <>
      <div className={styles['game-container']}>
        <Cards />
      </div>
      <LevelOptions />
      {gameIsOver && <p>You win</p>}
      <TimewatchContextProvider>
        <Timer />
      </TimewatchContextProvider>
    </>
  );
};
