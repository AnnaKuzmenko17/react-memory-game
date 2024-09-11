import {Container} from '@memo/components/Container/Container';
import {Footer} from '@memo/components/Footer/Footer';
import {Header} from '@memo/components/Header/Header';
import {HomePage} from '@memo/pages/Home/Home';
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
