const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BBOOKS_SUCCESS',
    payload: newBooks,
  };
};

const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  };
};

const booksError = (error) => {
  return {
    type: 'FETCH_BBOOKS_FAILURE',
    payload: error,
  };
};

export const booksAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId,
  }
}

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

export { fetchBooks };

