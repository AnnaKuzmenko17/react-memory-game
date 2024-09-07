import type {FC, ReactNode} from 'react';

import styles from './Section.module.css';

interface Props {
  children: ReactNode;
  title: string;
}

export const Section: FC<Props> = ({title, children}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {children}
      </div>
    </section>
  );
};
