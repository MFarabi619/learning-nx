import {IBook} from '@learning-nx/shared-models';

export async function getBooks(): Promise<IBook[]> {
  const data = await fetch('/api/books', {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return data.json();
}
