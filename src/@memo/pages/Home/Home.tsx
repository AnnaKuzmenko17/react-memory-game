import {ModalContainer} from '@memo/components/ModalContainer/ModalContainer';
import {WinModal} from '@memo/components/WinModal/WinModal';

import {Cards} from './components/Cards/Cards';
import {useHomePage} from './useHomePage';

export const HomePage = () => {
  const isGameOver = useHomePage();
  return (
    <>
      <Cards />
      {isGameOver && (
        <ModalContainer>
          <WinModal />
        </ModalContainer>
      )}
    </>
  );
};
