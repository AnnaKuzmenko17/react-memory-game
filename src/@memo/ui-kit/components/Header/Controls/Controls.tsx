import {RestartButton} from '../../RestartButton/RestartButton';
import {StartButton} from '../../StartButton/StartButton';
import styles from './Controls.module.css';
import {useControls} from './useControls';

export const Controls = () => {
  const isGameStarted = useControls();
  return <div className={styles.controls}>{isGameStarted ? <RestartButton /> : <StartButton />}</div>;
};
