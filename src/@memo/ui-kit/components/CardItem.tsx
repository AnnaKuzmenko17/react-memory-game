import {FC, useContext, useState} from 'react';
import {Image} from './Image';
import {GameBoardContext} from '../../store/GameBoardContext';

interface Props {
  name: string;
  imgUrl: string;
  flipped: boolean;
  match: boolean;
  onFlip: () => void;
}

export const CardItem: FC<Props> = ({name, imgUrl, flipped, match, onFlip}) => {
  function handleClick() {
    onFlip();
  }

  return (
    <>
      {(flipped || match) && (
        <Image
          url={imgUrl}
          alt={name}
        />
      )}
      {!flipped && !match && <div onClick={handleClick} />}
    </>
  );
};
