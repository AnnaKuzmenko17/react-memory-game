import {Theme} from '@memo/store/Theme/types';
import classNames from 'classnames';
import type {FC} from 'react';
import useStore from 'src/app/store';

import {Title} from '../Title/Title';
import styles from './Indicator.module.css';

interface Props {
  title: string;
  value: string;
}

export const Indicator: FC<Props> = ({title, value}) => {
  const {theme} = useStore();
  const className = classNames(styles.indicator, {[styles.indicator_dark]: theme === Theme.DARK});

  return (
    <div className={className}>
      <Title text={title} />
      <Title text={value} />
    </div>
  );
};
