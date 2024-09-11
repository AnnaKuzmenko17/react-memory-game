import {type FC, type ReactNode, useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';

import styles from './ModalContainer.module.css';

interface Props {
  children: ReactNode;
  onClickOutside?: () => void;
}

export const ModalContainer: FC<Props> = ({children, onClickOutside}) => {
  const portalRef = useRef<HTMLDivElement>(document.createElement('div'));

  useEffect(() => {
    const portal = portalRef.current;
    document.body.appendChild(portal);

    return () => {
      document.body.removeChild(portal);
    };
  }, []);

  return createPortal(
    <div
      role="dialog"
      className={styles.overlay}
      onClick={onClickOutside}
    >
      {children}
    </div>,
    portalRef.current,
  );
};
