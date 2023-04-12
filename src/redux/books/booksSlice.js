import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      const filteredBooks = state.books.filter((book) => book.id !== bookId);
      return {
        ...state,
        books: filteredBooks,
      };
    },

  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
