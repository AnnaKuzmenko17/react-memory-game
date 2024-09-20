import styles from './Controls.module.css';
import {RestartButton} from './RestartButton/RestartButton';
import {StartButton} from './StartButton/StartButton';
import {useControls} from './useControls';

export const Controls = () => {
  const isGameStarted = useControls();
  return <div className={styles.controls}>{isGameStarted ? <RestartButton /> : <StartButton />}</div>;
};
