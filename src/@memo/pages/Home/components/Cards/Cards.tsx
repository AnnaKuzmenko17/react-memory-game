import {getImageUrl} from '@memo/services/helpers/getImageUrl';
import {CardItem} from '@memo/ui-kit/components/CardItem/CardItem';
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
          <CardItem
            key={id}
            name={item.name}
            imgUrl={imgUrl}
            status={item.status}
            onFlip={() => flipCard(id)}
          />
        );
      })}
    </div>
  );
};
