const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    { id: 1, name: 'Book 1', count: 3, total: 150 },
    { id: 2, name: 'Book 2', count: 5, total: 120 },
  ],
  orderTotal: 220,
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
    default:
      return state;
  }
};

export default reducer;
