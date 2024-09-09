import type {FC, ReactNode} from 'react';
import {HashRouter} from 'react-router-dom';

interface Props {
  children: ReactNode;
}

export const Root: FC<Props> = ({children}) => {
  return <HashRouter>{children}</HashRouter>;
};
