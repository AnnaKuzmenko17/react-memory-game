import {FC, ReactNode} from 'react';

import styles from './Button.module.css';

interface Props {
  onClick: () => void;
  children: ReactNode;
}

export const Button: FC<Props> = ({onClick, children}) => {
  return (
    <button
      className={styles.btn}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
