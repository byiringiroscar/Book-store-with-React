import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appId = 'q8FdluzHjZBBWXH5Y85r';
const initialState = {
  loading: false,
  books: [],
  error: '',
};

export const getBooks = createAsyncThunk('books/getBooks', () => axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`)
  .then((response) => response.data));

const booksSlice = createSlice({
  name: 'books',
  initialState,
  // reducers: {
  //   addBook: (state, action) => {
  //     state.books.push(action.payload);
  //   },
  //   removeBook: (state, action) => {
  //     const bookId = action.payload;
  //     const filteredBooks = state.books.filter((book) => book.item_id !== bookId);
  //     return {
  //       ...state,
  //       books: filteredBooks,
  //     };
  //   },

  // },
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(getBooks.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      books: action.payload,
      error: '',
    }));
    builder.addCase(getBooks.rejected, (state, action) => ({
      ...state,
      loading: false,
      books: [],
      error: action.error.message,
    }));
  },
});

// export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
