import {Indicator} from '../Indicator/Indicator';
import {RestartButton} from '../RestartButton/RestartButton';
import {Title} from '../Title/Title';
import {WIN_MESSAGE} from './constants';
import {useWinModal} from './useWinModal';
import styles from './WinModal.module.css';

export const WinModal = () => {
  const {time, movements} = useWinModal();

  return (
    <div className={styles.win}>
      <Title text={WIN_MESSAGE} />
      <div className={styles.indicators}>
        <Indicator
          title="Time:"
          value={time.toString()}
        />
        <Indicator
          title="Movements:"
          value={movements.toString()}
        />
      </div>
      <RestartButton />
    </div>
  );
};
