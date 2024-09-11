import {Theme} from '@memo/store/Theme/types';
import classNames from 'classnames';

import styles from './SwitchButton.module.css';
import {useSwitchButton} from './useSwitchButton';

export const SwitchButton = () => {
  const {theme, toggleTheme} = useSwitchButton();
  const className = classNames(styles.switchButton, {[styles['switchButton--dark']]: theme === Theme.DARK});

  return (
    <button
      className={className}
      onClick={toggleTheme}
    >
      <span></span>
    </button>
  );
};
