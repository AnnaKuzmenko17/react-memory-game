import {FC, useContext, useEffect, useState} from 'react';
import {TimewatchContext, useTimewatch} from '../../store/TimewatchContext';
import {Button} from './Button';

export const Timer: FC = () => {
  const {time, startTimer, restartTimer} = useTimewatch();

  const handleStart = () => {
    useEffect(() => {
      let timer = setInterval(() => {
        startTimer();
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }, []);
  };

  const handleRestart = () => {
    restartTimer();
    useEffect(() => {
      let timer = setInterval(() => {
        startTimer();
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }, []);
  };

  return (
    <>
      <Button onClick={handleStart}>Start</Button>
      <Button onClick={handleRestart}>Start</Button>
      <p>{time}</p>;
    </>
  );
};
