import {CardStatus} from '@memo/types/types';
import classNames from 'classnames';
import {type FC} from 'react';

import {Image} from '../Image/Image';
import styles from './CardItem.module.css';

interface Props {
  name: string;
  imgUrl: string;
  status: CardStatus;
  onFlip: () => void;
}

export const CardItem: FC<Props> = ({name, imgUrl, status, onFlip}) => {
  const className = classNames(styles.card, {
    [styles.card_flipped]: status === CardStatus.FLIPPED,
    [styles.card_match]: status === CardStatus.MATCH,
  });

  return (
    <button
      className={className}
      onClick={onFlip}
    >
      {status !== CardStatus.INITIAL && (
        <Image
          url={imgUrl}
          alt={name}
        />
      )}
    </button>
  );
};
