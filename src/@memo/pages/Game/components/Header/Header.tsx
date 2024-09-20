import classNames from 'classnames';

import {SwitchButton} from '../../../../components/SwitchButton/SwitchButton';
import {Controls} from './Controls/Controls';
import styles from './Header.module.css';
import {Logo} from './Logo/Logo';
import {useHeader} from './useHeader';

export const Header = () => {
  const isGameStarted = useHeader();
  const className = classNames(styles.header, {
    [styles.header_isGameStarted]: isGameStarted,
  });

  return (
    <header className={className}>
      {!isGameStarted && <SwitchButton />}
      <Logo />
      <Controls />
    </header>
  );
};
