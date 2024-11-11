import { useEffect, useState } from 'react'
import {getBooks } from '@learning-nx/books/data-access'
import {Books} from '@learning-nx/books/ui'
import {IBook} from '@learning-nx/shared-models'
import {useDispatch} from 'react-redux';
import {cartActions} from '@learning-nx/cart/data-access'

export const BooksFeature = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getBooks().then(setBooks);
},[
  // This effect runs only once on first component render
  /* so we declare it as having no dependent state. */
])

return (
  <>
    <h2>Books</h2>
   <Books
     books={books}
     onAdd={(book) =>
       dispatch(
         cartActions.add({
           id: book.id,
           description: book.title,
           cost: book.price,
         })
       )
      }/>
  </>
);
};

export default BooksFeature;
