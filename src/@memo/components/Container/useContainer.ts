import {Theme} from '@memo/store/Theme/types';
import classNames from 'classnames';
import useStore from 'src/app/store';

import styles from './Container.module.css';

export const useContainer = () => {
  const {theme} = useStore();

  const className = classNames(styles.container, {
    [styles['container-dark']]: theme === Theme.DARK,
  });

  return className;
};
