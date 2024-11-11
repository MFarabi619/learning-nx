import styled from 'styled-components';
import {Book} from './book'
import {IBook} from '@learning-nx/shared-models'

export interface BooksProps {
  books: IBook[];
  // New prop
  onAdd: (book: IBook) => void;
}

const StyledBooks = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Books = ({books, onAdd}: BooksProps) => {
 return (
   <StyledBooks>
     {books.map(book=>(
       // Pass down new callback prop
       <Book key={book.id} book={book} onAdd={onAdd}/>
     ))}
   </StyledBooks>
 )
}

export default Books;
