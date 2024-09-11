import {useTheme} from '@memo/services/hooks/useTheme';
import {Theme} from '@memo/store/Theme/types';
import classNames from 'classnames';
import type {FC} from 'react';

import styles from './Indicator.module.css';

interface Props {
  title: string;
  value: string;
}

export const Indicator: FC<Props> = ({title, value}) => {
  const theme = useTheme();
  const className = classNames(styles.indicator, {[styles.indicator_dark]: theme === Theme.DARK});

  return (
    <div className={className}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};
