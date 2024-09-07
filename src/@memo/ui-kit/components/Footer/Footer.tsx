import {Indicator} from '../Indicator/Indicator';
import styles from './Footer.module.css';
import {useFooter} from './useFooter';

export const Footer = () => {
  const {time, movements} = useFooter();
  return (
    <footer className={styles.footer}>
      <Indicator
        title="Time:"
        value={time.toString()}
      />
      <Indicator
        title="Movements:"
        value={movements.toString()}
      />
    </footer>
  );
};
