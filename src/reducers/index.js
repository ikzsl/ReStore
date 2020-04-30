const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 220,
};

const updateCartItems = (cartItems, item, idx) => {
  if (idx === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (book, item = {}) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = item;
  return {
    id,
    count: count + 1,
    title,
    total: total + book.price,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        errors: null,
      };

    case 'FETCH_BBOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        errors: null,
      };

    case 'FETCH_BBOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };

    case 'BOOK_ADDED_TO_CART':
      const bookId = action.payload;
      const book = state.books.find((item) => item.id === bookId);
      const itemIndex = state.cartItems.findIndex(({ id }) => id === bookId);
      const item = state.cartItems[itemIndex];
      const newItem = updateCartItem(book, item);

      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex),
      };

    default:
      return state;
  }
};

export default reducer;
