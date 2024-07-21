import {createContext, FC, useContext, useEffect, useReducer, useState} from 'react';

interface Props {
  children: React.ReactNode;
}

interface TimewatchContextType {
  time: number;
  startTimer: () => void;
  restartTimer: () => void;
}

interface TimewatchState {
  time: number;
}

interface TimewatchAction {
  type: string;
}

export const TimewatchContext = createContext({
  time: 0,
  startTimer: () => {},
  restartTimer: () => {},
});

export const useTimewatch = () => {
  const context = useContext(TimewatchContext);
  return context;
};

const TimewatchReducer = (state: TimewatchState, action: TimewatchAction): TimewatchState => {
  if (action.type === 'START_TIMER') {
    return {...state, time: state.time + 1};
  }

  if (action.type === 'RESTART_TIMER') {
    return {...state, time: 0};
  }
  return state;
};

export const TimewatchContextProvider: FC<Props> = ({children}) => {
  const [timeState, dispatchTimewatchAction] = useReducer(TimewatchReducer, {time: 0});

  useEffect(() => {
    let timer = setInterval(() => {
      dispatchTimewatchAction({
        type: 'START_TIMER',
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [dispatchTimewatchAction]);

  const startTimer = () => {
    dispatchTimewatchAction({
      type: 'START_TIMER',
    });
  };

  const restartTimer = () => {
    dispatchTimewatchAction({
      type: 'RESTART_TIMER',
    });
  };

  const timewatchContext: TimewatchContextType = {
    time: timeState.time,
    startTimer,
    restartTimer,
  };

  return <TimewatchContext.Provider value={timewatchContext}>{children}</TimewatchContext.Provider>;
};
