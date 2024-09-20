import {ModalContainer} from '@memo/components/ModalContainer/ModalContainer';
import {WinModal} from '@memo/pages/Game/components/WinModal/WinModal';

import {Cards} from './components/Cards/Cards';
import {Footer} from './components/Footer/Footer';
import {Header} from './components/Header/Header';
import {useGamePage} from './useGamePage';

export const GamePage = () => {
  const isGameOver = useGamePage();

  return (
    <>
      <Header />
      <main>
        <Cards />
        {isGameOver && (
          <ModalContainer>
            <WinModal />
          </ModalContainer>
        )}
      </main>
      <Footer />
    </>
  );
};
