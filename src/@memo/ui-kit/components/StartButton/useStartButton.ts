import {useModal} from '@memo/services/hooks/useModal';

export const useStartButton = () => {
  const {isOpen, toggleModal} = useModal();

  return {
    isOpen,
    toggleModal,
  };
};
