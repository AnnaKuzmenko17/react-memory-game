import {Button} from '@memo/ui-kit/components/Button/Button';
import {ButtonColor} from '@memo/ui-kit/components/Button/types';
import {LevelsModal} from '@memo/ui-kit/components/LevelsModal/LevelsModal';
import {ModalContainer} from '@memo/ui-kit/components/ModalContainer/ModalContainer';
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
