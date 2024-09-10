import {formatTime} from '@memo/services/helpers/formatTime';
import useStore from 'src/app/store';

export const useIndicators = () => {
  const {time, movements} = useStore();
  const formattedTime = formatTime(time);

  return {time: formattedTime, movements: movements.toString()};
};
