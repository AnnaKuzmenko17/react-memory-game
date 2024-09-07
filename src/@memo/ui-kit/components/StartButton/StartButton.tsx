import {Button} from '../Button/Button';
import {ButtonColor} from '../Button/types';
import {LevelsModal} from '../LevelsModal/LevelsModal';
import {ModalContainer} from '../ModalContainer/ModalContainer';
import {useStartButton} from './useStartButton';

export const StartButton = () => {
  const {isOpen, toggleModal} = useStartButton();

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
