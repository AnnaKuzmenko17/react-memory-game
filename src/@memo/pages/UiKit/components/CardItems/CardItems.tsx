import {Theme} from '@memo/store/Theme/types';
import {FC} from 'react';
import {CardItem as Card} from 'src/@memo/ui-kit/components/CardItem/CardItem';

import styles from './CardItems.module.css';
import {cardItemConfig} from './constants';

interface Props {
  theme: Theme;
}

export const CardItems: FC<Props> = ({theme}) => {
  return (
    <div className={styles.grid}>
      {cardItemConfig.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          imgUrl={theme === Theme.LIGHT ? card.img : card.dark}
          status={card.status}
          onFlip={() => console.log('flipped')}
        />
      ))}
    </div>
  );
};
