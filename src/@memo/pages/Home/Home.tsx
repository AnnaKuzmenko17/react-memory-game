import {ModalContainer} from '@memo/ui-kit/components/ModalContainer/ModalContainer';
import {WinModal} from '@memo/ui-kit/components/WinModal/WinModal';

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
