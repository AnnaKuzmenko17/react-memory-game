import {useContext} from 'react';
import {CardItem} from './CardItem';
import styles from './Cards.module.css';
import {GameBoardContext} from '../../store/GameBoardContext';
import {CardStatus} from '../../assets/data';

export const Cards = () => {
  const gameBoardCtx = useContext(GameBoardContext);
  const board = gameBoardCtx.gameBoard;
  console.log(board);
  return (
    <>
      <div className={styles.grid}>
        {board.map((item, i) => {
          return (
            <CardItem
              key={`${item.id}-${i}`}
              name={item.name}
              imgUrl={item.img}
              flipped={item.status === CardStatus.FLIPPED}
              match={item.status === CardStatus.MATCH}
              onFlip={() => gameBoardCtx.flipCard(`${item.id}-${i}`)}
            />
          );
        })}
      </div>
    </>
  );
};
