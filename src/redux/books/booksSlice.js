import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appId = 'q8FdluzHjZBBWXH5Y85r';
const initialState = {
  books: [],
  isLoading: false,
  error: false,
};
export const getBooks = createAsyncThunk('books/getBooks', () => axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`)
  .then((response) => response.data));
export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const result = await axios.post(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`, book);
  return result.data;
});
export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books/${id}`);
  return id;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addNewBook: (state, action) => {
      const bookItem = action.payload;
      const book = {
        item_id: bookItem.item_id,
        title: bookItem.title,
        author: bookItem.author,
        category: bookItem.category,
      };
      return {
        ...state,
        books: [...state.books, book],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => ({
      ...state,
      isLoading: true,
      error: false,
    }));
    builder.addCase(getBooks.fulfilled, (state, action) => {
      const books = action.payload;
      const newBooks = [];
      Object.keys(books).forEach((book) => newBooks.push({
        item_id: book,
        title: books[book][0].title,
        author: books[book][0].author,
        category: books[book][0].category,
      }));
      return {
        ...state,
        books: newBooks,
        isLoading: false,
        error: false,
      };
    });
    builder.addCase(getBooks.rejected, (state) => ({
      ...state,
      isLoading: false,
      error: true,
    }));
    builder.addCase(addBook.pending, (state) => ({
      ...state,
      isLoading: true,
      error: false,
    }));
    builder.addCase(addBook.fulfilled, (state) => ({
      ...state,
      isLoading: false,
      error: false,
    }));
    builder.addCase(addBook.rejected, (state) => ({
      ...state,
      isLoading: false,
      error: true,
    }));
    builder.addCase(removeBook.fulfilled, (state, action) => {
      const id = action.payload;
      const newBooks = state.books.filter((book) => book.item_id !== id);
      return {
        ...state,
        books: newBooks,
        error: false,
      };
    });
    builder.addCase(removeBook.rejected, (state) => ({
      ...state,
      error: true,
    }));
  },
});

export const { addNewBook } = booksSlice.actions;
export default booksSlice.reducer;
