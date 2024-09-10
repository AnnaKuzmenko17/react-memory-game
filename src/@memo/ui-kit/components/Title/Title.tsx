import {useTheme} from '@memo/services/hooks/useTheme';
import {Theme} from '@memo/store/Theme/types';
import classNames from 'classnames';
import type {FC} from 'react';

import styles from './Title.module.css';

interface Props {
  text: string;
}

export const Title: FC<Props> = ({text}) => {
  const theme = useTheme();
  const className = classNames(styles.title, {[styles.title_dark]: theme === Theme.DARK});

  return <h2 className={className}>{text}</h2>;
};
