import {Container} from '@memo/components/Container/Container';
import {GamePage} from '@memo/pages/Game/GamePage';
import {Route, Routes} from 'react-router-dom';

export const AppComponent = () => {
  return (
    <Container>
      <Routes>
        <Route
          path="/"
          element={<GamePage />}
        />
      </Routes>
    </Container>
  );
};
