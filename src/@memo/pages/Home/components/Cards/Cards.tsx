import {Theme} from '@memo/store/Theme/types';
import {CardItem} from '@memo/ui-kit/components/CardItem/CardItem';

import styles from './Cards.module.css';
import {useCards} from './useCards';

export const Cards = () => {
  const {board, flipCard, theme} = useCards();
  return (
    <div className={styles.grid}>
      {board.map((item, i) => {
        const id = `${item.id}-${i}`;
        return (
          <CardItem
            key={id}
            name={item.name}
            imgUrl={theme === Theme.DARK ? item.dark : item.img}
            status={item.status}
            onFlip={() => flipCard(id)}
          />
        );
      })}
    </div>
  );
};
