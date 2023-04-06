import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FormBook = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="add book" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="add author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit">Add Book</button>
    </form>
  );
};
FormBook.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default FormBook;
