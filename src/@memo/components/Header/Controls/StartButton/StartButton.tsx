import {Button} from '@memo/components/Button/Button';
import {ButtonColor} from '@memo/components/Button/types';
import {LevelsModal} from '@memo/components/LevelsModal/LevelsModal';
import {ModalContainer} from '@memo/components/ModalContainer/ModalContainer';
import {useModal} from '@memo/services/hooks/useModal';

export const StartButton = () => {
  const {isOpen, toggleModal} = useModal();

  return (
    <>
      <Button
        onClick={toggleModal}
        color={ButtonColor.ACCENT}
      >
        Start
      </Button>
      {isOpen && (
        <ModalContainer onClickOutside={toggleModal}>
          <LevelsModal />
        </ModalContainer>
      )}
    </>
  );
};
