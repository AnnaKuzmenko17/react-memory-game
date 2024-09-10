import {useTheme} from '@memo/services/hooks/useTheme';
import {Theme} from '@memo/store/Theme/types';
import classNames from 'classnames';
import type {FC, ReactNode} from 'react';

import styles from './Button.module.css';
import {ButtonColor} from './types';

interface Props {
  onClick: () => void;
  children: ReactNode;
  color?: ButtonColor;
}

export const Button: FC<Props> = ({color = ButtonColor.PRIMARY, onClick, children}) => {
  const theme = useTheme();

  const className = classNames(styles.button, {
    [styles.button_accent]: color === ButtonColor.ACCENT,
    [styles.darkButton]: theme === Theme.DARK,
  });

  return (
    <button
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
