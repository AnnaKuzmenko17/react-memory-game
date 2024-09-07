import type {FC} from 'react';

import {Button} from '../Button/Button';
import {useLevelButton} from './useLevelButton';

interface Props {
  level: number;
}

export const LevelButton: FC<Props> = ({level}) => {
  const handleStart = useLevelButton(level);
  return <Button onClick={handleStart}>{level}</Button>;
};
