import {Button} from './Button';
import {GameBoardContext} from '../../store/GameBoardContext';
import {useContext} from 'react';

export const LevelOptions = () => {
  const gameCtx = useContext(GameBoardContext);
  function handleClick(level: number) {
    gameCtx.startGame(level);
  }
  return (
    <div>
      <Button onClick={() => handleClick(3)}>3</Button>
      <Button onClick={() => handleClick(6)}>6</Button>
      <Button onClick={() => handleClick(9)}>9</Button>
    </div>
  );
};
