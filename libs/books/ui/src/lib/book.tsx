import styled from 'styled-components';
import {Button} from '@learning-nx/ui';
import {IBook} from '@learning-nx/shared-models'

export interface BookProps {
  book: IBook;
  // New prop
  onAdd: (book: IBook) => void;
}

const StyledBook = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  &:last-child {
  border-bottom:none;
  }
  > span {
  padding: 1rem 0.5rem;
  margin-right: 0.5rem;
  }
  .title {
  flex: 1;
  }
  .price {
  color: #468d3c;
  }
`;

export const Book = ({book, onAdd}: BookProps) => {
  const handleAdd = () => onAdd(book);

  return (
    <StyledBook>
      <span className="title">
        {book.title} by <em>{book.author}</em>
      </span>
      <span className="rating">${book.rating}</span>
      <span className="price">${book.price}</span>
      {/* Add button to UI */}
      <span>
        <Button onClick={handleAdd}>Add to Cart</Button>
      </span>
    </StyledBook>
  );
}

export default Book;
