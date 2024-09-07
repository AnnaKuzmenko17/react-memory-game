import {SwitchButton} from '../SwitchButton/SwitchButton';
import {Controls} from './Controls/Controls';
import styles from './Header.module.css';
import {Logo} from './Logo/Logo';

export const Header = () => {
  return (
    <header className={styles.header}>
      <SwitchButton />
      <Logo />
      <Controls />
    </header>
  );
};
