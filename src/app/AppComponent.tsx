import {HomePage} from '@memo/pages/Home/Home';
import {Container} from '@memo/ui-kit/components/Container/Container';
import {Footer} from '@memo/ui-kit/components/Footer/Footer';
import {Header} from '@memo/ui-kit/components/Header/Header';
import {Route, Routes} from 'react-router-dom';

export const AppComponent = () => {
  return (
    <Container>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
        </Routes>
      </main>
      <Footer />
    </Container>
  );
};
