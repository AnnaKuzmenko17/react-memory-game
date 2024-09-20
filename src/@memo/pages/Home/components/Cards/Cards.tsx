import {CardItem} from '@memo/components/CardItem/CardItem';
import {getImageUrl} from '@memo/services/helpers/getImageUrl';
import classNames from 'classnames';

import styles from './Cards.module.css';
import {useCards} from './useCards';

export const Cards = () => {
  const {board, flipCard, theme} = useCards();

  const className = classNames(styles.cards, {
    [styles['cards--small']]: board.length === 6,
    [styles['cards--medium']]: board.length === 12,
    [styles['cards--large']]: board.length === 18,
  });

  return (
    <div className={className}>
      {board.map((item, i) => {
        const id = `${item.id}-${i}`;
        const imgUrl = getImageUrl(theme, item.name);

        return (
          <div
            className={styles.card_container}
            key={id}
          >
            <CardItem
              name={item.name}
              imgUrl={imgUrl}
              status={item.status}
              onFlip={() => flipCard(id)}
            />
          </div>
        );
      })}
    </div>
  );
};
