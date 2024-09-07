import {useState} from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpen((prevState) => !prevState);
  };

  return {
    isOpen,
    toggleModal,
  };
};
