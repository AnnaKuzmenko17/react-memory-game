import {Theme} from '@memo/store/Theme/types';
import classNames from 'classnames';
import useStore from 'src/app/store';

import styles from './Logo.module.css';

export const Logo = () => {
  const {theme} = useStore();
  const className = classNames(styles.logo, {[styles.logo_dark]: theme === Theme.DARK});

  return <h1 className={className}>Memoria</h1>;
};
