import { Route, Routes, Navigate, Link } from 'react-router-dom';

import { BooksFeature } from '@learning-nx/books/feature';
import { CartFeature } from '@learning-nx/cart/feature';

// importing the UI library into our App
import {
  GlobalStyles,
  Header,
  Main,
  NavigationItem,
  NavigationList,
} from '@learning-nx/ui';


export function App() {
  return (
    <>
      <GlobalStyles />
      <Header>
        <h1>Bookstore</h1>
        <NavigationList>
          <NavigationItem>
            <Link to="/books">Books</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/cart">Cart</Link>
          </NavigationItem>
        </NavigationList>
      </Header>
      <Main>
        <Routes>
          <Route path="/books" element={<BooksFeature />} />
          <Route path="/cart" element={<CartFeature />} />
          <Route path="/" element={<Navigate to="/books" replace />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
