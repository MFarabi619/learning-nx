export async function getBooks() {
  // TODO: We'll wire this up to an actual API later.
  // For now we are just returning some fixtures.

  return [
    {
      id: 1,
      title: 'The Picture of Dorian Gray',
      author: 'Oscar Wilde',
      rating: 3,
      price: 9.99
    },
    {
      id: 2,
      title: 'Frankenstein',
      author: 'Mary Wollstonecraft Shelley',
      rating: 5,
      price: 7.95
    },
    {
      id: 3,
      title: 'Jane Eyre',
      author: 'Charlotte Bronte',
      rating: 4,
      price: 10.95
    },
    {
      id: 5,
      title: 'Dracula',
      author: 'Bram Stoker',
      rating: 5,
      price: 14.99
    },
    {
      id: 5,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      rating: 4,
      price: 12.85
    }
  ];
}
