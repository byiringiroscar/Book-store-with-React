import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, addNewBook } from '../../redux/books/booksSlice';

const FormBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      item_id: uuidv4(),
      category,
      title,
      author,
    }))
      .then(() => dispatch(addNewBook({
        item_id: uuidv4(),
        category,
        title,
        author,
      })));
    setTitle('');
    setAuthor('');
    setCategory('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add book" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Add author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="fiction">Fiction</option>
        <option value="non-fiction">NonFiction</option>
        <option value="mystery">Mystery</option>
        <option value="sci-fi">Science Fiction</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default FormBook;
