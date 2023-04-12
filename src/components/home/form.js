import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/booksSlice';

const FormBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const booksAll = useSelector((state) => state.books.books);
  const bookCount = booksAll.length;
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook({ item_id: `item${bookCount + 1}`, title, author }));
    setTitle('');
    setAuthor('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="add book" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="add author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default FormBook;
