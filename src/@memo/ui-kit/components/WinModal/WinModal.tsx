import {useIndicators} from '@memo/services/hooks/useIndicators';

import {RestartButton} from '../Header/Controls/RestartButton/RestartButton';
import {Indicator} from '../Indicator/Indicator';
import {Title} from '../Title/Title';
import {WIN_MESSAGE} from './constants';
import styles from './WinModal.module.css';

export const WinModal = () => {
  const {time, movements} = useIndicators();

  return (
    <div className={styles.win}>
      <Title text={WIN_MESSAGE} />
      <div className={styles.indicators}>
        <Indicator
          title="Time:"
          value={time}
        />
        <Indicator
          title="Movements:"
          value={movements}
        />
      </div>
      <RestartButton />
    </div>
  );
};
