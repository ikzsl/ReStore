import { createAction } from 'redux-actions';

const booksLoaded = createAction('FETCH_BOOKS_SUCCESS');
const booksRequested = createAction('FETCH_BOOKS_REQUEST');
const booksError = createAction('BOOK_ADDED_TO_CART');

export const booksAddedToCart = createAction('BOOK_ADDED_TO_CART');
export const booksRemovedFromCart = createAction('BOOK_REMOVED_FROM_CART');
export const allBooksRemovedFromCart = createAction(
  'ALL_BOOK_REMOVED_FROM_CART'
);

const fetchBooksOld = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

const fetchBooks = (bookstoreService) => () => (dispatch) => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

export { fetchBooks };
