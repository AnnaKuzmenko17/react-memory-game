import {useModal} from '@memo/services/hooks/useModal';
import {Button} from '@memo/ui-kit/components/Button/Button';
import {ModalContainer} from '@memo/ui-kit/components/ModalContainer/ModalContainer';

import styles from './ModalContainers.module.css';

export const ModalContainers = () => {
  const {isOpen, toggleModal} = useModal();

  return (
    <>
      <Button onClick={toggleModal}>open modal</Button>
      {isOpen && (
        <ModalContainer onClickOutside={toggleModal}>
          <div className={styles.modal}>modal</div>
        </ModalContainer>
      )}
    </>
  );
};
