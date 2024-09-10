import {useIndicators} from '@memo/services/hooks/useIndicators';

import {Indicator} from '../Indicator/Indicator';
import styles from './Footer.module.css';

export const Footer = () => {
  const {time, movements} = useIndicators();

  return (
    <footer className={styles.footer}>
      <Indicator
        title="Time:"
        value={time}
      />
      <Indicator
        title="Movements:"
        value={movements}
      />
    </footer>
  );
};
