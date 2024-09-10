import type {FC, ReactNode} from 'react';

import {useContainer} from './useContainer';

interface Props {
  children: ReactNode;
}

export const Container: FC<Props> = ({children}) => {
  const className = useContainer();

  return <div className={className}>{children}</div>;
};
